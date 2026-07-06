import type { StructureResolver } from "sanity/structure";

const singleton = (
  S: Parameters<StructureResolver>[0],
  id: string,
  title: string
) =>
  S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(id).documentId(id));

// Singletons (Homepage, Site Settings, static Pages) + document lists.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "homepage", "Homepage"),
      singleton(S, "siteSettings", "Site Settings"),
      S.divider(),
      S.listItem()
        .title("Pages")
        .id("pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              singleton(S, "patientInfoPage", "Patient Info"),
              singleton(S, "postOpPage", "Post-Operative Instructions"),
              singleton(S, "spermTestPage", "Semen Testing"),
              singleton(S, "medicarePage", "Medicare Rebate"),
              singleton(S, "drReferralPage", "Dr Referral"),
              singleton(S, "privacyPage", "Privacy Policy"),
            ])
        ),
      S.divider(),
      S.documentTypeListItem("doctor").title("Doctors"),
      S.documentTypeListItem("clinic").title("Clinics"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("post").title("Blog Posts"),
    ]);
