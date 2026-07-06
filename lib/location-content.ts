/**
 * Code-based content for location pages. Each entry is the fallback the site
 * renders when the matching Sanity `locationPage` document is missing or a field
 * is empty — so a page always works, and CMS edits win when present.
 *
 * New suburb pages are normally created in the Studio (Location Pages); they
 * don't need an entry here.
 */
import { pt } from "@/lib/pt";
import type { SiteImage } from "@/lib/images";

export type LocationView = {
  slug: string;
  title: string;
  eyebrow: string;
  lead: string;
  heroImage: SiteImage;
  seoTitle: string;
  seoDescription: string;
  introBody: unknown[];
  whatIsHeading: string;
  whatIsBody: unknown[];
  whatIsImage: SiteImage;
  recoveryHeading: string;
  recoveryBody: unknown[];
  whyHeading: string;
  whyBody: unknown[];
  whyImage: SiteImage;
  whyBadgeValue: string;
  whyBadgeLabel: string;
  areasHeading: string;
  areasBody: unknown[];
  nswClinics: string[];
  otherClinics: string[];
  mapQuery: string;
  areasOutro: unknown[];
  costHeading: string;
  costBody: unknown[];
  showFees: boolean;
  costTerms: string;
  faqHeading: string;
  faqs: { question: string; answer: string[] }[];
  ctaTitle: string;
};

const CDN = "https://d2ol7oe51mr4n9.cloudfront.net/user_3Ary2g06ZSWzxFoVWIP644Wm9ZG";

