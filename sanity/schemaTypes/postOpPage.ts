import { defineType, defineField, defineArrayMember } from "sanity";

export const postOpPage = defineType({
  name: "postOpPage",
  title: "Post-Op Page",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    defineField({
      name: "blocks",
      title: "Care blocks",
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
    defineField({
      name: "restrictions",
      title: "Activity restrictions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "period", title: "Period", type: "string" },
            { name: "items", title: "Avoid", type: "string" },
          ],
          preview: { select: { title: "period", subtitle: "items" } },
        }),
      ],
    }),
    defineField({ name: "warning", title: "Warning", type: "text", rows: 2 }),
    defineField({ name: "closing", title: "Closing", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Post-Op Page" }) },
});
