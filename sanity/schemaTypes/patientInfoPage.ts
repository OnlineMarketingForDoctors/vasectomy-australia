import { defineType, defineField, defineArrayMember } from "sanity";

export const patientInfoPage = defineType({
  name: "patientInfoPage",
  title: "Patient Info Page",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    defineField({
      name: "consultation",
      title: "1. Consultation",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 2 },
        {
          name: "points",
          title: "Points",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        },
      ],
    }),
    defineField({
      name: "procedure",
      title: "2. Procedure",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        {
          name: "steps",
          title: "Steps",
          type: "array",
          of: [defineArrayMember({ type: "text" })],
        },
      ],
    }),
    defineField({
      name: "preparing",
      title: "Preparing",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        {
          name: "points",
          title: "Points",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Patient Info Page" }) },
});
