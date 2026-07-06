/**
 * Build Sanity portable-text blocks from a lightweight string.
 *
 * `pt()` handles simple paragraphs (blank lines separate them) with inline
 * [label](href) links.
 *
 * `richPt()` also handles `## ` / `### ` headings, `- ` bullet lists and
 * `**bold**`, for longer articles.
 *
 * Output is valid portable text (with _key + link markDefs) so it renders
 * through PortableBody AND can be written to Sanity as `blockContent`. Keys are
 * deterministic (index-based) so the same input always produces the same doc.
 */
type Span = { _type: "span"; _key: string; text: string; marks: string[] };
type MarkDef = { _type: "link"; _key: string; href: string };
export type Block = {
  _type: "block";
  _key: string;
  style: string;
  listItem?: "bullet";
  level?: number;
  markDefs: MarkDef[];
  children: Span[];
};

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const INLINE = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

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
      return { _type: "block" as const, _key: `b${bi}`, style: "normal", markDefs, children };
    });
}

function inlineChildren(text: string, bi: number): { children: Span[]; markDefs: MarkDef[] } {
  const children: Span[] = [];
  const markDefs: MarkDef[] = [];
  let si = 0;
  const push = (t: string, marks: string[]) => {
    if (t) children.push({ _type: "span", _key: `s${bi}_${si++}`, text: t, marks });
  };
  let last = 0;
  let m: RegExpExecArray | null;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text))) {
    if (m.index > last) push(text.slice(last, m.index), []);
    if (m[1] !== undefined) {
      const key = `l${bi}_${markDefs.length}`;
      markDefs.push({ _type: "link", _key: key, href: m[2] });
      push(m[1], [key]);
    } else {
      push(m[3], ["strong"]);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) push(text.slice(last), []);
  return { children, markDefs };
}

export function richPt(md: string): Block[] {
  const blocks: Block[] = [];
  let bi = 0;
  let para: string[] = [];

  const flush = () => {
    const text = para.join(" ").trim();
    para = [];
    if (!text) return;
    const { children, markDefs } = inlineChildren(text, bi);
    blocks.push({ _type: "block", _key: `b${bi++}`, style: "normal", markDefs, children });
  };

  const heading = (text: string, style: "h2" | "h3") => {
    const { children, markDefs } = inlineChildren(text, bi);
    blocks.push({ _type: "block", _key: `b${bi++}`, style, markDefs, children });
  };

  const bullet = (text: string) => {
    const { children, markDefs } = inlineChildren(text, bi);
    blocks.push({ _type: "block", _key: `b${bi++}`, style: "normal", listItem: "bullet", level: 1, markDefs, children });
  };

  for (const raw of md.replace(/\r/g, "").split("\n")) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    if (line.startsWith("### ")) { flush(); heading(line.slice(4), "h3"); continue; }
    if (line.startsWith("## ")) { flush(); heading(line.slice(3), "h2"); continue; }
    if (line.startsWith("- ")) { flush(); bullet(line.slice(2)); continue; }
    para.push(line);
  }
  flush();
  return blocks;
}
