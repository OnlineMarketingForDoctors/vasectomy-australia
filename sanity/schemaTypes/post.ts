import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string", description: "Overrides the browser tab / search title. Defaults to the post title." }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 3, description: "Meta description. Defaults to the excerpt." }),
  ],
  orderings: [
    { title: "Newest", name: "newest", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});
