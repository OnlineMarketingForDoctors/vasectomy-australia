import { defineType, defineField, defineArrayMember } from "sanity";

export const drReferralPage = defineType({
  name: "drReferralPage",
  title: "Dr Referral Page",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    defineField({
      name: "benefits",
      title: "Benefits",
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
    defineField({ name: "closing", title: "Closing", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Dr Referral Page" }) },
});
