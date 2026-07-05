import { defineType, defineField, defineArrayMember } from "sanity";

const valueLabel = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          { name: "value", title: "Value", type: "string" },
          { name: "label", title: "Label", type: "string" },
        ],
        preview: { select: { title: "value", subtitle: "label" } },
      }),
    ],
  });

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "pillars", title: "Pillars" },
    { name: "doctors", title: "Doctors" },
    { name: "why", title: "Why Us" },
    { name: "how", title: "How It Works" },
    { name: "fees", title: "Fees & Zip" },
    { name: "locations", title: "Locations" },
    { name: "cta", title: "Final CTA" },
  ],
  fields: [
    // Hero
    defineField({ name: "heroEyebrow", title: "Eyebrow", type: "string", group: "hero" }),
    defineField({ name: "heroTitle", title: "Title", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroLead", title: "Lead", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroImage", title: "Background image", type: "image", options: { hotspot: true }, group: "hero" }),
    defineField({ name: "primaryCtaLabel", title: "Primary CTA label", type: "string", group: "hero" }),
    defineField({ name: "primaryCtaHref", title: "Primary CTA link", type: "string", group: "hero" }),
    defineField({ name: "secondaryCtaLabel", title: "Secondary CTA label", type: "string", group: "hero" }),
    defineField({ name: "secondaryCtaHref", title: "Secondary CTA link", type: "string", group: "hero" }),
    { ...valueLabel("microStats", "Micro stats"), group: "hero" },

    // Pillars
    defineField({
      name: "pillars",
      title: "Safe / Effective / Affordable",
      type: "array",
      group: "pillars",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "key", title: "Heading", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 3 },
          ],
          preview: { select: { title: "key", subtitle: "body" } },
        }),
      ],
    }),

    // Doctors intro
    defineField({ name: "doctorsEyebrow", title: "Eyebrow", type: "string", group: "doctors" }),
    defineField({ name: "doctorsTitle", title: "Title", type: "text", rows: 2, group: "doctors" }),
    defineField({ name: "doctorsBody", title: "Body", type: "text", rows: 4, group: "doctors" }),
    defineField({ name: "doctorsImage", title: "Wide image", type: "image", options: { hotspot: true }, group: "doctors" }),

    // Why choose
    defineField({ name: "whyEyebrow", title: "Eyebrow", type: "string", group: "why" }),
    defineField({ name: "whyTitle", title: "Title", type: "string", group: "why" }),
    defineField({ name: "whyImage", title: "Image", type: "image", options: { hotspot: true }, group: "why" }),
    defineField({ name: "whyPoints", title: "Points", type: "array", of: [defineArrayMember({ type: "string" })], group: "why" }),

    // How it works
    defineField({ name: "howEyebrow", title: "Eyebrow", type: "string", group: "how" }),
    defineField({ name: "howTitle", title: "Title", type: "text", rows: 2, group: "how" }),
    defineField({ name: "howBody", title: "Body", type: "text", rows: 3, group: "how" }),
    defineField({ name: "howVideoUrl", title: "Video URL / embed", type: "url", group: "how" }),
    defineField({
      name: "howSteps",
      title: "Steps",
      type: "array",
      group: "how",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "n", title: "Number", type: "string" },
            { name: "text", title: "Text", type: "text", rows: 2 },
          ],
          preview: { select: { title: "text", subtitle: "n" } },
        }),
      ],
    }),

    // Fees + Zip
    defineField({ name: "feesTitle", title: "Fees title", type: "string", group: "fees" }),
    valueLabel("feesRows", "Fee rows (label / value)"),
    defineField({ name: "feesTotalLabel", title: "Total label", type: "string", group: "fees" }),
    defineField({ name: "feesTotalValue", title: "Total value", type: "string", group: "fees" }),
    defineField({ name: "feesTerms", title: "Terms", type: "text", rows: 3, group: "fees" }),
    defineField({ name: "zipTitle", title: "Zip title", type: "string", group: "fees" }),
    defineField({ name: "zipBody", title: "Zip body", type: "text", rows: 3, group: "fees" }),

    // Locations intro
    defineField({ name: "locationsEyebrow", title: "Eyebrow", type: "string", group: "locations" }),
    defineField({ name: "locationsTitle", title: "Title", type: "text", rows: 2, group: "locations" }),
    defineField({ name: "locationsBody", title: "Body", type: "text", rows: 3, group: "locations" }),

    // Final CTA
    defineField({ name: "finalCtaTitle", title: "Title", type: "string", group: "cta" }),
    defineField({ name: "finalCtaBody", title: "Body", type: "text", rows: 3, group: "cta" }),
    defineField({ name: "finalCtaImage", title: "Background image", type: "image", options: { hotspot: true }, group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Homepage" }) },
});
