/**
 * Build Sanity portable-text blocks from a lightweight string:
 *   - blank lines separate paragraphs
 *   - inline links use [label](href)
 *
 * The output is valid portable text (with _key + link markDefs) so it renders
 * through PortableBody AND can be written to Sanity as `blockContent`. Keys are
 * deterministic (index-based) so the same input always produces the same doc.
 */
type Span = { _type: "span"; _key: string; text: string; marks: string[] };
type MarkDef = { _type: "link"; _key: string; href: string };
export type Block = {
  _type: "block";
  _key: string;
  style: "normal";
  markDefs: MarkDef[];
  children: Span[];
};

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

export function pt(input: string): Block[] {
  return input
    .trim()
    .split(/\n\s*\n/)
    .map((para, bi) => {
      const markDefs: MarkDef[] = [];
      const children: Span[] = [];
      let last = 0;
      let si = 0;
      let m: RegExpExecArray | null;
      LINK.lastIndex = 0;
      while ((m = LINK.exec(para))) {
        if (m.index > last) {
          children.push({ _type: "span", _key: `s${bi}_${si++}`, text: para.slice(last, m.index), marks: [] });
        }
        const key = `l${bi}_${markDefs.length}`;
        markDefs.push({ _type: "link", _key: key, href: m[2] });
        children.push({ _type: "span", _key: `s${bi}_${si++}`, text: m[1], marks: [key] });
        last = m.index + m[0].length;
      }
      if (last < para.length) {
        children.push({ _type: "span", _key: `s${bi}_${si++}`, text: para.slice(last), marks: [] });
      }
      return { _type: "block" as const, _key: `b${bi}`, style: "normal" as const, markDefs, children };
    });
}
