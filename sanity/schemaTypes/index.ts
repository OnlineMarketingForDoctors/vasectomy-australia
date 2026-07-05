import type { SchemaTypeDefinition } from "sanity";
import { blockContent } from "./blockContent";
import { siteSettings } from "./siteSettings";
import { homepage } from "./homepage";
import { doctor } from "./doctor";
import { faq } from "./faq";
import { clinic } from "./clinic";
import { post } from "./post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homepage, doctor, clinic, faq, post, blockContent],
};
