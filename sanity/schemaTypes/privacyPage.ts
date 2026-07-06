import { defineType, defineField, defineArrayMember } from "sanity";

export const privacyPage = defineType({
  name: "privacyPage",
  title: "Privacy Policy Page",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 3 },
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Privacy Policy Page" }) },
});
