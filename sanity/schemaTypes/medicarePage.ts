import { defineType, defineField, defineArrayMember } from "sanity";

export const medicarePage = defineType({
  name: "medicarePage",
  title: "Medicare Page",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    defineField({ name: "selfTitle", title: "Self-claim title", type: "string" }),
    defineField({ name: "selfIntro", title: "Self-claim intro", type: "text", rows: 2 }),
    defineField({
      name: "methods",
      title: "Claim methods",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 2 },
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        }),
      ],
    }),
    defineField({ name: "note", title: "Footnote", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Medicare Page" }) },
});
