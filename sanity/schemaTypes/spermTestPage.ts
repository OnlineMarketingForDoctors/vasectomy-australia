import { defineType, defineField, defineArrayMember } from "sanity";

export const spermTestPage = defineType({
  name: "spermTestPage",
  title: "Semen Testing Page",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Intro", type: "text", rows: 4 }),
    defineField({ name: "important", title: "Important note", type: "text", rows: 2 }),
    defineField({
      name: "options",
      title: "Testing options",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 4 },
            {
              name: "cta",
              title: "Button",
              type: "object",
              fields: [
                { name: "label", title: "Label", type: "string" },
                { name: "href", title: "Link", type: "url" },
              ],
            },
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        }),
      ],
    }),
    defineField({ name: "note", title: "Footnote", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Semen Testing Page" }) },
});
