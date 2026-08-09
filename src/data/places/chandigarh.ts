import type { PlaceData } from "@/data/schema";

const DEST = "Chandigarh";
const CTA_HEADING = "Passing through Chandigarh?";
const CTA_LABEL = "Plan Your Chandigarh Stop";

export const chandigarhPlaces: PlaceData[] = [
  {
    slug: "sector-17",
    region: "chandigarh",
    name: "Sector 17",
    destinationValue: DEST,
    seo: {
      title: "Sector 17 | The Himalayan Ramble",
      description:
        "Sector 17 travel guide from The Himalayan Ramble — Chandigarh's central plaza, the commercial heart of a city designed almost entirely by numbered sectors.",
    },
    hero: {
      image: { src: "/graphics/chandigarh/pexels-ananya-mandial-931631-20488886.jpg", alt: "Sector 17, Chandigarh" },
      lede: "Chandigarh's central plaza — the commercial heart of a city designed almost entirely by numbered sectors.",
      ctaLabel: CTA_LABEL,
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Planned down to the last shopfront.",
        media: { src: "/graphics/chandigarh/pexels-ananya-mandial-931631-33059591.jpg", alt: "Sector 17 plaza" },
        body: [
          "Chandigarh is famously laid out in numbered sectors rather than named neighbourhoods, part of the city's modernist master plan, and Sector 17 is its designated centre — a pedestrian plaza of shops, cafes, and a central piazza that was designed by Le Corbusier's team as the city's commercial anchor.",
          "It's an easy, walkable stop for a break in the drive north — food, a bit of shopping, and a look at how deliberately the whole city was designed.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "Year-round; evenings are liveliest." },
      { title: "Getting Here", body: "Central Chandigarh, easily reached from the highway that most Shimla and Manali routes pass through." },
      { title: "Activities", body: "Shopping, dining, and a walk through the plaza's modernist architecture." },
      { title: "Good To Know", body: "A good lunch or overnight stop between Delhi and Shimla — we often build it in as a break point on longer Himachal routes." },
    ],
    cta: { heading: CTA_HEADING },
  },
  {
    slug: "rock-garden",
    region: "chandigarh",
    name: "Rock Garden",
    destinationValue: DEST,
    seo: {
      title: "Rock Garden | The Himalayan Ramble",
      description:
        "Rock Garden travel guide from The Himalayan Ramble — a sculpture garden built secretly from industrial waste starting in 1957, now one of Chandigarh's most-visited sights.",
    },
    hero: {
      image: { src: "/graphics/chandigarh/pexels-ayush-sinha-855671783-33861670.jpg", alt: "Rock Garden, Chandigarh" },
      lede: "A sculpture garden built secretly from industrial waste, starting in 1957 — now one of Chandigarh's most-visited sights.",
      ctaLabel: CTA_LABEL,
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Built in secret, on government land.",
        media: { src: "/graphics/chandigarh/pexels-vishalcross-33029437.jpg", alt: "Rock Garden sculptures" },
        body: [
          "Nek Chand, a government road inspector, began building the Rock Garden in 1957 out of urban and industrial waste — broken tiles, bangles, electrical fittings, discarded pottery — entirely without official permission, on land he wasn't authorized to use. By the time authorities discovered it, the site had grown into a sprawling sculpture park too remarkable to demolish.",
          "Today it spans courtyards, waterfalls, and winding narrow passages filled with thousands of mosaic figures, unlike anything else in the city.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "October–March for the most comfortable walking weather." },
      { title: "Getting Here", body: "Sector 1, next to Sukhna Lake — the two are easily combined in one visit." },
      { title: "Activities", body: "Walking the sculpture courtyards, photography, and the adjoining waterfalls." },
      { title: "Good To Know", body: "The garden's narrow, winding paths are part of the design — give it more time than you'd expect from the entrance alone." },
    ],
    cta: { heading: CTA_HEADING },
  },
  {
    slug: "sukhna-lake",
    region: "chandigarh",
    name: "Sukhna Lake",
    destinationValue: DEST,
    seo: {
      title: "Sukhna Lake | The Himalayan Ramble",
      description:
        "Sukhna Lake travel guide from The Himalayan Ramble — a man-made lake created in 1958, and the centrepiece of Le Corbusier's original city design.",
    },
    hero: {
      image: { src: "/graphics/chandigarh/pexels-ananya-mandial-931631-31103717.jpg", alt: "Sukhna Lake, Chandigarh" },
      lede: "A man-made lake created in 1958, and the centrepiece of Le Corbusier's original city design.",
      ctaLabel: CTA_LABEL,
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A lake the city was designed around.",
        media: { src: "/graphics/chandigarh/pexels-yogendras31-7104647.jpg", alt: "Sukhna Lake promenade" },
        body: [
          "Sukhna Lake was created in 1958 by damming a seasonal stream at the foot of the Shivalik hills, and it's been central to Chandigarh's identity ever since — the promenade along its edge is where much of the city goes for a morning walk, an evening boat ride, or just to sit and watch the Shivaliks in the distance.",
          "It sits right next to the Rock Garden, and the two make a natural pairing for a few hours in the city.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "Year-round; early morning or evening for the best light and the coolest air." },
      { title: "Getting Here", body: "Sector 1, adjoining the Rock Garden." },
      { title: "Activities", body: "Boating, lakeside walks, and people-watching along the promenade." },
      { title: "Good To Know", body: "Best combined with the Rock Garden as a single half-day stop — the two sit right next to each other." },
    ],
    cta: { heading: CTA_HEADING },
  },
  {
    slug: "rose-garden",
    region: "chandigarh",
    name: "Rose Garden",
    destinationValue: DEST,
    seo: {
      title: "Rose Garden | The Himalayan Ramble",
      description:
        "Rose Garden travel guide from The Himalayan Ramble — the Zakir Hussain Rose Garden, one of Asia's largest, with over 1,600 rose varieties.",
    },
    hero: {
      image: { src: "/graphics/chandigarh/pexels-natalia-sevruk-636238602-38141698.jpg", alt: "Rose Garden, Chandigarh" },
      lede: "The Zakir Hussain Rose Garden — one of Asia's largest, with over 1,600 rose varieties.",
      ctaLabel: CTA_LABEL,
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Chandigarh's answer to a green lung.",
        media: { src: "/graphics/chandigarh/pexels-gauravdeep-singh-911288050-21638052.jpg", alt: "Rose Garden blooms" },
        body: [
          "The Zakir Hussain Rose Garden spans a wide stretch of the city with over 1,600 varieties of roses planted across it, making it one of the largest rose gardens in Asia. Chandigarh's annual Rose Festival, held here, draws crowds from across the region when the blooms peak.",
          "Outside festival season, it's simply one of the city's most pleasant open spaces — a genuinely quiet stop if you need a break from driving.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "February–March, when most of the garden is in bloom and the Rose Festival is held." },
      { title: "Getting Here", body: "Sector 16, central Chandigarh, an easy stop on the way through the city." },
      { title: "Activities", body: "Garden walks, photography, and the Rose Festival if your dates line up." },
      { title: "Good To Know", body: "Outside bloom season the garden is still a pleasant green space, just without the full colour of February–March." },
    ],
    cta: { heading: CTA_HEADING },
  },
  {
    slug: "capitol-complex",
    region: "chandigarh",
    name: "Capitol Complex",
    destinationValue: DEST,
    seo: {
      title: "Capitol Complex | The Himalayan Ramble",
      description:
        "Capitol Complex travel guide from The Himalayan Ramble — a UNESCO World Heritage Site, Le Corbusier's government complex, and the city's architectural centrepiece.",
    },
    hero: {
      image: { src: "/graphics/chandigarh/pexels-mecvisuals-4056400.jpg", alt: "Capitol Complex, Chandigarh" },
      lede: "A UNESCO World Heritage Site — Le Corbusier's government complex, and the city's architectural centrepiece.",
      ctaLabel: CTA_LABEL,
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Where the whole city's design comes together.",
        media: { src: "/graphics/chandigarh/pexels-tomfisk-4438532.jpg", alt: "Capitol Complex buildings" },
        body: [
          "The Capitol Complex houses the Punjab & Haryana High Court, the Secretariat, and the Legislative Assembly — the three government buildings Le Corbusier designed as the anchor of his entire Chandigarh master plan. It was inscribed as a UNESCO World Heritage Site as part of a wider listing of Le Corbusier's architectural works across several countries.",
          "The Open Hand Monument, a rotating steel sculpture symbolizing openness and peace, stands as the complex's unofficial emblem and one of Chandigarh's most photographed landmarks.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "October–March for comfortable walking weather." },
      { title: "Getting Here", body: "Sector 1, at the northern edge of the city, near Sukhna Lake." },
      { title: "Activities", body: "Architecture walks and photography — some buildings require advance permission to enter." },
      { title: "Good To Know", body: "Government building access is restricted and sometimes requires ID and prior notice — we confirm current entry rules before including it in an itinerary." },
    ],
    cta: { heading: CTA_HEADING },
  },
];
