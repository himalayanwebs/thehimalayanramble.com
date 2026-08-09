import type { PlaceData } from "@/data/schema";

const DEST = "Jammu & Kashmir";

export const jammuAndKashmirPlaces: PlaceData[] = [
  {
    slug: "srinagar",
    region: "jammu-and-kashmir",
    name: "Srinagar",
    destinationValue: DEST,
    seo: {
      title: "Srinagar Tours | The Himalayan Ramble",
      description:
        "Srinagar travel guide and customized trips from The Himalayan Ramble — the summer capital of Jammu & Kashmir, built around the Jhelum River and Dal Lake.",
    },
    hero: {
      image: { src: "/graphics/jammu-and-kashmir/pexels-amjed-wani-1355393378-25786581.jpg", alt: "Srinagar, Dal Lake" },
      lede: "The summer capital of Jammu & Kashmir, built around the Jhelum River and Dal Lake.",
      ctaLabel: "Plan Your Srinagar Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A city built as much on water as on land.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-faizanmeer-35921751.jpg", alt: "Dal Lake houseboats" },
        body: [
          "Srinagar's identity runs through Dal Lake — houseboats moored along its edges, shikaras threading between floating vegetable markets, and the Mughal gardens terraced up the hills behind it. It's been Kashmir's summer capital for centuries, and the pace of the old city still reflects that: unhurried, built for staying rather than passing through.",
          "Beyond the lake, the old city's wooden mosques and the Kashmiri handicraft trade — papier-mâché, pashmina, hand-knotted carpets — are as much a part of Srinagar as the water.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "Gardens built by emperors, and a temple on a hill.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-uvaiz-muhammed-359358-36856158.jpg", alt: "Mughal gardens, Srinagar" },
        items: [
          { title: "Shalimar Bagh & Nishat Bagh", body: "Terraced Mughal gardens overlooking the lake, at their best in spring and autumn." },
          { title: "Dal Lake Houseboats", body: "Cedar-carved houseboats, many still family-run, some over a century old." },
          { title: "Shankaracharya Temple", body: "A hilltop temple with the best overview of the city and lake." },
          { title: "Old City", body: "Jama Masjid and Khanqah-e-Moula, both examples of Kashmir's distinctive wooden mosque architecture." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "April–June for tulips and spring gardens, September–October for autumn chinar colour." },
      { title: "Getting Here", body: "Direct flights to Srinagar from major Indian cities. By road, it's the natural first stop coming in via the Jammu–Srinagar highway." },
      { title: "Activities", body: "Shikara rides, houseboat stays, garden visits, and shopping for local handicrafts in the old city." },
      { title: "Good To Know", body: "A houseboat stay is worth building into the itinerary as an overnight, not just a daytime shikara ride — it changes the whole feel of the city." },
    ],
    cta: { heading: "Ready to build a Srinagar itinerary?" },
  },
  {
    slug: "gulmarg",
    region: "jammu-and-kashmir",
    name: "Gulmarg",
    destinationValue: DEST,
    seo: {
      title: "Gulmarg Tours | The Himalayan Ramble",
      description:
        'Gulmarg travel guide and customized trips from The Himalayan Ramble — the "Meadow of Flowers," and Kashmir\'s main ski destination.',
    },
    hero: {
      image: { src: "/graphics/jammu-and-kashmir/pexels-imadclicks-15363695.jpg", alt: "Gulmarg" },
      lede: '~2,650m · the "Meadow of Flowers," and Kashmir\'s main ski destination.',
      ctaLabel: "Plan Your Gulmarg Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A meadow in summer, a ski resort in winter.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-imadclicks-31612526.jpg", alt: "Gulmarg meadow" },
        body: [
          "Gulmarg's name means exactly what it sounds like — a meadow of flowers, and in the warmer months it lives up to it, rolling grassland framed by pine forest. But it's winter that Gulmarg is really known for: it's Kashmir's premier ski resort, with slopes and powder that draw skiers from across the country and beyond.",
          "The Gulmarg Gondola, one of the highest cable cars in the world, runs in two stages up to Apharwat Peak at nearly 3,980m — open to both skiers and anyone who just wants the view.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "One of the highest cable cars anywhere.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-gautham-reghu-1029880-19225283.jpg", alt: "Gulmarg Gondola" },
        items: [
          { title: "Gulmarg Gondola", body: "A two-stage cable car climbing to nearly 3,980m at Apharwat Peak." },
          { title: "Skiing & Snowboarding", body: "December through March, with terrain for beginners through experienced off-piste skiers." },
          { title: "Gulmarg Golf Course", body: "One of the highest green golf courses in the world, open in the summer months." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "December–February for skiing. April–June for meadows without the snow crowds." },
      { title: "Getting Here", body: "About an hour and a half's drive from Srinagar — usually run as a day trip or short overnight from there." },
      { title: "Activities", body: "Skiing and snowboarding in winter, gondola rides year-round, golf and trekking in summer." },
      { title: "Good To Know", body: "Ski equipment and instructors are available to hire locally — no need to bring your own gear unless you prefer to." },
    ],
    cta: { heading: "Ready to build a Gulmarg itinerary?" },
  },
  {
    slug: "pahalgam",
    region: "jammu-and-kashmir",
    name: "Pahalgam",
    destinationValue: DEST,
    seo: {
      title: "Pahalgam Tours | The Himalayan Ramble",
      description:
        'Pahalgam travel guide and customized trips from The Himalayan Ramble — the "Valley of Shepherds," strung along the Lidder River and base for the Amarnath Yatra.',
    },
    hero: {
      image: { src: "/graphics/jammu-and-kashmir/pexels-imadclicks-27496413.jpg", alt: "Pahalgam" },
      lede: 'The "Valley of Shepherds," strung along the Lidder River — and base for the Amarnath Yatra.',
      ctaLabel: "Plan Your Pahalgam Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Meadows the camera crews found first.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-imushahid-14177070.jpg", alt: "Lidder River, Pahalgam" },
        body: [
          "Pahalgam sits on the Lidder River, ringed by pine forest and open meadow — Betaab Valley and Aru Valley, both nearby, have been backdrops in enough Bollywood films that the names stuck. But Pahalgam's bigger role is as the traditional base for the Amarnath Yatra, the Hindu pilgrimage to a sacred ice formation deep in the mountains, with Chandanwari as the usual starting point for the trek.",
          "Outside pilgrimage season, it's simply one of Kashmir's most photogenic valleys — river walks, pony rides, and quiet.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "Two valleys, and a pilgrim road.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-qaarif-15963212.jpg", alt: "Betaab Valley, Pahalgam" },
        items: [
          { title: "Betaab Valley", body: "A wide, forested valley named for the 1983 film shot here." },
          { title: "Aru Valley", body: "A quieter meadow further out, popular for short treks and pony rides." },
          { title: "Chandanwari", body: "The starting point of the Amarnath Yatra trek, roughly 16km from Pahalgam." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "March–June and September–November. The Amarnath Yatra typically runs July–August." },
      { title: "Getting Here", body: "About 90 minutes to two hours from Srinagar by road, usually combined with the same trip." },
      { title: "Activities", body: "Horse and pony rides, river-side walks, valley excursions to Betaab and Aru, trekking." },
      { title: "Good To Know", body: "If your visit overlaps with the Amarnath Yatra, accommodation books up fast — we plan around the pilgrimage calendar when relevant." },
    ],
    cta: { heading: "Ready to build a Pahalgam itinerary?" },
  },
  {
    slug: "sonmarg",
    region: "jammu-and-kashmir",
    name: "Sonmarg",
    destinationValue: DEST,
    seo: {
      title: "Sonmarg Tours | The Himalayan Ramble",
      description:
        'Sonmarg travel guide and customized trips from The Himalayan Ramble — the "Meadow of Gold," and the gateway to Ladakh over the Zoji La.',
    },
    hero: {
      image: { src: "/graphics/jammu-and-kashmir/pexels-rubaitulazad-35027239.jpg", alt: "Sonmarg" },
      lede: '~2,800m · the "Meadow of Gold," and the gateway to Ladakh over the Zoji La.',
      ctaLabel: "Plan Your Sonmarg Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "The last stop before the road climbs into Ladakh.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-imadclicks-6487376.jpg", alt: "Thajiwas Glacier, Sonmarg" },
        body: [
          "Sonmarg sits at the point where the Kashmir valley gives way to the high mountains — the Zoji La pass just beyond it is the gateway on the Srinagar–Leh highway. The Thajiwas Glacier, an easy pony ride or walk from town, is the main draw for a day visit, alongside a handful of high alpine lakes further in on trekking routes.",
          "It's as much a staging point as a destination — the natural overnight before or after crossing into Ladakh.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A glacier by pony, lakes by trekking boot.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-shahfaizanfilms-30092084.jpg", alt: "Snow-capped peaks near Sonmarg" },
        items: [
          { title: "Thajiwas Glacier", body: "A short pony ride or walk from Sonmarg — snow underfoot even in the height of summer." },
          { title: "Vishansar & Krishansar Lakes", body: "Twin alpine lakes reached on multi-day treks from Sonmarg." },
          { title: "Zoji La", body: "The high pass connecting Kashmir to Ladakh, seasonal like most passes at this altitude." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "April–October. Zoji La typically closes with heavy winter snow." },
      { title: "Getting Here", body: "Roughly 80km, about 2–3 hours, from Srinagar — the first leg of the Srinagar–Leh highway." },
      { title: "Activities", body: "Glacier visits, pony rides, multi-day treks to the alpine lakes further in." },
      { title: "Good To Know", body: "If Sonmarg is part of a route into Ladakh, we build the Zoji La crossing around current road and weather conditions — it's genuinely weather-dependent." },
    ],
    cta: { heading: "Ready to build a Sonmarg itinerary?" },
  },
  {
    slug: "jammu",
    region: "jammu-and-kashmir",
    name: "Jammu",
    destinationValue: DEST,
    seo: {
      title: "Jammu Tours | The Himalayan Ramble",
      description:
        'Jammu travel guide and customized trips from The Himalayan Ramble — the winter capital, the "City of Temples," and gateway to the Vaishno Devi shrine.',
    },
    hero: {
      image: { src: "/graphics/jammu-and-kashmir/pexels-tauseefkhaliq-12750077.jpg", alt: "Jammu" },
      lede: 'The winter capital of Jammu & Kashmir — the "City of Temples," and gateway to the Vaishno Devi shrine.',
      ctaLabel: "Plan Your Jammu Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A different rhythm from the valley up north.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-qaarif-13384451.jpg", alt: "Raghunath Temple, Jammu" },
        body: [
          'Jammu runs on a different calendar than Srinagar — it\'s the winter capital, warmer and lower-altitude, and its identity is built around temples rather than lakes. The city earns its "City of Temples" nickname honestly, and for a huge number of Indian travelers, it\'s primarily known as the base for the Vaishno Devi pilgrimage, one of the country\'s most visited shrines.',
          "It works well as a bookend to a Kashmir trip — a lower-altitude start or finish that doesn't depend on mountain weather.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "Temples, a fort, and a palace complex.",
        media: { src: "/graphics/jammu-and-kashmir/pexels-aadil-mehraj-440728798-27379157.jpg", alt: "Bahu Fort, Jammu" },
        items: [
          { title: "Vaishno Devi Shrine", body: "A major Hindu pilgrimage site on the Trikuta hills near Katra, reached by a well-marked trek." },
          { title: "Raghunath Temple", body: "One of North India's largest temple complexes, in the heart of the city." },
          { title: "Bahu Fort", body: "An old fort overlooking the Tawi River, with gardens now built around it." },
          { title: "Mubarak Mandi Palace", body: "The former royal residence of the Dogra dynasty, now partly restored." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "October–March. Jammu's plains get hot through the summer months." },
      { title: "Getting Here", body: "Jammu has its own airport and rail head, and sits at the start of the Jammu–Srinagar highway." },
      { title: "Activities", body: "Vaishno Devi pilgrimage trek, temple and fort visits, palace tours." },
      { title: "Good To Know", body: "The Vaishno Devi trek can be done on foot, by pony, or by helicopter for part of the route — we plan around your pace and time." },
    ],
    cta: { heading: "Ready to build a Jammu itinerary?" },
  },
];