const newcastle: LocationView = {
  slug: "vasectomy-newcastle",
  title: "Vasectomy Newcastle",
  eyebrow: "Newcastle · Dr Geoff Cashion",
  lead: "Are you looking for a safe and easy vasectomy Newcastle men can have performed in under 30 minutes?",
  heroImage: {
    src: `${CDN}/0aeb80d6-b31b-4200-b52c-95ae24fd8bc4.png`,
    alt: "A relaxed, confident man after his no-scalpel vasectomy in Newcastle",
  },
  seoTitle: "Vasectomy Newcastle — No-Scalpel Vasectomy with Dr Geoff Cashion",
  seoDescription:
    "A safe and easy vasectomy Newcastle men can have performed in under 30 minutes — under local anaesthetic, with a no-scalpel technique and a quick recovery.",
  introBody: pt(
    `Vasectomy Australia performs this procedure under local anaesthetic with a [no-scalpel vasectomy technique](/) that allows for a quicker recovery, meaning you can resume usual activities within seven days.

Dr. Geoff Cashion performs over 70 of these procedures per week with one of the lowest vasectomy costs Newcastle can offer. His open-ended no-scalpel technique is proven to have the lowest risk of complications possible.`
  ),
  whatIsHeading: "What Is A Vasectomy?",
  whatIsBody: pt(
    `The [vasectomy procedure](/vasectomy-procedure-explained) is a male sterilisation technique that creates a permanent method of contraception via a surgical procedure. By closing the sperm-carrying tubes called the vas deferens, sperm is no longer able to access the urethra meaning there are no chances of possible pregnancy.

The vasectomy procedure is quick and able to be performed in under 30 minutes and does not require a general anaesthetic. Dr. Cashion performs over 4,000 vasectomies a year with a gentle technique that allows for a fast recovery and return to work all at an affordable price.

You will be able to have your consultation and the procedure on the same day in our clinic or speak to Dr. Cashion for a free phone consultation. Online bookings are also available for a range of locations around Australia.

For those who are no longer wanting to have children, the vasectomy procedure provides peace of mind for both men and women, creating almost zero risk of possible pregnancy.`
  ),
  whatIsImage: {
    src: `${CDN}/0712b831-82a1-4f89-8acc-c2e14904dbe6.png`,
    alt: "A father with his children — permanent contraception, complete peace of mind",
  },
  recoveryHeading: "What Is Involved in The Recovery of a Vasectomy?",
  recoveryBody: pt(
    `Recovery after the vasectomy procedure is very simple. You may feel a little sore; however, this will only last for a few days. It will take around three months for your semen to become clear of sperm, at which point you will no longer require any birth control methods during intercourse.

There can be risks of bruising or infection; however, these are quite low and can be minimised by resting and wearing underpants that provide ample support.

We recommend that you avoid aspirin as well as heavy lifting or extreme movement for a week after the vasectomy. Desk-based roles, however, should be able to be resumed the day after having your vasectomy.

It would also be best to avoid sitting for long periods, bike riding, and contact sports for around 2-3 weeks.

For those who are no longer wanting to have children, the vasectomy procedure provides peace of mind for both men and women, leaving almost zero risk of pregnancy once completed.`
  ),
  whyHeading: "Why Choose Dr. Geoff Cashion?",
  whyBody: pt(
    `Dr. Geoff Cashion has been practising medicine for over [two decades](/about) and was trained in Florida, USA by one of the world's leading vasectomy surgeons, Dr. Doug Stein.

Dr. Cashion specialises in the no-scalpel technique via multiple locations across Australia and is one of the busiest in the field, performing over 70 vasectomies a week. Many men have trusted his skills in ensuring they no longer have to worry about an unplanned pregnancy with their partner.

Born in Brisbane, Dr. Cashion graduated from the University of Queensland in Medicine in 2002 and is a fellow of the [Australian College of Rural and Remote Medicine (FACRRM)](https://www.acrrm.org.au/) and the [Royal College of Emergency Medicine (FRCEM)](https://www.rcem.ac.uk/). He is also a former medical educator and supervisor of general practice registrars through James Cook University.`
  ),
  whyImage: {
    src: `${CDN}/28cdd0db-3840-4643-957e-c41b129a5d28.png`,
    alt: "Dr Geoff Cashion, Vasectomy Australia",
  },
  whyBadgeValue: "4,000+",
  whyBadgeLabel: "vasectomies a year",
  areasHeading: "Which Locations Are Serviced by Vasectomy Australia?",
  areasBody: pt(
    `Dr. Cashion performs the no-scalpel procedure in a range of [vasectomy clinic locations across Australia](/locations) with a focus on Sydney vasectomy services, including other areas within New South Wales, Victoria, Queensland, and South Australia.`
  ),
  nswClinics: [
    "Neutral Bay Medical Centre",
    "Enmore Medical Practice",
    "Blacktown Doctors and Medical Centre",
    "Newcastle – Cooks Hill Family Practice",
    "Wollongong – Oche Medical Centre",
    "Central Coast / Gosford – Gynaecology Centres of Australia",
    "Canberra – Gynaecology Centres of Australia Queanbeyan",
  ],
  otherClinics: [
    "Melbourne – Gladstone Park Superclinic",
    "Melbourne – Bay St Family Medical Centre Brighton",
    "Berwick – Casey Superclinic",
    "Brisbane – Taringa 7 Day Medical Centre",
    "Logan – Logan Central Medical Centre",
    "Morayfield – Morayfield 7 Day Medical Centre",
    "Rockhampton – CQ Doctors",
    "Mackay – City GP Superclinic",
    "Adelaide – Trinity Garden Medical Centre",
  ],
  mapQuery: "Cooks Hill, Newcastle NSW 2300",
  areasOutro: pt(
    `Bookings can be made over the phone or [online by selecting the clinic you wish to visit](/book-online).`
  ),
  costHeading: "How Much Does the Vasectomy Procedure Cost?",
  costBody: pt(
    `The vasectomy cost Newcastle men have access to via Vasectomy Australia is based on the fee recommended by the [Australian Medical Association (AMA)](https://ama.com.au/):`
  ),
  showFees: true,
  costTerms:
    "We require that the total fee be payable on the day of your procedure. Your Medicare rebate can be credited to your account on the same day in most cases.",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      question: "Can my vasectomy be reversed?",
      answer: [
        "While vasectomies can be reversed, we strongly recommend you do not undergo this procedure if you think there is a chance you'll want a reversal. Vasectomies should be thought of as permanent contraception.",
        "Reversals are very expensive, not covered by Medicare, and cannot be guaranteed to work.",
      ],
    },
    {
      question: "What will sex be like after my vasectomy?",
      answer: [
        "You will be able to masturbate comfortably a few days after your procedure, and full sexual functions will be able to be resumed after roughly a week. There will be no change to erections, desire, or ejaculation post-procedure.",
        "You may notice a slight difference in the volume of ejaculate, but for most men, their sex life improves post-vasectomy, courtesy of an almost zero risk of pregnancy or requirement of contraception.",
        "It is vital, however, that you do not rely on your vasectomy as a form of birth control until we have confirmed it is safe to do so, roughly around the three months' mark post-procedure. This time is required to flush the sperm from your semen.",
      ],
    },
    {
      question: "What long-term risks should I be considering when undergoing a vasectomy?",
      answer: [
        "The vasectomy procedure performed by Dr. Cashion is exceptionally safe, and it has been proven that the procedure creates no increased risks of long term complications such as cancer.",
      ],
    },
  ],
  ctaTitle: "Book your Newcastle vasectomy.",
};

export const locationFallbacks: Record<string, LocationView> = {
  "vasectomy-newcastle": newcastle,
};
