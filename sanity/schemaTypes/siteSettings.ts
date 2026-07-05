import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site name", type: "string" }),
    defineField({ name: "phoneLabel", title: "Phone (label)", type: "string" }),
    defineField({ name: "phoneSub", title: "Phone (digits)", type: "string" }),
    defineField({ name: "phoneHref", title: "Phone link (tel:)", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "bookingUrl", title: "Booking URL", type: "url" }),
    defineField({ name: "googleRating", title: "Google rating", type: "string", initialValue: "5.0" }),
    defineField({ name: "googleCount", title: "Google review count", type: "string", initialValue: "361" }),
    defineField({ name: "googleHref", title: "Google reviews URL", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
