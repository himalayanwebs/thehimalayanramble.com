import type { PlaceData } from "@/data/schema";

export const himachalPradeshPlaces: PlaceData[] = [
  {
    slug: "shimla",
    region: "himachal-pradesh",
    name: "Shimla",
    destinationValue: "Shimla",
    seo: {
      title: "Shimla Tours | The Himalayan Ramble",
      description:
        "Shimla travel guide and customized trips from The Himalayan Ramble — the former summer capital of British India, and the town our office has called home since 2000.",
    },
    hero: {
      image: {
        src: "/graphics/himachal-pradesh/shimla/pexels-chalta-phirta-307182428-19017824.jpg",
        alt: "Shimla, The Ridge and Christ Church",
      },
      lede: "7,238 ft · built across seven pine-and-deodar hills · the former summer capital of British India, and the town our office has called home since 2000.",
      ctaLabel: "Plan Your Shimla Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "A hill station built to be walked.",
        media: { src: "/graphics/himachal-pradesh/shimla/pexels-amanjakhar-1295878.jpg", alt: "The Mall Road, Shimla" },
        body: [
          "Shimla was the summer capital of British India before Independence, and it still carries that layout — a compact 25 sq. km spread across seven hills, with the highest point, Jakhu Hill, reaching 2,454 metres. Pine, deodar, and oak forest wrap the whole town, and the centre — The Mall and The Ridge — is pedestrian, so most of Shimla is genuinely walkable.",
          "It's also where The Himalayan Ramble has operated from since day one, which means it's usually the first and last stop on a Himachal itinerary we build, not just a place we send people to.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "Colonial architecture, older temples.",
        media: { src: "/graphics/himachal-pradesh/shimla/pexels-rajesh-s-balouria-1289088-32596529.jpg", alt: "Jakhoo Temple hillside, Shimla" },
        items: [
          { title: "Jakhoo Temple", body: "A 108-foot Hanuman statue at roughly 8,500 ft — the highest point most visitors reach in town, with views across the whole valley." },
          { title: "The Ridge & Christ Church", body: "Shimla's open-air living room — cultural events, winter carnival, and the town's best-known church backdrop." },
          { title: "Gaiety Theatre", body: "A Victorian-era theatre still hosting performances, right on The Mall." },
          { title: "Viceregal Lodge", body: "Built 1884–88 as the Viceroy's summer residence, now the Indian Institute of Advanced Study." },
          { title: "Kali Bari, Sankat Mochan & Tara Devi Temples", body: "A trio of hillside temples that see as many locals as visitors." },
          { title: "HP State Museum & Annadale", body: "Museum since 1974, and a former racecourse now home to an Army Heritage Museum." },
        ],
      },
      {
        kind: "list",
        dark: true,
        heading: "Waterfalls, forest, and the nearest skiing.",
        media: { src: "/graphics/himachal-pradesh/shimla/pexels-shreyas-kc46-944363.jpg", alt: "Kufri, near Shimla" },
        items: [
          { title: "Kufri", body: "Skiing and a winter sports festival every February, plus the Himalayan Nature Park." },
          { title: "Chadwick Falls & Summer Hill", body: "A short walk from the centre into quiet pine forest." },
          { title: "Tattapani", body: "51 km out — river rafting and trout fishing on the Sutlej." },
          { title: "Naldehra", body: "A 9-hole golf course laid out by Lord Curzon, still one of the prettiest in India." },
          { title: "Chharabra & Mashobra", body: "Quieter forest towns just outside Shimla, popular for a slower day trip." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "March–June for pleasant walking weather; December–February if you want snow and skiing at Kufri or Narkanda." },
      { title: "Getting Here", body: "Nearest airport Shimla (Jubbarhatti), ~23 km. The Kalka–Shimla toy train (UNESCO World Heritage) is the scenic route in. By road, ~350 km / 7–8 hrs from Delhi." },
      { title: "Activities", body: "Trekking, skiing (Jan–mid March), golf at Naldehra, river rafting & trout fishing at Tattapani, shopping and cultural performances on The Ridge." },
      { title: "Good To Know", body: "The Mall and The Ridge are vehicle-free — plan for walking, and pack layers even in summer once the sun drops." },
    ],
    cta: { heading: "Ready to build a Shimla itinerary?" },
  },
  {
    slug: "manali",
    region: "himachal-pradesh",
    name: "Manali",
    destinationValue: "Manali",
    seo: {
      title: "Manali Tours | The Himalayan Ramble",
      description:
        "Manali travel guide and customized trips from The Himalayan Ramble — Beas valley base camp for Rohtang Pass, Solang Valley, and the road north to Ladakh.",
    },
    hero: {
      image: { src: "/graphics/himachal-pradesh/manali/pexels-julia-volk-5205097.jpg", alt: "Manali, Beas valley" },
      lede: "2,050m · Beas river valley, Kullu district · the last proper town before the road climbs toward Lahaul, Spiti, and Ladakh.",
      ctaLabel: "Plan Your Manali Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Two towns, really — Mall Road and Old Manali.",
        media: { src: "/graphics/himachal-pradesh/manali/pexels-soubhagya23-18359798.jpg", alt: "Old Manali lanes" },
        body: [
          "Manali sits at around 2,050m on the Beas, and functions as two different places under one name. The Mall Road side is where most day-tour traffic lands — shops, hotels, restaurants. Old Manali, across the river, is quieter cafe lanes and guesthouses under cedar trees, popular with longer-staying travelers.",
          "Either way, Manali is the practical staging point for the high country beyond it — Rohtang, Solang, and since 2020, the Atal Tunnel route into Lahaul, which now stays open through most of the winter.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A 500-year-old temple, and the road that changed the valley.",
        media: { src: "/graphics/himachal-pradesh/manali/pexels-mohit-khare-3592184-28488400.jpg", alt: "Hadimba Devi Temple, Manali" },
        items: [
          { title: "Hadimba Devi Temple", body: "A wood-and-stone pagoda temple built in 1553, set inside a cedar forest just outside Old Manali." },
          { title: "Rohtang Pass", body: "3,978m, the historic gateway to Lahaul — permit-controlled and seasonal, usually open late May to November." },
          { title: "Atal Tunnel", body: "Opened 2020, the world's longest highway tunnel above 3,000m — it now keeps Lahaul accessible for most of the year." },
          { title: "Vashisht", body: "A village just above Manali known for its natural hot spring baths." },
          { title: "Solang Valley", body: "Manali's adventure-sports hub — see below." },
        ],
      },
      {
        kind: "prose",
        dark: true,
        heading: "Solang Valley does the heavy lifting.",
        media: { src: "/graphics/himachal-pradesh/manali/pexels-chirag-biyani-2660484-8568168.jpg", alt: "Solang Valley, near Manali" },
        body: [
          "Most of Manali's adventure activity concentrates in Solang, 13km out: paragliding over the valley, zorbing, and in winter, Himachal's most accessible skiing. Beyond Solang, the Beas offers river rafting closer to town, and the Hampta Pass and Beas Kund routes are the classic short treks based out of Manali.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "March–June and September–December for the valley; December–February for snow at Solang. Rohtang Pass itself is only open roughly late May to November." },
      { title: "Getting Here", body: "Nearest airport Bhuntar (Kullu–Manali), ~50 km. By road, ~270 km / 8–9 hrs from Shimla, or ~570 km from Delhi." },
      { title: "Activities", body: "Paragliding and zorbing at Solang, river rafting on the Beas, trekking to Hampta Pass or Beas Kund, skiing in winter, mountain biking." },
      { title: "Good To Know", body: "Rohtang Pass access is permit-controlled with a daily vehicle cap — we handle the permit as part of any itinerary that includes it." },
    ],
    cta: { heading: "Ready to build a Manali itinerary?" },
  },
  {
    slug: "spiti",
    region: "himachal-pradesh",
    name: "Spiti",
    destinationValue: "Spiti",
    seo: {
      title: "Spiti Valley Tours | The Himalayan Ramble",
      description:
        "Spiti Valley travel guide and customized trips from The Himalayan Ramble — a trans-Himalayan cold desert, home to our Frozen Spiti winter expedition.",
    },
    hero: {
      image: { src: "/graphics/himachal-pradesh/lahaul-and-spiti/pexels-vishv-shah-2160477459-36838135.jpg", alt: "Spiti Valley" },
      lede: "Averaging 3,800m · a trans-Himalayan cold desert in the rain shadow of the main range — home to our Frozen Spiti winter expedition.",
      ctaLabel: "Plan Your Spiti Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "The moon looks a lot like this, apparently.",
        media: { src: "/graphics/himachal-pradesh/lahaul-and-spiti/pexels-shubham-dhage-18137965-31875017.jpg", alt: "Spiti river valley, cold desert" },
        body: [
          "Spiti sits in the rain shadow of the Himalaya, so instead of the green valleys most of Himachal is known for, you get bare rock, wide river beds, and villages that look almost carved into the landscape. Kaza, the sub-divisional headquarters, sits at roughly 3,800m and functions as the valley's base for most routes.",
          "It's remote enough that the road in still closes seasonally, which is exactly why our Frozen Spiti Valley trip — ice climbing, snowbound monasteries, snowshoeing, 7 nights / 8 days, run November through February — draws people back every winter.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "Monasteries first, then a lake that turns silver.",
        media: { src: "/graphics/himachal-pradesh/lahaul-and-spiti/pexels-vikashkr50-17889288.jpg", alt: "Chandratal Lake, Spiti" },
        items: [
          { title: "Key Monastery", body: "Spiti's largest, perched on a hilltop above the river — the valley's most recognizable image." },
          { title: "Tabo Monastery", body: 'Over a thousand years old, sometimes called the "Ajanta of the Himalayas" for its wall paintings.' },
          { title: "Chandratal Lake", body: "A crescent-shaped alpine lake at roughly 4,300m, reachable only in summer." },
          { title: "Dhankar Monastery & Lake", body: "A cliffside former capital of Spiti, with a small lake in a short walk above it." },
          { title: "Kibber & Komic", body: "Among the highest motorable villages in the world, both an easy add-on from Kaza." },
          { title: "Langza", body: "A fossil village with a giant Buddha statue overlooking the valley — marine fossils are still found in the surrounding hills." },
        ],
      },
      {
        kind: "prose",
        dark: true,
        heading: "Frozen Spiti Valley — 7 nights, 8 days.",
        media: { src: "/graphics/himachal-pradesh/lahaul-and-spiti/pexels-ramjadav13-14574630.jpg", alt: "Frozen Spiti in winter" },
        body: [
          "Running November through February, this is Spiti at its starkest — frozen waterfalls for ice climbing, monasteries under snow, and valley floors quiet enough to hear your own footsteps in the snow. It's the trip we get asked about most, and one we've been refining every winter since we started running it.",
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "May–October for the full valley including Chandratal, when the Manali–Kunzum route is open. December–February for our Frozen Spiti winter expedition via the Kinnaur route." },
      { title: "Getting Here", body: "Via Shimla–Reckong Peo–Kaza (~412 km, stays open longer into winter) or via Manali–Kunzum Pass in summer only. We plan the route by season." },
      { title: "Activities", body: "Monastery visits, high-altitude trekking, stargazing (near-zero light pollution), fossil hunting at Langza, winter ice climbing and snowshoeing." },
      { title: "Good To Know", body: "Altitude sickness is a real consideration above 3,500m — we build acclimatization days into every Spiti itinerary rather than rushing straight to Kaza." },
    ],
    cta: { heading: "Ready to build a Spiti itinerary?" },
  },
  {
    slug: "kinnaur",
    region: "himachal-pradesh",
    name: "Kinnaur",
    destinationValue: "Kinnaur",
    seo: {
      title: "Kinnaur Tours | The Himalayan Ramble",
      description:
        "Kinnaur travel guide and customized trips from The Himalayan Ramble — the Sutlej valley on the old Hindustan–Tibet road, and the quiet route into Spiti.",
    },
    hero: {
      image: { src: "/graphics/himachal-pradesh/kinnaur/pexels-infinityadventure-4280389.jpg", alt: "Kinnaur, Sutlej valley" },
      lede: "~2,290m at Reckong Peo · the Sutlej valley, on the old Hindustan–Tibet road — and the quiet route into Spiti.",
      ctaLabel: "Plan Your Kinnaur Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Apple orchards climbing into bare rock.",
        media: { src: "/graphics/himachal-pradesh/kinnaur/pexels-raj-manohar-253004-15918166.jpg", alt: "Kalpa, orchards below Kinner Kailash" },
        body: [
          "Kinnaur runs along the Sutlej River on the old Hindustan–Tibet road, and shares the \"Land of Gods\" title with neighbouring Kullu. It's the transition zone between green Himachal and the cold desert beyond — apple orchards give way to increasingly bare rock as you climb toward the district's higher villages and, eventually, into Spiti.",
          "Culturally it's distinct too: Kinnauri traditions blend Hindu and Buddhist practice in a way that's rare elsewhere in Himachal, visible in the local temples and the pattu shawls the region is known for.",
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "The last village before the road stops.",
        media: { src: "/graphics/himachal-pradesh/kinnaur/pexels-jeevan-jervis-116501-27180236.jpg", alt: "Chitkul, last village on the road" },
        items: [
          { title: "Kalpa", body: "A village with the best straight-on views of Kinner Kailash (~6,050m), a peak sacred to both Hindu and Buddhist tradition." },
          { title: "Sangla Valley & Kamru Fort", body: "A wide, green valley with a centuries-old wooden fort at its entrance." },
          { title: "Chitkul", body: "The last inhabited village on this stretch of the Indo–Tibet road, at roughly 3,450m — end of the line, in the best way." },
          { title: "Nako", body: "A high-altitude village around a small lake, closer to the Spiti border than to green Kinnaur." },
          { title: "Reckong Peo", body: "The district headquarters, and the usual overnight stop before continuing toward Spiti." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "April–June and September–November. Higher villages like Chitkul and Nako can close off with snow December–March." },
      { title: "Getting Here", body: "~235 km / 8–9 hrs from Shimla along NH5. Kinnaur is also the usual overland route into Spiti." },
      { title: "Activities", body: "Village walks, orchard visits (best in apple season, Aug–Oct), short treks, and photography — Kinner Kailash views are the main draw." },
      { title: "Good To Know", body: "Some areas near the Tibet border require an Inner Line Permit — we handle this as part of the itinerary, no separate paperwork on your end." },
    ],
    cta: { heading: "Ready to build a Kinnaur itinerary?" },
  },
  {
    slug: "kullu",
    region: "himachal-pradesh",
    name: "Kullu",
    destinationValue: "Kullu",
    seo: {
      title: "Kullu Valley Tours | The Himalayan Ramble",
      description:
        "Kullu Valley travel guide and customized trips from The Himalayan Ramble — the Beas river valley south of Manali, known across India as the Valley of Gods.",
    },
    hero: {
      image: { src: "/graphics/himachal-pradesh/kullu/pexels-ashish-sharma-266379-994194.jpg", alt: "Kullu Valley, Beas river" },
      lede: "1,220m · the Beas river valley, south of Manali — known across India as the Valley of Gods.",
      ctaLabel: "Plan Your Kullu Trip",
    },
    blocks: [
      {
        kind: "prose",
        tight: true,
        heading: "Where the Beas gets rafted, and the Gods get carried.",
        media: { src: "/graphics/himachal-pradesh/kullu/pexels-harsh-patil-3421066-5110976.jpg", alt: "River rafting, Kullu Valley" },
        body: [
          "Kullu town sits at around 1,220m, lower and warmer than Manali just up the valley, and it's the district's practical hub — and India's whitewater rafting capital, with the Beas running Grade II–III rapids right through the valley floor.",
          'The "Valley of Gods" name isn\'t just marketing: it refers to the local tradition of village deities, carried in palanquins, who all converge on Kullu town every October for the week-long Kullu Dussehra — recognized by UNESCO as intangible cultural heritage.',
        ],
      },
      {
        kind: "list",
        reverse: true,
        heading: "A lightning-struck temple, and a hot spring shared by two faiths.",
        media: { src: "/graphics/himachal-pradesh/kullu/pexels-bikibez-2460463.jpg", alt: "Bijli Mahadev Temple, Kullu" },
        items: [
          { title: "Bijli Mahadev Temple", body: "A dramatic ridge-top temple with a legend of its central shivling being periodically struck by lightning." },
          { title: "Raghunath Temple", body: "Kullu's principal deity's home, and the ceremonial centre of the Dussehra festival." },
          { title: "Great Himalayan National Park", body: "A UNESCO World Heritage Site protecting some of the Western Himalaya's richest biodiversity." },
          { title: "Manikaran", body: "Hot springs shared by a Sikh gurdwara and a Hindu temple, a short drive up the Parvati Valley." },
          { title: "Kasol & Tosh", body: "The Parvati Valley's backpacker villages — cafes, guesthouses, and trailheads." },
        ],
      },
    ],
    infoGrid: [
      { title: "Best Time to Visit", body: "March–June and September–November for the valley. October for Kullu Dussehra, if you want the festival crowds and colour." },
      { title: "Getting Here", body: "Nearest airport Bhuntar (Kullu–Manali), right in the valley. ~250 km / 7–8 hrs from Shimla by road." },
      { title: "Activities", body: "River rafting on the Beas, trekking in the Parvati Valley and Great Himalayan National Park, apple orchard visits, paragliding near Bijli Mahadev." },
      { title: "Good To Know", body: "Kullu makes a natural add-on to a Manali itinerary rather than a standalone base — we usually route them together." },
    ],
    cta: { heading: "Ready to build a Kullu itinerary?" },
  },
];
