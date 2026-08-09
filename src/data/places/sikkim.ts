import type { PlaceData } from "@/data/schema";

const DEST = "Sikkim";

export const sikkimPlaces: PlaceData[] = [
  {
    slug: "gangtok",
    region: "sikkim",
    name: "Gangtok",
    destinationValue: DEST,
    seo: {
      title: "Gangtok Tours | The Himalayan Ramble",
      description:
        "Gangtok travel guide and customized trips from The Himalayan Ramble — the capital of Sikkim, and the base for most of the state's permit-controlled north.",
    },
    hero: {
      image: { src: "/graphics/sikkim/akash-pratap-singh-pO9ygTkhS5o-unsplash.jpg", alt: "Gangtok" },
      lede: "~1,650m · the capital of Sikkim, and the base for most of the state's permit-controlled north.",
      ctaLabel: "Plan Your Gangtok Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A capital that's easy to like immediately.",
        media: { src: "/graphics/sikkim/koushik-mondal-lrNpQc65d7Q-unsplash.jpg", alt: "MG Marg, Gangtok" },
        body: [
          "Gangtok is compact, clean, and genuinely pleasant to walk — MG Marg, the pedestrian-only main street, is where most evenings end up, lined with cafes and shops. It's also the practical hub for the rest of Sikkim: permits for the north are arranged here, and it's the standard base for the Tsomgo Lake and Nathula day trip.",
          "Rumtek Monastery, a short drive out of town, is Sikkim's largest and one of Tibetan Buddhism's most significant monasteries outside Tibet itself.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A monastery, a lake, and two viewpoints.",
        media: { src: "/graphics/sikkim/prodeepta-bera-OyaRMukq4gI-unsplash.jpg", alt: "Rumtek Monastery, Gangtok" },
        items: [
          { title: "Rumtek Monastery", body: "The largest monastery in Sikkim, seat-in-exile of the Karmapa lineage." },
          { title: "Tsomgo (Changu) Lake", body: "A glacial lake roughly 40km out, a standard day trip combined with Nathula." },
          { title: "Ganesh Tok & Hanuman Tok", body: "Two hilltop viewpoints on the edge of town, easy half-day stops." },
          { title: "Namgyal Institute of Tibetology", body: "A research institute and museum on Tibetan Buddhist culture and manuscripts." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "March–June and October–December for clear skies." },
      { title: "Getting Here", body: "Nearest airport Pakyong, close to Gangtok. By road, roughly 4–5 hours from Bagdogra/Siliguri in West Bengal." },
      { title: "Activities", body: "Monastery visits, cable car rides, shopping on MG Marg, day trips to Tsomgo Lake and Nathula." },
      { title: "Good To Know", body: "Gangtok is the place to sort permits for anywhere further north — we handle this before you arrive wherever possible." },
    ],
    cta: { heading: "Ready to build a Gangtok itinerary?" },
  },
  {
    slug: "pelling",
    region: "sikkim",
    name: "Pelling",
    destinationValue: DEST,
    seo: {
      title: "Pelling Tours | The Himalayan Ramble",
      description:
        "Pelling travel guide and customized trips from The Himalayan Ramble — West Sikkim's best straight-on views of Kangchenjunga, the world's third-highest peak.",
    },
    hero: {
      image: { src: "/graphics/sikkim/debarghya-meikap-VRP78-gxtGU-unsplash.jpg", alt: "Pelling" },
      lede: "West Sikkim — the region's best straight-on views of Kangchenjunga, the world's third-highest peak.",
      ctaLabel: "Plan Your Pelling Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "The view most people come to Sikkim for.",
        media: { src: "/graphics/sikkim/debarghya-meikap-Ywo4F7eWDOI-unsplash.jpg", alt: "Kangchenjunga view from Pelling" },
        body: [
          "Pelling sits directly across from Kangchenjunga, and on a clear morning the peak fills the horizon in a way few other viewpoints in India manage. Beyond the view, it's a good base for West Sikkim's older Buddhist heritage — Pemayangtse Monastery and the ruins of Rabdentse, once the kingdom's capital, are both close by.",
          "It's a quieter, less commercial alternative to Gangtok, and pairs naturally with a Kangchenjunga sunrise as the highlight of a stay.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "One of Sikkim's oldest monasteries, and a lost capital.",
        media: { src: "/graphics/sikkim/pulak-bhagawati-GdlEMsUsOy0-unsplash.jpg", alt: "Pemayangtse Monastery, Pelling" },
        items: [
          { title: "Pemayangtse Monastery", body: "One of the oldest and most important Nyingma monasteries in Sikkim." },
          { title: "Rabdentse Ruins", body: "The remains of Sikkim's former capital, reached by a short forest walk." },
          { title: "Khecheopalri Lake", body: 'A small lake considered sacred and "wish-fulfilling" in local Buddhist tradition.' },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "March–May and October–December, for the clearest Kangchenjunga views." },
      { title: "Getting Here", body: "About 4–5 hours by road from Gangtok, and a similar distance from Bagdogra." },
      { title: "Activities", body: "Sunrise viewpoints, monastery visits, short treks, and the Khecheopalri Lake walk." },
      { title: "Good To Know", body: "Kangchenjunga is often clearest at dawn — we schedule an early start on your first morning to maximize the chance of a clear view." },
    ],
    cta: { heading: "Ready to build a Pelling itinerary?" },
  },
  {
    slug: "lachung",
    region: "sikkim",
    name: "Lachung",
    destinationValue: DEST,
    seo: {
      title: "Lachung Tours | The Himalayan Ramble",
      description:
        "Lachung travel guide and customized trips from The Himalayan Ramble — a North Sikkim village, and the base for Yumthang Valley and Zero Point.",
    },
    hero: {
      image: { src: "/graphics/sikkim/jyoti-singh-WUI1aUmUzvQ-unsplash.jpg", alt: "Lachung" },
      lede: "~2,750m · a North Sikkim village, and the base for Yumthang Valley and Zero Point.",
      ctaLabel: "Plan Your Lachung Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A village built for the trip further north.",
        media: { src: "/graphics/sikkim/sahil-pandita--0GJ4CIHtEg-unsplash.jpg", alt: "Lachung village" },
        body: [
          "Lachung is a small apple-growing village on the way to Yumthang Valley, and its main job on a Sikkim itinerary is as the overnight base before continuing further north. That said, it's genuinely pleasant on its own — a working monastery, orchard-lined lanes, and the kind of quiet that's harder to find in Gangtok.",
          "Most travelers spend one night here before an early departure to Yumthang and, permits allowing, Zero Point beyond it.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A monastery, and orchards on every slope.",
        media: { src: "/graphics/sikkim/swati-kedia-6y0aG3HqzAQ-unsplash.jpg", alt: "Lachung Monastery" },
        items: [
          { title: "Lachung Monastery", body: "A working Nyingma monastery on the edge of the village." },
          { title: "Apple Orchards", body: "Terraced orchards that give the village much of its livelihood and character." },
          { title: "Gateway to Yumthang & Zero Point", body: "The staging point for both, roughly an hour and further beyond by road." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "March–June for rhododendron season on the way to Yumthang, October–December for clear skies." },
      { title: "Getting Here", body: "Roughly 5 hours by road from Gangtok, through permit checkpoints along the way." },
      { title: "Activities", body: "Village walks, monastery visits, and staging for Yumthang Valley and Zero Point." },
      { title: "Good To Know", body: "A Protected Area Permit is required for this whole route — arranged in Gangtok before departure." },
    ],
    cta: { heading: "Ready to build a Lachung itinerary?" },
  },
  {
    slug: "yumthang-valley",
    region: "sikkim",
    name: "Yumthang Valley",
    destinationValue: DEST,
    seo: {
      title: "Yumthang Valley Tours | The Himalayan Ramble",
      description:
        'Yumthang Valley travel guide from The Himalayan Ramble — Sikkim\'s "Valley of Flowers," a rhododendron sanctuary with hot springs.',
    },
    hero: {
      image: { src: "/graphics/sikkim/pexels-ankan-sarkar-724231363-18341599.jpg", alt: "Yumthang Valley" },
      lede: '~3,564m · Sikkim\'s "Valley of Flowers" — a rhododendron sanctuary with hot springs and a road that keeps climbing toward Tibet.',
      ctaLabel: "Plan Your Yumthang Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A valley that blooms on a schedule.",
        media: { src: "/graphics/sikkim/unma-desai-UY5Wv8QOPB0-unsplash.jpg", alt: "Rhododendrons, Yumthang Valley" },
        body: [
          "Yumthang is a designated rhododendron sanctuary, and when the flowers peak — usually March through April — the valley floor turns into a wide sweep of colour against snow-streaked peaks. Even outside bloom season, the valley's hot springs and the sheer scale of the landscape make it worth the drive from Lachung.",
          "For travelers with the right permits, the road continues to Zero Point, near 4,600m — snow-capped even in summer, and close enough to Tibet to feel it.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A day trip, from base town to the snow line.",
        media: { src: "/graphics/sikkim/pexels-vishwajeetraj11-35040513.jpg", alt: "Yumthang river valley, Sikkim" },
        items: [
          { title: "Lachung", body: "The base town every Yumthang day trip starts and ends from." },
          { title: "Shingba Rhododendron Sanctuary", body: "The valley's protected core, home to dozens of rhododendron species." },
          { title: "Yumthang River", body: "The glacial-fed river running the length of the valley floor." },
          { title: "Yumesamdong (Zero Point)", body: "The road's permit-controlled end point, snow-covered most of the year." },
        ],
      },
    ],
    infoGridHeading: "Flowers, hot springs, and one further point.",
    infoGrid: [
      { title: "Rhododendron Sanctuary", body: "Dozens of rhododendron species bloom through the valley, peaking March–April." },
      { title: "Yumthang Hot Springs", body: "Natural hot springs on the valley floor, a welcome stop after the cold drive in." },
      { title: "Zero Point", body: "A further permit-controlled point near 4,600m, close to the Tibet border and snow-covered most of the year." },
      { title: "Good To Know", body: "This is a day trip from Lachung, not an overnight stop — the valley has no permanent accommodation." },
    ],
    cta: { heading: "Ready to build a Yumthang itinerary?" },
  },
  {
    slug: "nathula",
    region: "sikkim",
    name: "Nathula",
    destinationValue: DEST,
    seo: {
      title: "Nathula Pass Tours | The Himalayan Ramble",
      description:
        "Nathula travel guide from The Himalayan Ramble — a historic Silk Route pass on the India–China border, open to Indian tourists by permit.",
    },
    hero: {
      image: { src: "/graphics/sikkim/noel-lepcha-C85IMwc2IC0-unsplash.jpg", alt: "Nathula Pass" },
      lede: "~4,310m · a historic Silk Route pass on the India–China border, open to Indian tourists by permit.",
      ctaLabel: "Plan Your Nathula Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A border you can actually stand at.",
        media: { src: "/graphics/sikkim/gaurav-bagdi--umeutkfZew-unsplash.jpg", alt: "Nathula border pass" },
        body: [
          "Nathula was once a working point on the old Silk Route between India and Tibet, and today it's one of the few India–China border crossings tourists can actually visit, permit in hand. It's less about scenery than the fact of being there — a genuine international boundary at over 4,300m, with Indian and Chinese army posts facing each other across it.",
          "Most visits combine Nathula with Tsomgo Lake and the Baba Mandir shrine as a single, permit-controlled day trip from Gangtok.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "The road up is most of the day trip.",
        media: {
          src: "/graphics/sikkim/pexels-nihar-manyalli-2158081835-37950971.jpg",
          alt: "Tsomgo (Changu) Lake, en route to Nathula",
        },
        items: [
          { title: "Tsomgo (Changu) Lake", body: "A glacial lake roughly halfway up, usually the first stop of the day." },
          { title: "Old Silk Route", body: "The same corridor traders once used between India and Tibet, now a permit-controlled road." },
          { title: "Kupup (Elephant Lake)", body: "A small lake further along the route, named for its footprint-like shape." },
          { title: "Thegu", body: "The last village before the final climb to the pass itself." },
        ],
      },
    ],
    infoGridHeading: "A shrine, a lake, and a closed-door schedule.",
    infoGrid: [
      { title: "Baba Mandir", body: "A shrine to Baba Harbhajan Singh, an Indian Army soldier revered by troops stationed along this border." },
      { title: "Tsomgo Lake", body: "Usually visited on the same day, en route to or from Nathula." },
      { title: "Best Time to Visit", body: "May–October. The pass closes for snow in winter and is weather-dependent even in season." },
      { title: "Good To Know", body: "Nathula is typically closed to tourists on Mondays and Tuesdays, and access can be cancelled on short notice for weather or security — we build a flexible day for this into any itinerary that includes it." },
    ],
    cta: { heading: "Ready to build a Nathula itinerary?" },
  },
];
