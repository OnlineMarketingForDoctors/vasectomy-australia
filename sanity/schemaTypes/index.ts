import type { SchemaTypeDefinition } from "sanity";
import { blockContent } from "./blockContent";
import { siteSettings } from "./siteSettings";
import { homepage } from "./homepage";
import { doctor } from "./doctor";
import { faq } from "./faq";
import { clinic } from "./clinic";
import { post } from "./post";
import { patientInfoPage } from "./patientInfoPage";
import { postOpPage } from "./postOpPage";
import { spermTestPage } from "./spermTestPage";
import { medicarePage } from "./medicarePage";
import { drReferralPage } from "./drReferralPage";
import { privacyPage } from "./privacyPage";
import { locationPage } from "./locationPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homepage,
    patientInfoPage,
    postOpPage,
    spermTestPage,
    medicarePage,
    drReferralPage,
    privacyPage,
    locationPage,
    doctor,
    clinic,
    faq,
    post,
    blockContent,
  ],
};
