/**
 * Clinic directory, grouped by state. Adapted from the location list in the
 * Assets folder. Addresses are OCR-derived from the client's own listings and
 * should be verified before go-live (and will be editable in the CMS).
 *
 * `gbpUrl` is the exact Google Business listing URL supplied by the client.
 * Clinics without one fall back to a Google Maps search built from the address.
 */

export const locationsIntro = {
  eyebrow: "Locations",
  title: "No-scalpel vasectomy clinics across Australia.",
  body: "Dr Geoff Cashion covers NSW, South Australia and Tasmania; Dr Matt Valentine covers Queensland, Victoria and Western Australia. Between them, Vasectomy Australia runs clinics close to patients right across the country — find your nearest below.",
};

export type Clinic = {
  city: string;
  clinic: string;
  address: string;
  /** Exact Google Business listing URL; falls back to a Maps search when absent. */
  gbpUrl?: string;
  /** Timely booking URL for this clinic; falls back to the site-wide one. */
  bookingUrl?: string;
};

export type LocationState = {
  state: string;
  code: string;
  doctor: string;
  clinics: Clinic[];
};

export const locationStates: LocationState[] = [
  {
    state: "New South Wales",
    code: "NSW",
    doctor: "Dr Geoff Cashion",
    clinics: [
      { city: "Sydney — Enmore", clinic: "Enmore Medical Practice", address: "134–146 Enmore Rd, Enmore NSW 2042", gbpUrl: "https://g.page/r/Cd3F-oCy8q9oEAE", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=157255&product=2451305%3ASV&staff=288783" },
      { city: "Sydney — North Shore", clinic: "Sydney Vasectomy Centre — North Shore", address: "Suite 205, 781 Pacific Highway, Chatswood NSW 2067", gbpUrl: "https://g.page/r/CQoeQ43gc16mEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=278584&product=3111900%3ASV&staff=288783" },
      { city: "Sydney — Eastern Suburbs", clinic: "Maroubra Family Doctors", address: "Shop T01A 717 Anzac Parade, Maroubra NSW 2035", gbpUrl: "https://g.page/r/CRXeEsUPJZ0mEAE?gm", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=223631&product=2226310%3ASV&staff=288783" },
      { city: "Sydney — Northern Beaches", clinic: "Warringah Medical & Dental Centre", address: "10 Dale St, Brookvale NSW 2100", gbpUrl: "https://g.page/r/CWYLXNmddMB1EBA", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=183680&product=1842369%3ASV&staff=288783" },
      { city: "Sydney — The Hills", clinic: "The Hills Medical and Dental Centre", address: "3 Columbia Ct, Baulkham Hills NSW 2153", gbpUrl: "https://g.page/r/CfzwYPpD_PpmEBA", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=187070&product=1842503%3ASV&staff=288783" },
      { city: "Sydney — Blacktown", clinic: "Pacific Medical Centre Blacktown", address: "23–27 First Ave, Blacktown NSW 2148", gbpUrl: "https://g.page/vasectomy-australia-blacktown?gm", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=173695&product=3012564%3ASV&staff=288783" },
      { city: "Sydney — Sutherland Shire", clinic: "Sports Medicine Institute", address: "Ground Floor, 545–549 The Kingsway, Miranda NSW 2228", gbpUrl: "https://g.page/r/CT36AMB0NRQPEAE", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=232690&product=2336303%3ASV&staff=288783" },
      { city: "Sydney — Penrith", clinic: "Penrith Medical Centre", address: "61–79 Henry St, Penrith NSW 2750", gbpUrl: "https://g.page/r/CR7sEtezrZx0EBA", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=220962&product=2193244%3ASV&staff=288783" },
      { city: "Sydney — Campbelltown", clinic: "Campbelltown Medical and Dental Centre", address: "296 Queen St, Campbelltown NSW 2560", gbpUrl: "https://g.page/r/CcNaBa6Qlwj5EBA", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=185418&product=1842767%3ASV&staff=288783" },
      { city: "Wollongong", clinic: "Dapto Medical Centre", address: "Cnr Princes Highway & Bong Bong Rd, Dapto NSW 2530", gbpUrl: "https://g.page/r/CSlom2nIpy7WEBA", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=173703&product=1842615%3ASV&staff=288783" },
      { city: "Central Coast", clinic: "Gynaecology Centres Australia", address: "16–18 Hills St, Gosford NSW 2250", gbpUrl: "https://g.page/r/CeVxUoj0gNWqEAE", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=184309&product=1842379%3ASV&staff=288783" },
      { city: "Newcastle", clinic: "Cooks Hill Healthcare Hub", address: "235 Darby St, Cooks Hill NSW 2300", gbpUrl: "https://g.page/r/CRPjhNAvkfY-EAE", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=173696&product=3012567%3ASV&staff=288783" },
      { city: "Port Macquarie", clinic: "Port Macquarie Medical & Dental Centre", address: "Cnr Park Street & Hastings River Dr, Port Macquarie NSW 2444", gbpUrl: "https://g.page/r/CWfZm9BTlbylEAE", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=246051&product=2544155%3ASV&staff=288783" },
      { city: "Dubbo", clinic: "Western Plains Medical Centre", address: "62 Windsor Parade, Dubbo NSW 2830", gbpUrl: "https://g.page/r/CbGPn3QOVPLvEBA", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=191217&product=1840080%3ASV&staff=288783" },
      { city: "Orange", clinic: "Orange Family Medical Centre", address: "95 Peisley Street, Orange NSW 2800", gbpUrl: "https://g.page/r/CQi_FmbgPqRNEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=270554&product=2976823%3ASV&staff=288783" },
      { city: "Tamworth", clinic: "East Tamworth Medical Centre — Northwest", address: "279B Marius Street, Tamworth NSW 2340", gbpUrl: "https://g.page/r/CUmDTR5eAFerEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=271434&product=2992840%3ASV&staff=288783" },
      { city: "Wagga Wagga", clinic: "Wagga Wagga Medical Centre", address: "4 Baylis St, Wagga Wagga NSW 2650", gbpUrl: "https://g.page/r/CbpBPB4i0HASEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=288039&product=4446057%3ASV&staff=288783" },
      { city: "Albury", clinic: "Innovate Health Albury", address: "469 Olive St, Albury NSW 2640", gbpUrl: "https://g.page/r/CSfvi_ODgWYeEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=298720&product=4446060%3ASV&staff=288783" },
    ],
  },
  {
    state: "Queensland",
    code: "QLD",
    doctor: "Dr Matt Valentine",
    clinics: [
      { city: "Brisbane", clinic: "Vasectomy Clinic Brisbane", address: "5/23 Glen Affric St, The Gap QLD 4061", gbpUrl: "https://g.page/r/CcbnOQE02fxCEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=417351&product=5494631%3ASV&staff=459829" },
      { city: "Gold Coast", clinic: "Robina Medical & Dental Centre", address: "1 Campus Cres, Robina QLD 4226", gbpUrl: "https://g.page/r/Cc7-HCs0mXHUEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=271087&product=2986617%3ASV&staff=459829" },
      { city: "Sunshine Coast", clinic: "Pulse Oceanside Medical", address: "Suite 605, 11 Eccles Blvd, Birtinya QLD 4575", gbpUrl: "https://g.page/r/CSb7llaj9qnnEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=306417&product=3603528%3ASV&staff=459829" },
      { city: "Springfield", clinic: "Springfield Doctors", address: "95 Southern Cross Cct, Springfield QLD 4300", gbpUrl: "https://g.page/r/CaErDUnoTaXSEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=288868&product=3286472%3ASV&staff=459829" },
      { city: "Toowoomba", clinic: "Ochre Medical Centre Wyalla", address: "Shop 20, Wyalla Plaza, 238 Taylor Street, Toowoomba QLD 4350", gbpUrl: "https://g.page/r/CeZqZ_pFzqp_EBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=281352&product=3159231%3ASV&staff=459829" },
      { city: "Rockhampton", clinic: "Rockhampton Central Medical Centre", address: "Shop RS1A, Stockland Rockhampton, 331 Yaamba Rd, Park Avenue QLD 4701", gbpUrl: "https://g.page/r/CUhKDnSH5UAVEAE", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=173702&product=2848862%3ASV&staff=459829" },
      { city: "Gladstone", clinic: "Vitality Solutions", address: "43 Toolooa St, South Gladstone QLD 4680", gbpUrl: "https://g.page/r/CY65o--gh0q3EBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=377481&product=4934058%3ASV&staff=459829" },
      { city: "Townsville", clinic: "SmartClinics Annandale Medical Centre", address: "152 Marabou Drive, Annandale QLD 4814", gbpUrl: "https://g.page/r/CaALbBwaA9C6EBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=277452&product=3094093%3ASV&staff=459829" },
    ],
  },
  {
    state: "Victoria",
    code: "VIC",
    doctor: "Dr Matt Valentine",
    clinics: [
      { city: "Melbourne — Prahran", clinic: "Melbourne Vasectomy Centre", address: "First Floor, 54 Commercial Rd, Prahran VIC 3181", gbpUrl: "https://g.page/r/CUKgpqmT79aBEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=199369&product=2909739%3ASV" },
      { city: "Melbourne — Gladstone Park", clinic: "Gladstone Park Shopping Centre", address: "Shop 102, Gladstone Park Drive, Gladstone Park VIC 3043", gbpUrl: "https://g.page/r/CbmUaTcVOk5wEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=173697&product=1833368%3ASV&staff=459829" },
      { city: "Casey", clinic: "Casey Medical Centre", address: "1S Morison Road, Clyde VIC 3978", gbpUrl: "https://g.page/r/CdqLzUrRvkKtEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=294902&product=3390310%3ASV&staff=459829" },
      { city: "Geelong", clinic: "Amara Medical Geelong", address: "Shop 1A, 110–112 High Street, Belmont VIC 3216", gbpUrl: "https://g.page/r/CbuV67VYChXoEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=288461&product=3279684%3ASV" },
      { city: "Ballarat", clinic: "Carn-Brae Clinic", address: "328 Glenelg Hwy, Delacombe VIC 3356", gbpUrl: "https://g.page/r/CVwpVwt2pz_vEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=302467&product=3529502%3ASV&staff=459829" },
      { city: "Bendigo", clinic: "Emu Creek Health Professionals", address: "955 Wellington Street, Strathfieldsaye VIC 3551", gbpUrl: "https://g.page/r/Ce6TYoR6q2H7EBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=324796&product=3940899%3ASV&staff=459829" },
      { city: "Albury–Wodonga", clinic: "Innovate Health Albury", address: "469 Olive St, Albury NSW 2640", gbpUrl: "https://g.page/r/CSfvi_ODgWYeEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=298720&product=4446060%3ASV&staff=288783" },
    ],
  },
  {
    state: "Western Australia",
    code: "WA",
    doctor: "Dr Matt Valentine",
    clinics: [
      { city: "Perth — Morley", clinic: "Perth Vasectomy Centre", address: "Unit 4, 515 Walter Road East, Morley WA 6062", gbpUrl: "https://g.page/r/CYOdEhCD8qvuEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=299909&product=3483059%3ASV&staff=459829" },
      { city: "Perth — North", clinic: "Hillarys Plaza Medical Centre", address: "3/2 Banks Ave, Hillarys WA 6025", gbpUrl: "https://g.page/r/CWOTaWYkYINiEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=299910&product=3483051%3ASV" },
      { city: "Perth — South East", clinic: "Westcare Medical Centre", address: "Shop 4–5, 208 Spencer Road, Thornlie WA 6108", gbpUrl: "https://g.page/r/CcFGZ9tbdHNTEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=341330&product=4261143%3ASV&staff=459829" },
      { city: "Perth — Inner West", clinic: "Nedlands Medical Centre", address: "Suite 25, 88 Broadway, Nedlands WA 6009", gbpUrl: "https://g.page/r/CRcj9dYE_f3nEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=374226&product=4895321%3ASV&staff=459829" },
      { city: "Rockingham", clinic: "Rockingham Medical & Dental Centre", address: "18 Civic Boulevard, Rockingham WA 6168", gbpUrl: "https://g.page/r/CYzg3PKoqg_LEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=284289&product=3207460%3ASV" },
    ],
  },
  {
    state: "South Australia",
    code: "SA",
    doctor: "Dr Geoff Cashion",
    clinics: [
      { city: "Adelaide", clinic: "Trinity Gardens Medical Centre", address: "206–208 Portrush Rd, Trinity Gardens SA 5068", gbpUrl: "https://g.page/r/CYj7mXitaY4-EAE", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=173700&product=2854571%3ASV&staff=288783" },
    ],
  },
  {
    state: "Tasmania",
    code: "TAS",
    doctor: "Dr Geoff Cashion",
    clinics: [
      { city: "Launceston", clinic: "Family Planning Tasmania", address: "Unit 3/93 Paterson St, Launceston TAS 7250", gbpUrl: "https://g.page/r/CTesSzp4H5FNEBM", bookingUrl: "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=293655&product=3370680%3ASV&staff=288783" },
      { city: "Hobart — Rosny Park", clinic: "Clarence GP Super Clinic", address: "16–22 Bayfield St, Rosny Park TAS 7018", gbpUrl: "https://www.google.com/maps?cid=17990283928066948234" },
    ],
  },
];
