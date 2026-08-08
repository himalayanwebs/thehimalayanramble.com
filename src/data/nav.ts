export interface NavPlace {
  slug: string;
  name: string;
}

export interface NavRegion {
  slug: string;
  name: string;
  places: NavPlace[];
}

// Source of truth for header/footer/mobile nav today; becomes the seed for
// each region's full RegionData/PlaceData records in Phase 3/4.
export const NAV_REGIONS: NavRegion[] = [
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    places: [
      { slug: "shimla", name: "Shimla" },
      { slug: "manali", name: "Manali" },
      { slug: "spiti", name: "Spiti" },
      { slug: "kinnaur", name: "Kinnaur" },
      { slug: "kullu", name: "Kullu" },
    ],
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    places: [
      { slug: "leh", name: "Leh" },
      { slug: "nubra-valley", name: "Nubra Valley" },
      { slug: "pangong-lake", name: "Pangong Lake" },
      { slug: "zanskar", name: "Zanskar" },
      { slug: "kargil", name: "Kargil" },
    ],
  },
  {
    slug: "jammu-and-kashmir",
    name: "Jammu & Kashmir",
    places: [
      { slug: "srinagar", name: "Srinagar" },
      { slug: "gulmarg", name: "Gulmarg" },
      { slug: "pahalgam", name: "Pahalgam" },
      { slug: "sonmarg", name: "Sonmarg" },
      { slug: "jammu", name: "Jammu" },
    ],
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    places: [
      { slug: "nainital", name: "Nainital" },
      { slug: "mussoorie", name: "Mussoorie" },
      { slug: "rishikesh", name: "Rishikesh" },
      { slug: "dehradun", name: "Dehradun" },
      { slug: "auli", name: "Auli" },
    ],
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    places: [
      { slug: "gangtok", name: "Gangtok" },
      { slug: "pelling", name: "Pelling" },
      { slug: "lachung", name: "Lachung" },
      { slug: "yumthang-valley", name: "Yumthang Valley" },
      { slug: "nathula", name: "Nathula" },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    places: [
      { slug: "connaught-place", name: "Connaught Place" },
      { slug: "chandni-chowk", name: "Chandni Chowk" },
      { slug: "india-gate", name: "India Gate" },
      { slug: "qutub-minar", name: "Qutub Minar" },
      { slug: "humayuns-tomb", name: "Humayun's Tomb" },
    ],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    places: [
      { slug: "sector-17", name: "Sector 17" },
      { slug: "rock-garden", name: "Rock Garden" },
      { slug: "sukhna-lake", name: "Sukhna Lake" },
      { slug: "rose-garden", name: "Rose Garden" },
      { slug: "capitol-complex", name: "Capitol Complex" },
    ],
  },
];

export const PRIMARY_NAV = [
  { href: "/", label: "Home" },
  { href: "/contact/", label: "Contact Us" },
  { href: "/blog/", label: "Blog" },
  { href: "/terms/", label: "Terms & Conditions" },
];

export const CONTACT = {
  phone: "+91 76500 99770",
  phoneHref: "tel:+917650099770",
  email: "thehimalayanramble@gmail.com",
  whatsappHref:
    "https://api.whatsapp.com/send/?phone=917650099770&text&type=phone_number&app_absent=0",
  address:
    "Ground Floor, Rathore Complex, Dhalli Bypass, Sanjauli, Shimla, Himachal Pradesh 171006",
  hours: "Mon–Sat, 9:00 AM–6:00 PM",
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/himalayanramble/" },
  { label: "Facebook", href: "https://www.facebook.com/himalayanramble/" },
  { label: "X (Twitter)", href: "https://x.com/HimalayanRamble" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCp5h3rPKeYI9ciOJAjCWQ2g" },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=917650099770&text&type=phone_number&app_absent=0" },
  {
    label: "TripAdvisor",
    href: "https://www.tripadvisor.in/Attraction_Review-g304552-d33060623-Reviews-The_Himalayan_Ramble-Shimla_Shimla_District_Himachal_Pradesh.html",
  },
];
