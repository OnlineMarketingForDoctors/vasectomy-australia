import type { StructureResolver } from "sanity/structure";

// Singletons (Homepage, Site Settings) + document lists.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .id("homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("doctor").title("Doctors"),
      S.documentTypeListItem("clinic").title("Clinics"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("post").title("Blog Posts"),
    ]);
