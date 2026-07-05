import { defineType, defineField, defineArrayMember } from "sanity";

export const doctor = defineType({
  name: "doctor",
  title: "Doctor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "regions", title: "Regions covered", type: "string" }),
    defineField({ name: "image", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "lead", title: "Lead line", type: "text", rows: 2 }),
    defineField({
      name: "bio",
      title: "Biography (paragraphs)",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({ name: "personal", title: "Personal note", type: "text", rows: 3 }),
    defineField({ name: "badgeValue", title: "Stat card — value", type: "string" }),
    defineField({ name: "badgeLabel", title: "Stat card — label", type: "string" }),
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "qualifications",
      title: "Qualifications timeline",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "year", title: "Year", type: "string" },
            { name: "text", title: "Detail", type: "string" },
          ],
          preview: { select: { title: "text", subtitle: "year" } },
        }),
      ],
    }),
  ],
  orderings: [
    { title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});
