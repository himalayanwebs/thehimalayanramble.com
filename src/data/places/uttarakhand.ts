import type { PlaceData } from "@/data/schema";

const DEST = "Uttarakhand";

export const uttarakhandPlaces: PlaceData[] = [
  {
    slug: "nainital",
    region: "uttarakhand",
    name: "Nainital",
    destinationValue: DEST,
    seo: {
      title: "Nainital Tours | The Himalayan Ramble",
      description:
        "Nainital travel guide and customized trips from The Himalayan Ramble — built around Naini Lake, one of Uttarakhand's most visited and charming hill stations.",
    },
    hero: {
      image: { src: "/graphics/uttarakhand/pexels-alok-kumar-273007-15031440.jpg", alt: "Nainital" },
      lede: "Built around Naini Lake — one of Uttarakhand's most visited hill stations, and still one of its most charming.",
      ctaLabel: "Plan Your Nainital Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A lake at the centre of everything.",
        media: { src: "/graphics/uttarakhand/pexels-bohemian_heart-tanusree-218916-696974.jpg", alt: "Naini Lake, Nainital" },
        body: [
          "Nainital forms around Naini Lake, considered one of the sacred Shakti Peeth sites in Hindu tradition, ringed by forested hills. The town's Mall Road runs along the lake's edge, and boating on the water is as much a part of a Nainital visit as any single landmark.",
          "It's an easy hill station to slow down in — walk the lake, take a cable car up for the view, and use it as a base for the smaller lakes scattered nearby.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A temple, a cable car, and two viewpoints.",
        media: { src: "/graphics/uttarakhand/pexels-soubhagya23-33329078.jpg", alt: "Snow View Point, Nainital" },
        items: [
          { title: "Naina Devi Temple", body: "A revered temple at the northern edge of the lake." },
          { title: "Snow View Point", body: "Reached by cable car, with views toward the snow-capped peaks on a clear day." },
          { title: "Tiffin Top", body: "A quieter viewpoint, popular for a short walk out of town." },
          { title: "Bhimtal & Sattal", body: "Two smaller, calmer lakes a short drive from Nainital." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "March–June and September–November. December–January can bring light snow." },
      { title: "Getting Here", body: "Nearest airport Pantnagar, nearest railhead Kathgodam — both roughly 3–4 hours by road." },
      { title: "Activities", body: "Boating on Naini Lake, cable car rides, Mall Road shopping, day trips to Bhimtal and Sattal." },
      { title: "Good To Know", body: "Nainital gets busy during Indian school holiday seasons — worth booking accommodation early if traveling then." },
    ],
    cta: { heading: "Ready to build a Nainital itinerary?" },
  },
  {
    slug: "mussoorie",
    region: "uttarakhand",
    name: "Mussoorie",
    destinationValue: DEST,
    seo: {
      title: "Mussoorie Tours | The Himalayan Ramble",
      description:
        'Mussoorie travel guide and customized trips from The Himalayan Ramble — the "Queen of the Hills," and the closest hill station to Dehradun.',
    },
    hero: {
      image: { src: "/graphics/uttarakhand/pexels-abhra-ghosh-362148807-16152405.jpg", alt: "Mussoorie" },
      lede: '~2,000m · the "Queen of the Hills," and the closest hill station to Dehradun.',
      ctaLabel: "Plan Your Mussoorie Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "The hill station colonial Delhi escaped to.",
        media: { src: "/graphics/uttarakhand/pexels-tanmoy-pal-3640736-14065141.jpg", alt: "Mall Road, Mussoorie" },
        body: [
          'Mussoorie earned its "Queen of the Hills" nickname during the British era, when it became a favoured summer escape from the plains, and the Mall Road still carries that colonial-era charm — walkable, lined with old bakeries and viewpoints. At around 2,000m, it\'s an easy step up in altitude and temperature from Dehradun below.',
          "Two cable cars — one to Gun Hill, one associated with Lal Tibba — give Mussoorie its main draws beyond the Mall itself.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "Two viewpoints, and a waterfall everyone visits.",
        media: { src: "/graphics/uttarakhand/pexels-saheb-santanu-767020986-31443434.jpg", alt: "Kempty Falls, Mussoorie" },
        items: [
          { title: "Gun Hill", body: "Mussoorie's second-highest point, reached by cable car, with wide Himalayan views." },
          { title: "Lal Tibba", body: "The highest point in town — telescope viewing on a clear day." },
          { title: "Kempty Falls", body: "A multi-tiered waterfall a short drive out of town, popular with families." },
          { title: "Company Garden", body: "A quieter, laid-out garden with a small lake, good for a slower afternoon." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "March–June and September–November. December–January for snow, though it's not guaranteed every year." },
      { title: "Getting Here", body: "About 35km, under an hour, from Dehradun — the most accessible hill station in the region." },
      { title: "Activities", body: "Cable car rides, waterfall visits, Mall Road walks, garden visits." },
      { title: "Good To Know", body: "Mussoorie pairs naturally with Dehradun as a short two-stop trip — we usually route them together." },
    ],
    cta: { heading: "Ready to build a Mussoorie itinerary?" },
  },
  {
    slug: "rishikesh",
    region: "uttarakhand",
    name: "Rishikesh",
    destinationValue: DEST,
    seo: {
      title: "Rishikesh Tours | The Himalayan Ramble",
      description:
        'Rishikesh travel guide and customized trips from The Himalayan Ramble — the "Yoga Capital of the World," on the banks of the Ganges.',
    },
    hero: {
      image: { src: "/graphics/uttarakhand/pexels-lexi-lauwers-1431940-2921076.jpg", alt: "Rishikesh, on the Ganges" },
      lede: 'The "Yoga Capital of the World," on the banks of the Ganges — and the starting point for the Char Dham Yatra.',
      ctaLabel: "Plan Your Rishikesh Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Where the Ganges leaves the mountains.",
        media: { src: "/graphics/uttarakhand/pexels-julia-volk-5205768.jpg", alt: "Lakshman Jhula, Rishikesh" },
        body: [
          "Rishikesh sits right where the Ganges comes down out of the Himalaya onto the plains, and that river shapes everything about the town — the suspension bridges crossing it, the ashrams lining its banks, and the evening Ganga Aarti at Triveni Ghat that draws a crowd every single day. It earned global recognition as a yoga and meditation centre, and that identity is still very much alive alongside the rafting crowd the same river attracts.",
          "It's also the traditional starting point for the Char Dham Yatra, the pilgrimage circuit to four of Uttarakhand's most sacred sites.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "Two bridges, and India's best-known rafting stretch.",
        media: { src: "/graphics/uttarakhand/pexels-animesh-srivastava-3019173-8055260.jpg", alt: "River rafting, Rishikesh" },
        items: [
          { title: "Lakshman Jhula & Ram Jhula", body: "Two iconic suspension bridges across the Ganges, both lined with temples and shops." },
          { title: "Triveni Ghat", body: "The site of Rishikesh's evening Ganga Aarti, a genuine daily ritual, not a staged show." },
          { title: "Beatles Ashram", body: "The former Maharishi Mahesh Yogi ashram where the Beatles famously stayed in 1968, now open to visitors." },
          { title: "White-water Rafting", body: "Grade I–IV rapids on the Ganges depending on the stretch and season, one of India's most established rafting circuits." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "September–April. Rafting season runs September through June, avoiding the monsoon." },
      { title: "Getting Here", body: "About 45km, roughly an hour, from Dehradun. Rishikesh also has its own small airport." },
      { title: "Activities", body: "White-water rafting, yoga and meditation retreats, the evening Ganga Aarti, ashram visits." },
      { title: "Good To Know", body: "Rishikesh is dry and vegetarian by local custom — no alcohol or meat sold within town limits." },
    ],
    cta: { heading: "Ready to build a Rishikesh itinerary?" },
  },
  {
    slug: "dehradun",
    region: "uttarakhand",
    name: "Dehradun",
    destinationValue: DEST,
    seo: {
      title: "Dehradun Tours | The Himalayan Ramble",
      description:
        "Dehradun travel guide and customized trips from The Himalayan Ramble — the capital of Uttarakhand, and the valley gateway most Uttarakhand trips pass through.",
    },
    hero: {
      image: { src: "/graphics/uttarakhand/pexels-dainiktales-27178287.jpg", alt: "Dehradun" },
      lede: "The capital of Uttarakhand, and the valley gateway most Uttarakhand trips pass through.",
      ctaLabel: "Plan Your Dehradun Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Less a destination, more the door to everywhere else.",
        media: { src: "/graphics/uttarakhand/pexels-mohit-hambiria-92377455-20231570.jpg", alt: "Dehradun valley" },
        body: [
          "Dehradun sits in a wide valley between the Shivalik hills and the higher Himalaya, and functions mainly as the state's transport hub — nearly every trip to Mussoorie, Rishikesh, or the wider Char Dham circuit passes through here first. It's worth a stop in its own right, though: a genuine institutional and colonial-era history, and a handful of easy day-trip sights.",
          "We usually build in a night here at the start or end of a longer Uttarakhand route, rather than as a standalone base.",
        ],
      },
    ],
    infoGridHeading: "A colonial institute, and a cave stream.",
    infoGrid: [
      { title: "Forest Research Institute", body: "A grand colonial-era building housing a museum on India's forestry history — one of Dehradun's more distinctive sights." },
      { title: "Robber's Cave (Guchhupani)", body: "A shallow stream-fed cave walk, popular as an easy, cooling half-day outing." },
      { title: "Sahastradhara", body: "Sulphur springs on the edge of town, a traditional stop for a relaxed afternoon." },
      { title: "Best Time to Visit", body: "March–June and September–November, year-round as a transit stop." },
    ],
    cta: { heading: "Ready to build a Dehradun itinerary?" },
  },
  {
    slug: "auli",
    region: "uttarakhand",
    name: "Auli",
    destinationValue: DEST,
    seo: {
      title: "Auli Tours | The Himalayan Ramble",
      description:
        "Auli travel guide and customized trips from The Himalayan Ramble — Uttarakhand's main ski resort, with Nanda Devi filling the skyline.",
    },
    hero: {
      image: { src: "/graphics/uttarakhand/pexels-ravikant-34792711.jpg", alt: "Auli" },
      lede: "~2,800–3,050m · Uttarakhand's main ski resort, with Nanda Devi filling the skyline.",
      ctaLabel: "Plan Your Auli Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Skiing with a view of India's second-highest peak.",
        media: { src: "/graphics/uttarakhand/pexels-miheertewari-36908076.jpg", alt: "Auli ski slopes" },
        body: [
          "Auli is Uttarakhand's answer to a genuine ski resort — open slopes between 2,800m and 3,050m, with Nanda Devi (India's second-highest peak, at nearly 7,816m) and the surrounding range visible from nearly everywhere on the mountain. It's smaller and quieter than the big ski destinations further west, which is part of the appeal.",
          "Outside ski season, Auli is still worth the trip for the ropeway ride alone, and for the Gorson Bugyal meadow trek just above town.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "One of Asia's longest cable cars.",
        media: { src: "/graphics/uttarakhand/pexels-miheertewari-35536244.jpg", alt: "Auli Ropeway" },
        items: [
          { title: "Auli Ropeway", body: "A cable car connecting Joshimath to Auli, one of the longest of its kind in Asia." },
          { title: "Skiing & Snowboarding", body: "January through March, with an artificial lake used for snowmaking when needed." },
          { title: "Gorson Bugyal", body: "A high meadow trek above town, striking with or without snow cover." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "December–March for snow and skiing. April–June for clear mountain views without the snow." },
      { title: "Getting Here", body: "Via Joshimath, roughly 250km and 9–10 hours by road from Dehradun. The ropeway covers the final stretch up to Auli itself." },
      { title: "Activities", body: "Skiing, snowboarding, ropeway rides, and meadow trekking outside winter." },
      { title: "Good To Know", body: "Ski equipment and instruction are available on-site, so no need to arrive with your own gear." },
    ],
    cta: { heading: "Ready to build an Auli itinerary?" },
  },
];
