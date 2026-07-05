import { defineType, defineField } from "sanity";

const STATES = [
  "New South Wales",
  "Queensland",
  "Victoria",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "Australian Capital Territory",
  "Northern Territory",
];

export const clinic = defineType({
  name: "clinic",
  title: "Clinic",
  type: "document",
  fields: [
    defineField({
      name: "state",
      title: "State",
      type: "string",
      options: { list: STATES.map((s) => ({ title: s, value: s })) },
      validation: (r) => r.required(),
    }),
    defineField({ name: "stateCode", title: "State code (e.g. NSW)", type: "string" }),
    defineField({ name: "doctor", title: "Doctor", type: "string" }),
    defineField({ name: "city", title: "City / area", type: "string", validation: (r) => r.required() }),
    defineField({ name: "name", title: "Clinic name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "gbpUrl", title: "Google Business listing URL", type: "url" }),
    defineField({ name: "learnMoreUrl", title: "Learn more URL", type: "url" }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
  ],
  orderings: [
    {
      title: "State, then order",
      name: "stateOrder",
      by: [
        { field: "state", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: { select: { title: "name", subtitle: "city" } },
});
