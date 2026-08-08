import type { FeatureBlockData } from "@/components/blocks/feature-block";
import type { MosaicTile } from "@/components/blocks/mosaic";
import type { SignatureRoute } from "@/components/home/route-list";
import type { TrustStat } from "@/components/blocks/trust-strip";

export const HOME_SEO = {
  title: "The Himalayan Ramble — Shimla-Based Himalayan Tours Since 2000",
  description:
    "The Himalayan Ramble is a Shimla-based, government-approved travel operator running customized Himalayan trips since 2000 — trekking, rafting, and winter expeditions planned by licensed local guides.",
};

export const HOME_HERO = {
  image: {
    src: "/graphics/himachal-pradesh/lahaul-and-spiti/pexels-vishv-shah-2160477459-36848939.jpg",
    alt: "Key Monastery, Spiti Valley, Himachal Pradesh",
  },
  eyebrow: "Shimla, Himachal Pradesh — Est. 2000",
  lede: "Twenty-five years of guiding travelers through Himachal, Ladakh, and the wider Himalaya: customized routes, licensed guides, and government-approved expertise from an operator based right here in the mountains.",
};

export const HOME_TRUST_STATS: TrustStat[] = [
  { num: "25", label: "Years guiding the Himalaya" },
  { num: "1000s", label: "Travelers guided since 2000" },
  { num: "5★ / 93", label: "Verified guest reviews" },
];

export const HOME_TRUST_BADGES = [
  { src: "/assets/hpt.webp", alt: "Approved by Himachal Pradesh Tourism", width: 120, height: 52 },
  { src: "/assets/mit.webp", alt: "Approved by Ministry of Tourism, Government of India", width: 140, height: 52 },
];

export const HOME_FOUNDER_BLOCK: FeatureBlockData = {
  kind: "prose",
  tight: true,
  eyebrow: "Since 2000",
  heading: "Built by someone who actually drove every one of these roads.",
  media: {
    src: "/graphics/himachal-pradesh/shimla/pexels-shalenderkumar-3574440.jpg",
    alt: "Shimla hillside, Himachal Pradesh",
    aspect: "4x3",
  },
  halftone: true,
  body: [
    "Sanjay Thakur started The Himalayan Ramble in Shimla in 2000, with one idea: travel through the Himalaya should be hassle-free, not a gamble on an operator who's never seen the pass you're asking about.",
    "Twenty-five years on, that's still the job: customized routes, licensed guides and porters who know the terrain and the culture, and a small Sanjauli office that has now guided thousands of travelers from India and abroad through Himachal, Ladakh, and Jammu & Kashmir. Approved by the Department of Tourism, Himachal Pradesh, and the Ministry of Tourism, Government of India.",
  ],
};

export const HOME_MOSAIC: MosaicTile[] = [
  {
    href: "/himachal-pradesh/",
    name: "Himachal Pradesh",
    hook: "Shimla, Manali, Spiti, Kinnaur, Kullu. Our home turf since day one.",
    large: true,
    aspect: "16x9",
    image: {
      src: "/graphics/himachal-pradesh/shimla/pexels-zeya-irish-170428250-16777016.jpg",
      alt: "Himachal Pradesh hillside",
    },
  },
  {
    href: "/ladakh/",
    name: "Ladakh",
    hook: "Leh, Nubra, Pangong, Zanskar, Kargil.",
    aspect: "16x9",
    image: { src: "/graphics/ladakh/pexels-arthousestudio-5015042.jpg", alt: "Ladakh landscape" },
  },
  {
    href: "/jammu-and-kashmir/",
    name: "Jammu & Kashmir",
    hook: "Srinagar, Gulmarg, Pahalgam, Sonmarg, Jammu.",
    aspect: "16x9",
    image: { src: "/graphics/jammu-and-kashmir/pexels-imadclicks-15124178.jpg", alt: "Jammu and Kashmir landscape" },
  },
  {
    href: "/uttarakhand/",
    name: "Uttarakhand",
    hook: "Nainital, Mussoorie, Rishikesh, Dehradun, Auli.",
    aspect: "16x9",
    image: { src: "/graphics/uttarakhand/pexels-julia-volk-5205768.jpg", alt: "Uttarakhand landscape" },
  },
  {
    href: "/sikkim/",
    name: "Sikkim",
    hook: "Gangtok, Pelling, Lachung, Yumthang, Nathula.",
    aspect: "16x9",
    image: { src: "/graphics/sikkim/gaurav-bagdi--umeutkfZew-unsplash.jpg", alt: "Sikkim landscape" },
  },
  {
    href: "/delhi/",
    name: "Delhi",
    hook: "The usual gateway stop before heading north.",
    aspect: "16x9",
    image: { src: "/graphics/delhi/pexels-ravi-roshan-2875998-16892562.jpg", alt: "Delhi cityscape" },
  },
  {
    href: "/chandigarh/",
    name: "Chandigarh",
    hook: "The last stop before Himachal, on most routes north.",
    aspect: "16x9",
    image: { src: "/graphics/chandigarh/pexels-gauravdeep-singh-911288050-21638052.jpg", alt: "Chandigarh cityscape" },
  },
];

export const HOME_SIGNATURE_ROUTES: SignatureRoute[] = [
  {
    title: "Frozen Spiti Valley",
    duration: "7 Nights / 8 Days · Nov–Feb",
    body: "Ice climbing, snowbound monasteries, and snowshoeing through a valley that closes off to most of the world every winter.",
    href: "/himachal-pradesh/spiti/",
    linkLabel: "See Spiti",
  },
  {
    title: "Kinnaur – Spiti – Chandratal – Manali",
    duration: "9 Nights / 10 Days · May–Oct",
    body: "The full circuit: apple orchards to high-altitude desert to a lake that turns silver at dusk, in one continuous route.",
    href: "/himachal-pradesh/kinnaur/",
    linkLabel: "See Kinnaur",
  },
  {
    title: "Shimla – Kullu – Manali",
    duration: "Custom Duration · Year-Round",
    body: "The classic Himachal route, done properly: colonial hill-station mornings to valley orchards to alpine passes.",
    href: "/himachal-pradesh/shimla/",
    linkLabel: "See Shimla",
  },
  {
    title: "Zanskar Range Expedition",
    duration: "Custom Duration · Jul–Sep",
    body: "Advanced trekking and Class III–V rafting on the Zanskar River, deep in Ladakh.",
    href: "/ladakh/zanskar/",
    linkLabel: "See Zanskar",
  },
];
