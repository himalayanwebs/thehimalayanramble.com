import type { PlaceData } from "@/data/schema";

export const ladakhPlaces: PlaceData[] = [
  {
    slug: "leh",
    region: "ladakh",
    name: "Leh",
    destinationValue: "Ladakh",
    seo: {
      title: "Leh Tours | The Himalayan Ramble",
      description:
        "Leh travel guide and customized trips from The Himalayan Ramble — the old capital of Ladakh, and the base every route into the region starts from.",
    },
    hero: {
      image: { src: "/graphics/ladakh/pexels-aadil-mehraj-440728798-18488206.jpg", alt: "Leh, Ladakh" },
      lede: "~3,500m · the old capital of Ladakh, and the base every route into the region starts from.",
      ctaLabel: "Plan Your Leh Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Everything acclimatizes here first.",
        media: { src: "/graphics/ladakh/pexels-shalenderkumar-6650411.jpg", alt: "Leh old town" },
        body: [
          "Leh sits at roughly 3,500m, which means it's not just a town to see — it's the altitude buffer every Ladakh trip needs before going higher. Most itineraries spend the first day or two here on purpose: short walks, the old bazaar, nothing strenuous, while your body catches up to the elevation.",
          "The old town itself rewards that slow pace — narrow lanes below Leh Palace, prayer flags strung between rooftops, and a market that still runs on Ladakhi time rather than tourist time.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A palace modelled on the Potala, and a stupa built for peace.",
        media: { src: "/graphics/ladakh/pexels-shalenderkumar-6650457.jpg", alt: "Leh Palace and Shanti Stupa" },
        items: [
          { title: "Leh Palace", body: "A 17th-century royal palace overlooking the town, built in a style that echoes Lhasa's Potala Palace." },
          { title: "Shanti Stupa", body: "A white-domed stupa built in 1991, reached by a long staircase — the valley's best sunset viewpoint." },
          { title: "Namgyal Tsemo & Sankar Gompa", body: "Two of Leh's working monasteries, both an easy walk from the old town." },
          { title: "Leh Main Bazaar", body: "The town's central market — Ladakhi handicrafts, pashmina, and apricots from the surrounding valleys." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "May–September for road access and full-region travel. Leh itself is reachable by air year-round." },
      { title: "Getting Here", body: "Direct flights from Delhi land right in Leh. By road, the Manali–Leh and Srinagar–Leh highways are seasonal, open roughly May to October." },
      { title: "Activities", body: "Monastery visits, the old bazaar, day trips toward Khardung La, and acclimatization walks before heading further into the region." },
      { title: "Good To Know", body: "If you fly in, we build at least one full rest day into the itinerary before any activity above Leh's own altitude — non-negotiable, not optional." },
    ],
    cta: { heading: "Ready to build a Leh itinerary?" },
  },
  {
    slug: "nubra-valley",
    region: "ladakh",
    name: "Nubra Valley",
    destinationValue: "Ladakh",
    seo: {
      title: "Nubra Valley Tours | The Himalayan Ramble",
      description:
        "Nubra Valley travel guide and customized trips from The Himalayan Ramble — sand dunes, double-humped camels, and the confluence of two rivers over the Khardung La.",
    },
    hero: {
      image: { src: "/graphics/ladakh/pexels-rajeev-sammy-1056923-12064459.jpg", alt: "Nubra Valley, Ladakh" },
      lede: "~3,050m · over the Khardung La from Leh — sand dunes, double-humped camels, and the confluence of two rivers.",
      ctaLabel: "Plan Your Nubra Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A desert, at 3,000 metres.",
        media: { src: "/graphics/ladakh/pexels-arthousestudio-5015042.jpg", alt: "Nubra Valley sand dunes" },
        body: [
          "Nubra sits north of Leh, over the Khardung La, at the confluence of the Shyok and Nubra rivers — and it looks like nowhere else in Ladakh. Wide sand dunes near Hunder are a leftover of the old Silk Route caravan trade, right down to the double-humped Bactrian camels still kept there.",
          "It's a full day's drive each way from Leh, so most itineraries build in an overnight stay — which also means a second night at slightly lower altitude, useful for acclimatization on the way to Pangong.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A giant Buddha watching over the valley.",
        media: { src: "/graphics/ladakh/pexels-arthousestudio-5015233.jpg", alt: "Diskit Monastery, Nubra Valley" },
        items: [
          { title: "Diskit Monastery", body: "Nubra's oldest and largest monastery, with a 32-metre Maitreya Buddha statue completed in 2010, visible from across the valley." },
          { title: "Hunder Sand Dunes", body: "Cold desert dunes where you can still ride the region's Bactrian camels." },
          { title: "Panamik Hot Springs", body: "Natural hot springs further up the valley, a quieter add-on for longer itineraries." },
          { title: "Khardung La", body: "The high pass crossed to reach Nubra from Leh — among the highest motorable roads in the world." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "May–September, when Khardung La and the Nubra road are open." },
      { title: "Getting Here", body: "A full day's drive from Leh over Khardung La — usually paired with an overnight in Nubra before continuing or returning." },
      { title: "Activities", body: "Camel rides at Hunder, monastery visits, village stays, and hot spring stops at Panamik." },
      { title: "Good To Know", body: "An Inner Line Permit is required for Nubra — we handle this as part of the itinerary before you travel." },
    ],
    cta: { heading: "Ready to build a Nubra itinerary?" },
  },
  {
    slug: "pangong-lake",
    region: "ladakh",
    name: "Pangong Lake",
    destinationValue: "Ladakh",
    seo: {
      title: "Pangong Lake Tours | The Himalayan Ramble",
      description:
        "Pangong Lake travel guide and customized trips from The Himalayan Ramble — an endorheic lake stretching roughly 134km, two-thirds of it across the border in Tibet.",
    },
    hero: {
      image: { src: "/graphics/ladakh/pexels-nishantvy-5784210.jpg", alt: "Pangong Lake, Ladakh" },
      lede: "~4,225m · an endorheic lake stretching roughly 134km, two-thirds of it across the border in Tibet.",
      ctaLabel: "Plan Your Pangong Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A lake that changes colour as the light moves.",
        media: { src: "/graphics/ladakh/pexels-janamparikh-17033855.jpg", alt: "Pangong Lake shoreline" },
        body: [
          "Pangong sits at roughly 4,225m, reached over the Chang La pass, and it's less a single stop than a slow reveal — the water shifts through blues and greens as the sun moves across it. It gained a wave of fame after appearing in a Bollywood film, but the appeal predates that: this is one of the highest saltwater lakes in the world, and it freezes solid in winter.",
          "Because of the altitude and the drive in, we treat Pangong as a one- or two-night stop rather than a rushed day trip — camping by the shore is part of the experience, not just the view.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "Over the Chang La, one of the world's highest motorable passes.",
        media: { src: "/graphics/ladakh/pexels-rubaitulazad-34998312.jpg", alt: "Chang La pass, en route to Pangong" },
        items: [
          { title: "Chang La", body: "The high pass on the route in from Leh, often snow-lined even in summer." },
          { title: "Spangmik & Man villages", body: "Lakeside villages where most camps and guesthouses are based." },
          { title: "Birdwatching", body: "Migratory birds pass through in season, including bar-headed geese and brown-headed gulls." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "May–September. The lake freezes over completely in winter." },
      { title: "Getting Here", body: "Roughly 5–6 hours from Leh via Chang La. Most itineraries combine Pangong with Nubra as a loop rather than backtracking through Leh." },
      { title: "Activities", body: "Lakeside camping, photography, short walks along the shore, birdwatching in season." },
      { title: "Good To Know", body: "An Inner Line Permit is required, and it's a border-sensitive area — we handle the permit and route planning as part of the trip." },
    ],
    cta: { heading: "Ready to build a Pangong itinerary?" },
  },
  {
    slug: "zanskar",
    region: "ladakh",
    name: "Zanskar",
    destinationValue: "Zanskar",
    seo: {
      title: "Zanskar Tours | The Himalayan Ramble",
      description:
        "Zanskar travel guide and customized trips from The Himalayan Ramble — remote and historically isolated, with Class III–V rafting in summer and the frozen-river Chadar trek every winter.",
    },
    hero: {
      image: { src: "/graphics/ladakh/pexels-rakesh-kumar-307953123-13680878.jpg", alt: "Zanskar, Ladakh" },
      lede: "Remote and historically isolated — Class III–V rafting in summer, and the frozen-river Chadar trek every winter.",
      ctaLabel: "Plan Your Zanskar Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Two Zanskars: the summer river, the winter ice.",
        media: { src: "/graphics/ladakh/pexels-kolkatarphotographer-34484908.jpg", alt: "Zanskar valley" },
        body: [
          "Zanskar sits south of the main Ladakh range, cut off from the rest of the region for much of the year — which is exactly what's kept it so distinct. In summer, the Zanskar River offers some of the most serious whitewater rafting in India, Class III to V depending on the stretch. In winter, when the river freezes solid, it becomes the route for the Chadar trek — walking on the ice itself, past villages that have no other way out until spring.",
          "Padum is the region's main town and usual base, with Karsha and Phuktal monasteries among the more remarkable stops nearby.",
        ],
      },
      {
        kind: "prose",
        dark: true,
        heading: "The Zanskar Range Expedition.",
        media: { src: "/graphics/ladakh/pexels-shalenderkumar-6619115.jpg", alt: "Zanskar River rafting" },
        body: [
          "Advanced trekking and Class III–V rafting on the Zanskar River, run every July through September. This is a serious-adventure trip, not a scenic add-on — licensed river guides, proper safety equipment, and routes matched to the group's actual rafting experience.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "June–September for rafting and trekking. January–February for the Chadar trek, an expert-level winter route." },
      { title: "Getting Here", body: "Via Kargil in summer, or the seasonal Kargil–Padum road. Winter access for Chadar is on foot, from the road head near Chilling." },
      { title: "Activities", body: "Whitewater rafting, high-altitude trekking, monastery visits, and the Chadar frozen-river trek in season." },
      { title: "Good To Know", body: "The Chadar trek is genuinely demanding — we assess fitness and cold-weather experience honestly before confirming a booking." },
    ],
    cta: { heading: "Ready to build a Zanskar itinerary?" },
  },
  {
    slug: "kargil",
    region: "ladakh",
    name: "Kargil",
    destinationValue: "Ladakh",
    seo: {
      title: "Kargil Tours | The Himalayan Ramble",
      description:
        "Kargil travel guide and customized trips from The Himalayan Ramble — on the Srinagar–Leh highway, roughly the halfway point, and the gateway to Zanskar.",
    },
    hero: {
      image: { src: "/graphics/ladakh/pexels-julia-volk-5201127.jpg", alt: "Kargil, Ladakh" },
      lede: "On the Srinagar–Leh highway, roughly the halfway point — and the gateway to Zanskar.",
      ctaLabel: "Plan Your Kargil Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A crossroads town, and a different Ladakh.",
        media: { src: "/graphics/ladakh/pexels-arthousestudio-5014919.jpg", alt: "Kargil town" },
        body: [
          "Kargil is Ladakh's second-largest town, and it feels distinct from Leh — a Shia Muslim majority rather than the Buddhist culture more visible further east, and a working town rather than a tourist base. Most travelers pass through as the natural overnight stop on the Srinagar–Leh highway, or as the turn-off point for the road into Zanskar.",
          "Nearby Drass, sometimes called the second-coldest inhabited place in the world, holds the Kargil War Memorial, commemorating the 1999 conflict fought in these mountains.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A war memorial, and a quiet valley behind it.",
        media: { src: "/graphics/ladakh/pexels-vikashkr50-17926930.jpg", alt: "Suru Valley, near Kargil" },
        items: [
          { title: "Kargil War Memorial, Drass", body: "A memorial to the soldiers of the 1999 Kargil War, set against the peaks where it was fought." },
          { title: "Suru Valley", body: "A quieter valley south of Kargil, with views toward the Nun and Kun peaks." },
          { title: "Kargil–Padum Road", body: "The overland route into Zanskar, usually broken up with a night in Kargil." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "May–October, matching the open season of the Srinagar–Leh and Kargil–Zanskar roads." },
      { title: "Getting Here", body: "Roughly midway on the Srinagar–Leh highway — about equal driving distance from either city." },
      { title: "Activities", body: "War memorial visit, Suru Valley excursions, and staging for the road into Zanskar." },
      { title: "Good To Know", body: "We usually build Kargil in as an overnight stop rather than a standalone destination — on the way to Leh, Zanskar, or back toward Srinagar." },
    ],
    cta: { heading: "Ready to build a Kargil itinerary?" },
  },
];
