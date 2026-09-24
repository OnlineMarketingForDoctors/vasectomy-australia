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
      { city: "Sydney — Enmore", clinic: "Enmore Medical Practice", address: "134–146 Enmore Rd, Enmore NSW 2042", gbpUrl: "https://www.google.com/maps?cid=7543514749350888925" },
      { city: "Sydney — North Shore", clinic: "Sydney Vasectomy Centre — North Shore", address: "Suite 205, 781 Pacific Highway, Chatswood NSW 2067" },
      { city: "Sydney — Eastern Suburbs", clinic: "Maroubra Medical & Dental Centre", address: "806/812 Anzac Parade, Maroubra NSW 2035" },
      { city: "Sydney — Northern Beaches", clinic: "Warringah Medical & Dental Centre", address: "10 Dale St, Brookvale NSW 2100", gbpUrl: "https://www.google.com/maps?cid=8484909919271390054" },
      { city: "Sydney — The Hills", clinic: "The Hills Medical and Dental Centre", address: "3 Columbia Ct, Baulkham Hills NSW 2153" },
      { city: "Sydney — Blacktown", clinic: "Pacific Medical Centre Blacktown", address: "23–27 First Ave, Blacktown NSW 2148" },
      { city: "Sydney — Sutherland Shire", clinic: "Sports Medicine Institute", address: "Ground Floor, 545–549 The Kingsway, Miranda NSW 2228" },
      { city: "Sydney — Penrith", clinic: "Penrith Medical Centre", address: "61–79 Henry St, Penrith NSW 2750" },
      { city: "Sydney — Campbelltown", clinic: "Campbelltown Medical and Dental Centre", address: "296 Queen St, Campbelltown NSW 2560" },
      { city: "Wollongong", clinic: "Dapto Medical Centre", address: "Cnr Princes Highway & Bong Bong Rd, Dapto NSW 2530", gbpUrl: "https://www.google.com/maps?cid=15433457452252358697" },
      { city: "Central Coast", clinic: "Gynaecology Centres Australia", address: "16–18 Hills St, Gosford NSW 2250", gbpUrl: "https://www.google.com/maps?cid=12309886944234598885" },
      { city: "Newcastle", clinic: "Cooks Hill Healthcare Hub", address: "235 Darby St, Cooks Hill NSW 2300", gbpUrl: "https://maps.app.goo.gl/qF7XHSNGZcBGaqoS8" },
      { city: "Port Macquarie", clinic: "Port Macquarie Medical & Dental Centre", address: "Cnr Park Street & Hastings River Dr, Port Macquarie NSW 2444", gbpUrl: "https://www.google.com/maps?cid=11942584499094411623" },
      { city: "Dubbo", clinic: "Western Plains Medical Centre", address: "62 Windsor Parade, Dubbo NSW 2830", gbpUrl: "https://www.google.com/maps?cid=17289974340491644849" },
      { city: "Orange", clinic: "Orange Family Medical Centre", address: "95 Peisley Street, Orange NSW 2800", gbpUrl: "https://www.google.com/maps?cid=5594665770607361800" },
      { city: "Tamworth", clinic: "East Tamworth Medical Centre — Northwest", address: "279B Marius Street, Tamworth NSW 2340", gbpUrl: "https://www.google.com/maps?cid=12346337307694826313" },
      { city: "Wagga Wagga", clinic: "Wagga Wagga Medical Centre", address: "4 Baylis St, Wagga Wagga NSW 2650", gbpUrl: "https://www.google.com/maps?cid=1328790735029027258" },
      { city: "Albury", clinic: "Innovate Health Albury", address: "469 Olive St, Albury NSW 2640", gbpUrl: "https://www.google.com/maps?cid=2190580672489058087" },
    ],
  },
  {
    state: "Queensland",
    code: "QLD",
    doctor: "Dr Matt Valentine",
    clinics: [
      { city: "Brisbane", clinic: "Vasectomy Clinic Brisbane", address: "5/23 Glen Affric St, The Gap QLD 4061" },
      { city: "Gold Coast", clinic: "Robina Medical & Dental Centre", address: "1 Campus Cres, Robina QLD 4226", gbpUrl: "https://www.google.com/maps?cid=15308185057749696206" },
      { city: "Sunshine Coast", clinic: "Pulse Oceanside Medical", address: "Suite 605, 11 Eccles Blvd, Birtinya QLD 4575", gbpUrl: "https://www.google.com/maps?cid=16693144675218291494" },
      { city: "Springfield", clinic: "Springfield Doctors", address: "95 Southern Cross Cct, Springfield QLD 4300", gbpUrl: "https://www.google.com/maps?cid=15178623779175476129" },
      { city: "Toowoomba", clinic: "Ochre Medical Centre Wyalla", address: "Shop 20, Wyalla Plaza, 238 Taylor Street, Toowoomba QLD 4350", gbpUrl: "https://www.google.com/maps?cid=9199391988806806246" },
      { city: "Rockhampton", clinic: "Rockhampton Central Medical Centre", address: "Shop RS1A, Stockland Rockhampton, 331 Yaamba Rd, Park Avenue QLD 4701", gbpUrl: "https://www.google.com/maps?cid=1531476243236407880" },
      { city: "Hervey Bay", clinic: "Eli Waters Medical Centre", address: "1/1 Guest Circuit, Eli Waters QLD 4655" },
      { city: "Gladstone", clinic: "Vitality Solutions", address: "43 Toolooa St, South Gladstone QLD 4680" },
      { city: "Townsville", clinic: "SmartClinics Annandale Medical Centre", address: "152 Marabou Drive, Annandale QLD 4814", gbpUrl: "https://www.google.com/maps?cid=13461262696891288480" },
    ],
  },
  {
    state: "Victoria",
    code: "VIC",
    doctor: "Dr Matt Valentine",
    clinics: [
      { city: "Melbourne — Prahran", clinic: "Melbourne Vasectomy Centre", address: "First Floor, 54 Commercial Rd, Prahran VIC 3181", gbpUrl: "https://www.google.com/maps?cid=9355928693394284610" },
      { city: "Melbourne — Gladstone Park", clinic: "Gladstone Park Shopping Centre", address: "Shop 102, Gladstone Park Drive, Gladstone Park VIC 3043", gbpUrl: "https://www.google.com/maps?cid=8092469443229750457" },
      { city: "Casey", clinic: "Casey Medical Centre", address: "15 Morison Road, Clyde VIC 3978", gbpUrl: "https://www.google.com/maps?cid=12484750923136863194" },
      { city: "Geelong", clinic: "Amara Medical Geelong", address: "Shop 1A, 110–112 High Street, Belmont VIC 3216", gbpUrl: "https://www.google.com/maps?cid=16723284167435720123" },
      { city: "Ballarat", clinic: "Carn-Brae Clinic", address: "328 Glenelg Hwy, Delacombe VIC 3356", gbpUrl: "https://www.google.com/maps?cid=17239682024035789148" },
      { city: "Bendigo", clinic: "Emu Creek Health Professionals", address: "955 Wellington Street, Strathfieldsaye VIC 3551", gbpUrl: "https://www.google.com/maps?cid=18113947718956258286" },
      { city: "Albury–Wodonga", clinic: "Innovate Health Albury", address: "469 Olive St, Albury NSW 2640", gbpUrl: "https://www.google.com/maps?cid=2190580672489058087" },
    ],
  },
  {
    state: "Western Australia",
    code: "WA",
    doctor: "Dr Matt Valentine",
    clinics: [
      { city: "Perth — Morley", clinic: "Perth Vasectomy Centre", address: "Unit 4, 515 Walter Road East, Morley WA 6062", gbpUrl: "https://www.google.com/maps?cid=17198106246768663939" },
      { city: "Perth — North", clinic: "Hillarys Plaza Medical Centre", address: "3/2 Banks Ave, Hillarys WA 6025", gbpUrl: "https://www.google.com/maps?cid=7098623147119317859" },
      { city: "Perth — South East", clinic: "Westcare Medical Centre", address: "Shop 4–5, 208 Spencer Road, Thornlie WA 6108", gbpUrl: "https://www.google.com/maps?cid=6013277865341568705" },
      { city: "Perth — Inner West", clinic: "Nedlands Medical Centre", address: "Suite 25, 88 Broadway, Nedlands WA 6009", gbpUrl: "https://www.google.com/maps?cid=16716795589097235223" },
      { city: "Rockingham", clinic: "Rockingham Medical & Dental Centre", address: "18 Civic Boulevard, Rockingham WA 6168", gbpUrl: "https://www.google.com/maps?cid=14632101356955820172" },
    ],
  },
  {
    state: "South Australia",
    code: "SA",
    doctor: "Dr Geoff Cashion",
    clinics: [
      { city: "Adelaide", clinic: "Trinity Gardens Medical Centre", address: "206–208 Portrush Rd, Trinity Gardens SA 5068", gbpUrl: "https://www.google.com/maps?cid=4507656470818061192" },
    ],
  },
  {
    state: "Tasmania",
    code: "TAS",
    doctor: "Dr Geoff Cashion",
    clinics: [
      { city: "Launceston", clinic: "Family Planning Tasmania", address: "Unit 3/93 Paterson St, Launceston TAS 7250", gbpUrl: "https://www.google.com/maps?cid=5589283213778070583" },
      { city: "Hobart — Rosny Park", clinic: "Clarence GP Super Clinic", address: "16–22 Bayfield St, Rosny Park TAS 7018", gbpUrl: "https://www.google.com/maps?cid=17990283928066948234" },
    ],
  },
];
