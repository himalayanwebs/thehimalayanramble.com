import type { RegionData } from "@/data/schema";

// Filled in region-by-region (Phase 3/4 of the rebuild) — a region only
// needs an entry here once its full RegionData + place set is real content,
// not placeholder. Regions without an entry yet simply have no live pages.
export const REGIONS: RegionData[] = [
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    seo: {
      title: "Himachal Pradesh Tours | The Himalayan Ramble",
      description:
        "Himachal Pradesh travel guide and customized trips from The Himalayan Ramble — our home region, based in Shimla since 2000. Shimla, Manali, Spiti, Kinnaur, and Kullu.",
    },
    hero: {
      image: {
        src: "/graphics/himachal-pradesh/shimla/pexels-ibrahim-bennett-2187162-30550230.jpg",
        alt: "Himachal Pradesh mountain landscape",
      },
      lede: "Our home turf — the office has been in Shimla since 2000, and most of what we know about running trips in the Himalaya, we learned on these five roads first.",
    },
    trust: [
      { num: "5", label: "Places live: Shimla, Manali, Spiti, Kinnaur, Kullu" },
      { num: "25", label: "Years operating in this region" },
      { num: "Year-Round", label: "Something is always in season" },
    ],
    placesHeading: "Five places, five very different trips.",
    placesLede:
      "From a colonial hill station you can walk without a vehicle, to a cold desert valley that closes to most of the world every winter. Pick a place, or tell us the version of Himachal you're after and we'll route it.",
    intro: {
      heading: "We're not visiting this region. We work out of it.",
      body: [
        "Every route on this page has been driven by our own guides, more than once, in more than one season. That's the difference between a Himachal itinerary built from a map and one built from knowing which pass closes early, which guesthouse actually keeps the room warm, and which detour is worth the extra two hours.",
        "We hold approvals from the Department of Tourism, Himachal Pradesh, and the Ministry of Tourism, Government of India — and we've been running these five routes since the office opened in 2000.",
      ],
    },
    places: [
      {
        slug: "shimla",
        name: "Shimla",
        meta: "2,206m",
        hook: "The former summer capital of British India — seven hills, pine forest, and where our office has always been.",
        image: { src: "/graphics/himachal-pradesh/shimla/pexels-sakshi-patwa-3335937-5238339.jpg", alt: "Shimla, The Ridge" },
      },
      {
        slug: "manali",
        name: "Manali",
        meta: "2,050m",
        hook: "Beas valley base camp for Rohtang, Solang, and the road north.",
        image: { src: "/graphics/himachal-pradesh/manali/pexels-sreenadh-tc-977029-17264608.jpg", alt: "Manali, Himachal Pradesh" },
      },
      {
        slug: "spiti",
        name: "Spiti",
        meta: "~3,800m",
        hook: "Trans-Himalayan cold desert, monasteries older than most nations.",
        image: { src: "/graphics/himachal-pradesh/lahaul-and-spiti/pexels-sakshi-patwa-3335937-5324307.jpg", alt: "Spiti Valley, Himachal Pradesh" },
      },
      {
        slug: "kinnaur",
        name: "Kinnaur",
        meta: "~2,290m",
        hook: "Sutlej valley apple country, on the old Hindustan-Tibet road.",
        image: { src: "/graphics/himachal-pradesh/kinnaur/pexels-himanshu817-16883586.jpg", alt: "Kinnaur, Himachal Pradesh" },
      },
      {
        slug: "kullu",
        name: "Kullu",
        meta: "1,220m",
        hook: "Valley of Gods — rafting, orchards, and the Dussehra crowds.",
        image: { src: "/graphics/himachal-pradesh/kullu/pexels-nishantaneja-2385583.jpg", alt: "Kullu Valley, Himachal Pradesh" },
      },
    ],
    cta: { heading: "Which of these five is calling you?", label: "Plan Your Himachal Trip" },
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    seo: {
      title: "Ladakh Tours | The Himalayan Ramble",
      description:
        "Ladakh travel guide and customized trips from The Himalayan Ramble — a high-altitude desert on the Tibetan Plateau. Leh, Nubra, Pangong, Zanskar, and Kargil.",
    },
    hero: {
      image: { src: "/graphics/ladakh/pexels-arthousestudio-5014919.jpg", alt: "Ladakh mountain landscape" },
      lede: "A high-altitude desert on the Tibetan Plateau — monasteries, passes above 5,000m, and landscapes that don't look real until you're standing in them.",
    },
    trust: [
      { num: "5", label: "Places live: Leh, Nubra, Pangong, Zanskar, Kargil" },
      { num: "3,500m+", label: "Base altitude — acclimatization built into every itinerary" },
      { num: "May–Sep", label: "Main travel window; Chadar trek runs Jan–Feb" },
    ],
    placesHeading: "Five places, one very different world.",
    placesLede:
      "Ladakh rewards slowing down — the altitude asks for it anyway. Pick a place, or let us know what you're chasing: monasteries, the lake, or the road itself.",
    intro: {
      heading: "Altitude is the whole game here. We plan around it.",
      body: [
        "More Ladakh trips go wrong from altitude than from anything else — rushing from the airport straight to Khardung La is how a good trip turns into a bad one. Every itinerary we build starts with acclimatization days in Leh before climbing further, whether you're headed to Nubra, Pangong, or into Zanskar.",
        "We run the Zanskar River rafting circuit and the winter Chadar trek as part of our regular season, alongside the standard Leh–Nubra–Pangong loop.",
      ],
    },
    places: [
      {
        slug: "leh",
        name: "Leh",
        meta: "~3,500m",
        hook: "The old capital and the base every Ladakh route starts from.",
        image: { src: "/graphics/ladakh/pexels-julia-volk-5201127.jpg", alt: "Leh, Ladakh" },
      },
      {
        slug: "nubra-valley",
        name: "Nubra Valley",
        meta: "~3,050m",
        hook: "Sand dunes, double-humped camels, over the Khardung La.",
        image: { src: "/graphics/ladakh/pexels-rajeev-sammy-1056923-12064459.jpg", alt: "Nubra Valley, Ladakh" },
      },
      {
        slug: "pangong-lake",
        name: "Pangong Lake",
        meta: "~4,225m",
        hook: "A lake that changes colour through the day, half in Tibet.",
        image: { src: "/graphics/ladakh/pexels-nishantvy-5784210.jpg", alt: "Pangong Lake, Ladakh" },
      },
      {
        slug: "zanskar",
        name: "Zanskar",
        meta: "Remote",
        hook: "Class III–V rafting in summer, the frozen-river Chadar trek in winter.",
        image: { src: "/graphics/ladakh/pexels-vikashkr50-18646446.jpg", alt: "Zanskar, Ladakh" },
      },
      {
        slug: "kargil",
        name: "Kargil",
        meta: "On the highway",
        hook: "The Srinagar–Leh halfway point, and the gateway to Zanskar.",
        image: { src: "/graphics/ladakh/pexels-kolkatarphotographer-34484908.jpg", alt: "Kargil, Ladakh" },
      },
    ],
    cta: {
      heading: "Which of these five is calling you?",
      label: "Plan Your Ladakh Trip",
      destinationValue: "Ladakh",
    },
  },
  {
    slug: "jammu-and-kashmir",
    name: "Jammu & Kashmir",
    seo: {
      title: "Jammu & Kashmir Tours | The Himalayan Ramble",
      description:
        "Jammu & Kashmir travel guide and customized trips from The Himalayan Ramble — houseboats on Dal Lake, ski slopes at Gulmarg, and the pilgrim road to Vaishno Devi.",
    },
    hero: {
      image: { src: "/graphics/jammu-and-kashmir/pexels-imadclicks-6487376.jpg", alt: "Jammu and Kashmir mountain landscape" },
      lede: "Houseboats on Dal Lake, ski slopes at Gulmarg, and the pilgrim road to Vaishno Devi — the valley that gave the Himalaya its reputation for beauty.",
    },
    trust: [
      { num: "5", label: "Places live: Srinagar, Gulmarg, Pahalgam, Sonmarg, Jammu" },
      { num: "Year-Round", label: "Ski season in winter, gardens and meadows in summer" },
      { num: "25", label: "Years operating across Northern India" },
    ],
    placesHeading: "Five places, from the lake to the passes.",
    placesLede:
      "Kashmir earns its reputation honestly — and Jammu carries a different, older kind of pilgrimage tradition. Pick a place, or tell us the shape of the trip you're after.",
    intro: {
      heading: "Seasons matter more here than almost anywhere else we operate.",
      body: [
        "Kashmir isn't one trip — it's several, depending entirely on when you go. Spring is tulips and gardens, winter is skiing at Gulmarg, and the Amarnath Yatra season shapes travel through Pahalgam every summer. We route around whichever version of the valley you're actually after.",
        "Jammu runs on its own separate rhythm as a year-round pilgrimage base, particularly for Vaishno Devi — we treat it as its own leg rather than an afterthought.",
      ],
    },
    places: [
      {
        slug: "srinagar",
        name: "Srinagar",
        meta: "Summer capital",
        hook: "Dal Lake houseboats and Mughal gardens — the valley's heart.",
        image: { src: "/graphics/jammu-and-kashmir/pexels-amjed-wani-1355393378-25786551.jpg", alt: "Srinagar, Dal Lake" },
      },
      {
        slug: "gulmarg",
        name: "Gulmarg",
        meta: "~2,650m",
        hook: "Skiing, and one of the world's highest cable cars.",
        image: { src: "/graphics/jammu-and-kashmir/pexels-imadclicks-15363695.jpg", alt: "Gulmarg" },
      },
      {
        slug: "pahalgam",
        name: "Pahalgam",
        meta: "Valley of Shepherds",
        hook: "Riverside meadows, and base for the Amarnath Yatra.",
        image: { src: "/graphics/jammu-and-kashmir/pexels-imadclicks-27496413.jpg", alt: "Pahalgam" },
      },
      {
        slug: "sonmarg",
        name: "Sonmarg",
        meta: "~2,800m",
        hook: "Meadow of Gold, and the gateway to Ladakh via Zoji La.",
        image: { src: "/graphics/jammu-and-kashmir/pexels-imadclicks-30189869.jpg", alt: "Sonmarg" },
      },
      {
        slug: "jammu",
        name: "Jammu",
        meta: "Winter capital",
        hook: "City of Temples, and gateway to Vaishno Devi.",
        image: { src: "/graphics/jammu-and-kashmir/pexels-tauseefkhaliq-12750077.jpg", alt: "Jammu" },
      },
    ],
    cta: {
      heading: "Which of these five is calling you?",
      label: "Plan Your Kashmir Trip",
      destinationValue: "Jammu & Kashmir",
    },
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    seo: {
      title: "Uttarakhand Tours | The Himalayan Ramble",
      description:
        "Uttarakhand travel guide and customized trips from The Himalayan Ramble — lake-side hill stations, the Ganges at Rishikesh, and skiing under Nanda Devi.",
    },
    hero: {
      image: { src: "/graphics/uttarakhand/pexels-animesh-srivastava-3019173-8055260.jpg", alt: "Uttarakhand mountain landscape" },
      lede: "Lake-side hill stations, the Ganges at Rishikesh, and skiing under Nanda Devi — the Himalaya's other classic hill-station belt.",
    },
    trust: [
      { num: "5", label: "Places live: Nainital, Mussoorie, Rishikesh, Dehradun, Auli" },
      { num: "Year-Round", label: "Lakes and hills in summer, skiing at Auli in winter" },
      { num: "25", label: "Years operating across Northern India" },
    ],
    placesHeading: "Five places, from the Ganges to the ski slopes.",
    placesLede:
      "Uttarakhand runs from riverside yoga towns to colonial hill stations to genuine high-altitude skiing. Pick a place, or tell us what kind of trip you're after.",
    intro: {
      heading: "This region rewards knowing which town does what.",
      body: [
        "Uttarakhand covers a lot of ground — a yoga and rafting town, two classic colonial hill stations, a state capital, and a genuine ski resort, all within a few hours of each other. We route trips around what you actually want rather than trying to force all five into one itinerary.",
        "We also run the wider Char Dham circuit for travelers who want it — Rishikesh is the natural starting point.",
      ],
    },
    places: [
      {
        slug: "rishikesh",
        name: "Rishikesh",
        meta: "Yoga capital",
        hook: "On the Ganges — yoga, rafting, and the Char Dham starting point.",
        image: { src: "/graphics/uttarakhand/pexels-lexi-lauwers-1431940-2921076.jpg", alt: "Rishikesh, on the Ganges" },
      },
      {
        slug: "nainital",
        name: "Nainital",
        meta: "Lake town",
        hook: "Boating on Naini Lake, and a proper hill-station Mall Road.",
        image: { src: "/graphics/uttarakhand/pexels-alok-kumar-273007-15031440.jpg", alt: "Nainital" },
      },
      {
        slug: "mussoorie",
        name: "Mussoorie",
        meta: "~2,000m",
        hook: 'The "Queen of the Hills" — waterfalls and a two-cable-car town.',
        image: { src: "/graphics/uttarakhand/pexels-abhra-ghosh-362148807-16152405.jpg", alt: "Mussoorie" },
      },
      {
        slug: "dehradun",
        name: "Dehradun",
        meta: "State capital",
        hook: "The valley gateway to most of Uttarakhand's hill stations.",
        image: { src: "/graphics/uttarakhand/pexels-sarimashrafi-35425311.jpg", alt: "Forest Research Institute, Dehradun" },
      },
      {
        slug: "auli",
        name: "Auli",
        meta: "~2,800m",
        hook: "Skiing under Nanda Devi, and one of Asia's longest cable cars.",
        image: { src: "/graphics/uttarakhand/pexels-ravikant-34792711.jpg", alt: "Auli" },
      },
    ],
    cta: {
      heading: "Which of these five is calling you?",
      label: "Plan Your Uttarakhand Trip",
      destinationValue: "Uttarakhand",
    },
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    seo: {
      title: "Sikkim Tours | The Himalayan Ramble",
      description:
        "Sikkim travel guide and customized trips from The Himalayan Ramble — Kangchenjunga on the skyline, monasteries older than most nations, and a border pass that once carried the Silk Route.",
    },
    hero: {
      image: { src: "/graphics/sikkim/boudhayan-bardhan-wulpLo7McHU-unsplash.jpg", alt: "Sikkim mountain landscape" },
      lede: "Kangchenjunga on the skyline, monasteries older than most nations, and a border pass that once carried the Silk Route.",
    },
    trust: [
      { num: "5", label: "Places live: Gangtok, Pelling, Lachung, Yumthang, Nathula" },
      { num: "8,586m", label: "Kangchenjunga, visible from much of West Sikkim" },
      { num: "25", label: "Years operating across Northern India" },
    ],
    placesHeading: "Five places, from the capital to the border.",
    placesLede:
      "Sikkim is compact but layered — a capital, a monastery town with the best Kangchenjunga views, a valley of rhododendrons, and a genuine border crossing. Pick a place, or let us know the shape of the trip.",
    intro: {
      heading: "Permits are the part most operators get wrong.",
      body: [
        "Nearly everywhere worth seeing in North Sikkim — Yumthang, Lachung, Nathula — requires a permit, and the border areas can close without much notice for weather or security reasons. We build itineraries with the paperwork and the contingency already sorted, rather than leaving it to chance on the day.",
        "Gangtok and Pelling need no special permits and make a straightforward, no-fuss base for the rest of the trip.",
      ],
    },
    places: [
      {
        slug: "gangtok",
        name: "Gangtok",
        meta: "~1,650m",
        hook: "The capital — MG Marg, Rumtek Monastery, and Tsomgo Lake day trips.",
        image: { src: "/graphics/sikkim/akash-pratap-singh-pO9ygTkhS5o-unsplash.jpg", alt: "Gangtok" },
      },
      {
        slug: "pelling",
        name: "Pelling",
        meta: "West Sikkim",
        hook: "The best straight-on views of Kangchenjunga.",
        image: { src: "/graphics/sikkim/debarghya-meikap-VRP78-gxtGU-unsplash.jpg", alt: "Pelling" },
      },
      {
        slug: "lachung",
        name: "Lachung",
        meta: "~2,750m",
        hook: "The base village for Yumthang and Zero Point.",
        image: { src: "/graphics/sikkim/jyoti-singh-WUI1aUmUzvQ-unsplash.jpg", alt: "Lachung" },
      },
      {
        slug: "yumthang-valley",
        name: "Yumthang Valley",
        meta: "~3,564m",
        hook: "Sikkim's Valley of Flowers, and hot springs.",
        image: { src: "/graphics/sikkim/pexels-ankan-sarkar-724231363-18341599.jpg", alt: "Yumthang Valley" },
      },
      {
        slug: "nathula",
        name: "Nathula",
        meta: "~4,310m",
        hook: "The old Silk Route pass, on the India–China border.",
        image: { src: "/graphics/sikkim/noel-lepcha-C85IMwc2IC0-unsplash.jpg", alt: "Nathula Pass" },
      },
    ],
    cta: {
      heading: "Which of these five is calling you?",
      label: "Plan Your Sikkim Trip",
      destinationValue: "Sikkim",
    },
  },
  {
    slug: "delhi",
    name: "Delhi",
    seo: {
      title: "Delhi Stopover Guide | The Himalayan Ramble",
      description:
        "Delhi stopover guide from The Himalayan Ramble — the gateway most Himalaya-bound trips pass through. Connaught Place, Chandni Chowk, India Gate, Qutub Minar, and Humayun's Tomb.",
    },
    hero: {
      image: { src: "/graphics/delhi/pexels-lens-report-285178556-31161144.jpg", alt: "Delhi cityscape" },
      lede: "The gateway most Himalaya-bound trips pass through — a Mughal city, a colonial capital, and a UNESCO shortlist in one metro area.",
    },
    trust: [
      { num: "5", label: "Stops live: CP, Chandni Chowk, India Gate, Qutub Minar, Humayun's Tomb" },
      { num: "2", label: "UNESCO World Heritage Sites in the city itself" },
      { num: "25", label: "Years operating across Northern India" },
    ],
    placesHeading: "Five stops, if you have a day before the mountains.",
    placesLede:
      "Most of our travelers land in Delhi before heading north — here's what's worth a day or two if you have the time before your Himalaya leg starts.",
    places: [
      {
        slug: "connaught-place",
        name: "Connaught Place",
        meta: "Central Delhi",
        hook: "Colonial-era circular plaza, shopping and dining hub.",
        image: { src: "/graphics/delhi/pexels-aditya-kumar-16613252-6393978.jpg", alt: "Connaught Place" },
      },
      {
        slug: "chandni-chowk",
        name: "Chandni Chowk",
        meta: "Old Delhi",
        hook: "Shah Jahan's historic market street, and Jama Masjid.",
        image: { src: "/graphics/delhi/pexels-asifmethar-789750.jpg", alt: "Chandni Chowk" },
      },
      {
        slug: "india-gate",
        name: "India Gate",
        meta: "War memorial",
        hook: "A 42m memorial, and the city's best evening lawns.",
        image: { src: "/graphics/delhi/pexels-insideoutdog-9370987.jpg", alt: "India Gate" },
      },
      {
        slug: "qutub-minar",
        name: "Qutub Minar",
        meta: "UNESCO site",
        hook: "A 73m minaret begun in 1193, and the rust-resistant Iron Pillar.",
        image: { src: "/graphics/delhi/pexels-jetkerim-13943611.jpg", alt: "Qutub Minar" },
      },
      {
        slug: "humayuns-tomb",
        name: "Humayun's Tomb",
        meta: "UNESCO site",
        hook: "Mughal gardens and the tomb that inspired the Taj Mahal.",
        image: { src: "/graphics/delhi/pexels-keith-cyrus-371873388-14496993.jpg", alt: "Humayun's Tomb" },
      },
    ],
    cta: {
      heading: "Landing in Delhi before heading north?",
      label: "Plan Your Delhi Stop",
      destinationValue: "Delhi",
    },
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    seo: {
      title: "Chandigarh Stopover Guide | The Himalayan Ramble",
      description:
        "Chandigarh stopover guide from The Himalayan Ramble — India's first planned city, designed with Le Corbusier, and the last stop before Himachal for most Shimla-bound routes.",
    },
    hero: {
      image: { src: "/graphics/chandigarh/pexels-gauravdeep-singh-911288050-21638052.jpg", alt: "Chandigarh cityscape" },
      lede: "India's first planned city, designed with Le Corbusier — and the last stop before Himachal for most Shimla-bound routes.",
    },
    trust: [
      { num: "5", label: "Stops live: Sector 17, Rock Garden, Sukhna Lake, Rose Garden, Capitol Complex" },
      { num: "1", label: "UNESCO World Heritage Site (Capitol Complex)" },
      { num: "25", label: "Years operating across Northern India" },
    ],
    placesHeading: "Five stops on the way to the hills.",
    placesLede:
      "Chandigarh is the practical gateway city for most Shimla and Kullu-Manali routes out of Delhi — here's what's worth a stop if you have a few hours before continuing north.",
    places: [
      {
        slug: "rock-garden",
        name: "Rock Garden",
        meta: "Sculpture park",
        hook: "Nek Chand's sculpture garden, built from industrial waste.",
        image: { src: "/graphics/chandigarh/pexels-cphuyal-33251763.jpg", alt: "Rock Garden, Chandigarh" },
      },
      {
        slug: "sector-17",
        name: "Sector 17",
        meta: "City centre",
        hook: "The city's central pedestrian shopping plaza.",
        image: { src: "/graphics/chandigarh/pexels-ananya-mandial-931631-20488886.jpg", alt: "Sector 17, Chandigarh" },
      },
      {
        slug: "sukhna-lake",
        name: "Sukhna Lake",
        meta: "Man-made lake",
        hook: "A 1958 lake, boating, and the city's morning-walk promenade.",
        image: { src: "/graphics/chandigarh/pexels-mhtoori-1686440.jpg", alt: "Sukhna Lake, Chandigarh" },
      },
      {
        slug: "rose-garden",
        name: "Rose Garden",
        meta: "1,600+ varieties",
        hook: "One of Asia's largest rose gardens.",
        image: { src: "/graphics/chandigarh/pexels-mt-akhtar-537668590-32562287.jpg", alt: "Rose Garden, Chandigarh" },
      },
      {
        slug: "capitol-complex",
        name: "Capitol Complex",
        meta: "UNESCO site",
        hook: "Le Corbusier's government complex, and the Open Hand Monument.",
        image: { src: "/graphics/chandigarh/pexels-nikhil-manan-1536524-28905565.jpg", alt: "Capitol Complex, Chandigarh" },
      },
    ],
    cta: {
      heading: "Passing through on the way to the hills?",
      label: "Plan Your Chandigarh Stop",
      destinationValue: "Chandigarh",
    },
  },
];
