import type { PlaceData } from "@/data/schema";

const DEST = "Delhi";

export const delhiPlaces: PlaceData[] = [
  {
    slug: "connaught-place",
    region: "delhi",
    name: "Connaught Place",
    destinationValue: DEST,
    seo: {
      title: "Connaught Place | The Himalayan Ramble",
      description:
        "Connaught Place travel guide from The Himalayan Ramble — Central Delhi's colonial-era circular plaza, built in the 1930s, and still the city's commercial heart.",
    },
    hero: {
      image: { src: "/graphics/delhi/pexels-aditya-kumar-16613252-6393978.jpg", alt: "Connaught Place" },
      lede: "Central Delhi's colonial-era circular plaza — built in the 1930s, and still the city's commercial heart.",
      ctaLabel: "Plan Your Delhi Stop",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Georgian columns, ninety years on.",
        media: { src: "/graphics/delhi/pexels-pramodtiwari-13759774.jpg", alt: "Connaught Place architecture" },
        body: [
          "Connaught Place was laid out in the 1930s as New Delhi's commercial centre, built in concentric circles of white Georgian-style colonnades that still define the area today. It remains one of Delhi's busiest hubs — shops, restaurants, and Central Park at its heart, with Palika Bazaar's underground market beneath it.",
          "It's a practical, easy stop for a layover day in Delhi — central, walkable, and well connected to the rest of the city by metro.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "October–March for comfortable weather. Delhi summers are extremely hot." },
      { title: "Getting Here", body: "Central Delhi, on the Delhi Metro's Yellow and Blue lines — Rajiv Chowk station sits right beneath it." },
      { title: "Activities", body: "Shopping, dining, Central Park, and Palika Bazaar underground market." },
      { title: "Good To Know", body: "A natural half-day stop between airport arrival and heading north — we usually pair it with one or two of the nearby heritage sites." },
    ],
    cta: { heading: "Planning a Delhi stopover?" },
  },
  {
    slug: "chandni-chowk",
    region: "delhi",
    name: "Chandni Chowk",
    destinationValue: DEST,
    seo: {
      title: "Chandni Chowk | The Himalayan Ramble",
      description:
        "Chandni Chowk travel guide from The Himalayan Ramble — Old Delhi's historic market street, laid out by Shah Jahan in the 17th century.",
    },
    hero: {
      image: { src: "/graphics/delhi/pexels-asifmethar-789750.jpg", alt: "Chandni Chowk" },
      lede: "Old Delhi's historic market street, laid out by Shah Jahan in the 17th century.",
      ctaLabel: "Plan Your Delhi Stop",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Delhi's oldest market, still fully alive.",
        media: { src: "/graphics/delhi/pexels-praneesh-venu-74116257-9812255.jpg", alt: "Chandni Chowk market lanes" },
        body: [
          "Chandni Chowk has been Old Delhi's commercial artery since the Mughal era — narrow lanes packed with spice traders, jewellers, and some of the city's most famous street food, from stuffed parathas to jalebi fried fresh at the roadside. Jama Masjid, India's largest mosque, anchors one end; the Red Fort sits close by.",
          "It rewards walking slowly and eating as you go — this is a stop better experienced than photographed from a distance.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "October–March, and early morning or evening to avoid the midday crowd and heat." },
      { title: "Getting Here", body: "Chandni Chowk metro station on the Yellow Line drops you right at the market's edge." },
      { title: "Activities", body: "Street food, Jama Masjid visit, spice and textile shopping, Red Fort nearby." },
      { title: "Good To Know", body: "A cycle rickshaw through the narrowest lanes is worth doing once — the streets are too tight and crowded to drive." },
    ],
    cta: { heading: "Planning a Delhi stopover?" },
  },
  {
    slug: "india-gate",
    region: "delhi",
    name: "India Gate",
    destinationValue: DEST,
    seo: {
      title: "India Gate | The Himalayan Ramble",
      description:
        "India Gate travel guide from The Himalayan Ramble — a 42-metre war memorial built 1921–31, and one of Delhi's favourite evening gathering spots.",
    },
    hero: {
      image: { src: "/graphics/delhi/pexels-insideoutdog-9370987.jpg", alt: "India Gate" },
      lede: "A 42-metre war memorial built 1921–31, and one of Delhi's favourite evening gathering spots.",
      ctaLabel: "Plan Your Delhi Stop",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A memorial that doubles as a park.",
        media: { src: "/graphics/delhi/pexels-rajneesh-narula-252427656-31709020.jpg", alt: "India Gate lawns" },
        body: [
          "India Gate commemorates the roughly 84,000 Indian soldiers who died serving in World War I, and the Amar Jawan Jyoti — an eternal flame — burns beneath the arch in their memory. Around it stretch some of Delhi's most popular public lawns, filled every evening with families, food carts, and couples out for a walk once the day's heat breaks.",
          "It's as much a city ritual as a monument — best visited in the evening, when it's genuinely alive rather than just a photo stop.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "Evenings, year-round, once the daytime heat has eased." },
      { title: "Getting Here", body: "Central Delhi, a short walk or auto ride from Central Secretariat metro station." },
      { title: "Activities", body: "Evening walks, street food carts, and the illuminated monument after dark." },
      { title: "Good To Know", body: "Rajpath, the ceremonial boulevard leading up to it, is also where the annual Republic Day parade runs each January." },
    ],
    cta: { heading: "Planning a Delhi stopover?" },
  },
  {
    slug: "qutub-minar",
    region: "delhi",
    name: "Qutub Minar",
    destinationValue: DEST,
    seo: {
      title: "Qutub Minar | The Himalayan Ramble",
      description:
        "Qutub Minar travel guide from The Himalayan Ramble — a UNESCO World Heritage Site, a 73-metre minaret begun in 1193, still Delhi's tallest brick monument.",
    },
    hero: {
      image: { src: "/graphics/delhi/pexels-jetkerim-13943611.jpg", alt: "Qutub Minar" },
      lede: "A UNESCO World Heritage Site — a 73-metre minaret begun in 1193, still Delhi's tallest brick monument.",
      ctaLabel: "Plan Your Delhi Stop",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Eight centuries, and still standing.",
        media: { src: "/graphics/delhi/pexels-ranjeet-chauhan-485922-19966859.jpg", alt: "Qutub Minar complex" },
        body: [
          "Qutub Minar was begun in 1193 by Qutb-ud-din Aibak to mark the start of Muslim rule in Delhi, and construction continued across several rulers over the following centuries — you can see the shift in style as the tower rises. At its base sits the Iron Pillar of Delhi, a metallurgical curiosity that has resisted rust for over 1,600 years, still not fully explained by modern metallurgy.",
          "The wider complex includes ruined mosques and tombs, making it one of the more atmospheric heritage sites in the city to wander through slowly.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "October–March, and earlier in the day to avoid both heat and crowds." },
      { title: "Getting Here", body: "South Delhi, on the Yellow Line — Qutub Minar metro station is a short walk from the entrance." },
      { title: "Activities", body: "Monument and ruins walk, the Iron Pillar, and the surrounding Mehrauli Archaeological Park." },
      { title: "Good To Know", body: "Entry is ticketed, and the site closes by early evening — worth checking current hours before planning your visit around it." },
    ],
    cta: { heading: "Planning a Delhi stopover?" },
  },
  {
    slug: "humayuns-tomb",
    region: "delhi",
    name: "Humayun's Tomb",
    destinationValue: DEST,
    seo: {
      title: "Humayun's Tomb | The Himalayan Ramble",
      description:
        "Humayun's Tomb travel guide from The Himalayan Ramble — a UNESCO World Heritage Site, built 1570, the Mughal garden-tomb that set the template for the Taj Mahal.",
    },
    hero: {
      image: { src: "/graphics/delhi/pexels-keith-cyrus-371873388-14496993.jpg", alt: "Humayun's Tomb" },
      lede: "A UNESCO World Heritage Site, built 1570 — the Mughal garden-tomb that set the template for the Taj Mahal.",
      ctaLabel: "Plan Your Delhi Stop",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "The tomb that came before the Taj.",
        media: { src: "/graphics/delhi/pexels-pranavsinh232-12757212.jpg", alt: "Humayun's Tomb gardens" },
        body: [
          "Built in 1570 for the Mughal emperor Humayun, this tomb was the first grand garden-tomb of its kind in India, and its Persian-style charbagh layout — symmetrical quadrants of garden around a central structure — directly influenced the design of the Taj Mahal decades later. It sits quietly in South Delhi, far less crowded than the city's better-known sights.",
          "The scale and calm of the gardens make it one of the more genuinely peaceful stops in the city, especially compared to the density of Old Delhi.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "October–March, and early morning for the softest light on the sandstone." },
      { title: "Getting Here", body: "South Delhi, near JLN Stadium metro station on the Violet Line." },
      { title: "Activities", body: "Garden walks, architecture and photography, and a genuinely unhurried heritage visit." },
      { title: "Good To Know", body: "Pair it with Qutub Minar for a single, unhurried heritage-focused day in South Delhi." },
    ],
    cta: { heading: "Planning a Delhi stopover?" },
  },
];
