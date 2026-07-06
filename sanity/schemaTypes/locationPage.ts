import { defineType, defineField, defineArrayMember } from "sanity";

export const locationPage = defineType({
  name: "locationPage",
  title: "Location Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content" },
    { name: "areas", title: "Service areas" },
    { name: "cost", title: "Cost" },
    { name: "faq", title: "FAQ" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Hero
    defineField({
      name: "title",
      title: "Page title (H1)",
      type: "string",
      group: "hero",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "hero",
      description: "The page path, e.g. “vasectomy-newcastle” → /vasectomy-newcastle",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "lead", title: "Hero lead", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true }, group: "hero" }),

    // Content sections
    defineField({ name: "introBody", title: "Intro", type: "blockContent", group: "content" }),

    defineField({ name: "whatIsHeading", title: "“What is a vasectomy” heading (H2)", type: "string", group: "content" }),
    defineField({ name: "whatIsBody", title: "“What is a vasectomy” body", type: "blockContent", group: "content" }),
    defineField({ name: "whatIsImage", title: "“What is a vasectomy” image", type: "image", options: { hotspot: true }, group: "content" }),

    defineField({ name: "recoveryHeading", title: "Recovery heading (H3)", type: "string", group: "content" }),
    defineField({ name: "recoveryBody", title: "Recovery body", type: "blockContent", group: "content" }),

    defineField({ name: "whyHeading", title: "“Why choose” heading (H3)", type: "string", group: "content" }),
    defineField({ name: "whyBody", title: "“Why choose” body", type: "blockContent", group: "content" }),
    defineField({ name: "whyImage", title: "Doctor image", type: "image", options: { hotspot: true }, group: "content" }),
    defineField({ name: "whyBadgeValue", title: "Stat card — value", type: "string", group: "content" }),
    defineField({ name: "whyBadgeLabel", title: "Stat card — label", type: "string", group: "content" }),

    // Service areas
    defineField({ name: "areasHeading", title: "Service-areas heading (H3)", type: "string", group: "areas" }),
    defineField({ name: "areasBody", title: "Service-areas intro", type: "blockContent", group: "areas" }),
    defineField({
      name: "nswClinics",
      title: "Primary clinic list",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      group: "areas",
    }),
    defineField({
      name: "otherClinics",
      title: "Other clinics list",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      group: "areas",
    }),
    defineField({
      name: "mapQuery",
      title: "Map search query",
      type: "string",
      description: "Address or place used for the embedded Google map, e.g. “Cooks Hill, Newcastle NSW 2300”",
      group: "areas",
    }),
    defineField({ name: "areasOutro", title: "Service-areas closing line", type: "blockContent", group: "areas" }),

    // Cost
    defineField({ name: "costHeading", title: "Cost heading (H3)", type: "string", group: "cost" }),
    defineField({ name: "costBody", title: "Cost intro", type: "blockContent", group: "cost" }),
    defineField({
      name: "showFees",
      title: "Show the standard fee table",
      type: "boolean",
      initialValue: true,
      group: "cost",
    }),
    defineField({ name: "costTerms", title: "Payment terms", type: "text", rows: 3, group: "cost" }),

    // FAQ
    defineField({ name: "faqHeading", title: "FAQ heading (H3)", type: "string", group: "faq" }),
    defineField({
      name: "faqs",
      title: "Questions",
      type: "array",
      group: "faq",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            {
              name: "answer",
              title: "Answer (paragraphs)",
              type: "array",
              of: [defineArrayMember({ type: "text", rows: 3 })],
            },
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),

    defineField({ name: "ctaTitle", title: "Closing CTA title", type: "string", group: "cost" }),

    // SEO
    defineField({ name: "seoTitle", title: "SEO title", type: "string", group: "seo" }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 3, group: "seo" }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current", media: "heroImage" },
  },
});
