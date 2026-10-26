import type { Metadata } from "next";
import type { ReactNode } from "react";
import Translate from "./translate";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Partner's Resources | The Himalayan Ramble" },
  description:
    "Private partner resources for The Himalayan Ramble international travel partner network — the partner kit, the Manali Winter Circuit package, and the commission & cancellation policy.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/partner-resources/" },
};

/* ------------------------------------------------------------------ *
 *  Helper building blocks
 * ------------------------------------------------------------------ */

function Section({
  num,
  title,
  children,
  id,
}: {
  num: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.sectionNum}>{num}</div>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol className={styles.steps}>
      {items.map((item, i) => (
        <li className={styles.step} key={i}>
          <b>{String(i + 1).padStart(2, "0")}</b>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function Stats({ items }: { items: [string, string][] }) {
  return (
    <div className={styles.statGrid}>
      {items.map(([n, label], i) => (
        <div className={styles.stat} key={i}>
          <strong>{n}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function InlineList({ items }: { items: ReactNode[] }) {
  return (
    <ul className={styles.inlineList}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={styles.callout}>
      <div className={styles.calloutLabel}>{label}</div>
      <p className={styles.calloutText}>{children}</p>
    </div>
  );
}

function Warning({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={styles.warning}>
      <b>{label}</b>
      {children}
    </div>
  );
}

function RuleBox({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className={styles.ruleBox}>
      {label ? <b>{label}</b> : null}
      {children}
    </div>
  );
}

function Slots({ items }: { items: string[] }) {
  return (
    <div className={styles.slots}>
      {items.map((slot, i) => (
        <div className={styles.slot} key={i}>
          {slot}
        </div>
      ))}
    </div>
  );
}

function Tier({ rows }: { rows: [string, string][] }) {
  return (
    <table className={styles.tier}>
      <thead>
        <tr>
          <th>Confirmed travellers</th>
          <th>Commission</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([a, b], i) => (
          <tr key={i}>
            <td>{a}</td>
            <td>{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Terms({ rows }: { rows: [string, string][] }) {
  return (
    <div>
      {rows.map(([label, text], i) => (
        <div className={styles.term} key={i}>
          <b>{label}</b>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

function Facts({ items }: { items: [string, string][] }) {
  return (
    <div className={styles.factGrid}>
      {items.map(([label, text], i) => (
        <div className={styles.fact} key={i}>
          <b>{label}</b>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

function Statement({ children }: { children: ReactNode }) {
  return <p className={styles.statement}>{children}</p>;
}

function Subhead({ children }: { children: ReactNode }) {
  return <h3 className={styles.subhead}>{children}</h3>;
}

function Part({
  id,
  num,
  name,
  children,
}: {
  id: string;
  num: string;
  name: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={styles.part} aria-label={name}>
      <div className={styles.partTag}>
        <span className={styles.partNum}>{num}</span>
        <span className={styles.partName}>{name}</span>
      </div>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  Data — International Travel Partner Kit
 * ------------------------------------------------------------------ */

const KIT_INDEX: [string, string, string][] = [
  ["01", "Welcome & the Program", "#kit-welcome"],
  ["02", "Role, Responsibilities & How It Works", "#kit-role"],
  ["03", "Products & Target Customers", "#kit-groups"],
  ["04", "The Official Pitch", "#kit-pitch"],
  ["05", "Finding Customers & Lead Qualification", "#kit-network"],
  ["06", "Lead Handover & Booking Process", "#kit-handover"],
  ["07", "Commission Structure", "#kit-commission"],
  ["08", "Fill the Slot", "#kit-slot"],
  ["09", "Sales Guidelines", "#kit-sales"],
  ["10", "Handling Objections", "#kit-objections"],
  ["11", "Marketing & Brand", "#kit-marketing"],
  ["12", "Data, Privacy & Partner Terms", "#kit-data"],
];

const AS_PARTNER = [
  "Identify potential customers and groups.",
  "Promote our approved tour packages.",
  "Pitch the tours to your customer network.",
  "Help convert interested prospects into confirmed bookings.",
  "Work with The Himalayan Ramble team for quotations, planning and final booking arrangements.",
];

const RESPONSIBILITIES = [
  "Generating potential customer leads.",
  "Focusing on groups of 10–12 or more travellers wherever possible.",
  "Introducing the relevant tour package.",
  "Presenting the official sales pitch.",
  "Answering basic customer questions using the information provided.",
  "Following up with interested customers.",
  "Collecting basic group and travel requirements.",
  "Connecting serious prospects with The Himalayan Ramble.",
  "Supporting the customer through the initial booking process.",
];

const HOW_IT_WORKS = [
  <>
    <strong>find</strong> Identify potential travellers and groups.
  </>,
  <>
    <strong>pitch</strong> Introduce and promote the relevant tour.
  </>,
  <>
    <strong>qualify</strong> Understand group size, dates and requirements.
  </>,
  <>
    <strong>connect</strong> Bring serious prospects to The Himalayan Ramble.
  </>,
  <>
    <strong>convert</strong> Assist in moving the customer towards booking.
  </>,
  <>
    <strong>confirm</strong> The Himalayan Ramble confirms the booking.
  </>,
  <>
    <strong>earn</strong> Commission is calculated on your total confirmed
    travellers for the month.
  </>,
];

const FOCUS = [
  "Groups of friends",
  "Families",
  "Existing travel groups",
  "Community groups",
  "Corporate / professional groups",
  "Adventure and nature enthusiasts",
  "Existing travel customers",
  "People interested in India and the Himalayas",
];

const HIGHLIGHTS = [
  "Himalayan landscapes and mountain scenery.",
  "Hadimba Devi Temple, a cedar-forest pagoda built in 1553.",
  "Solang Valley. Paragliding, zorbing and winter snow.",
  "Rohtang Pass and the Atal Tunnel road north.",
  "Local culture, nature and authentic Indian hospitality.",
];

const SLOTS = [
  "01 · 25 Nov – 02 Dec 2026",
  "05 · 25 Jan – 01 Feb 2027",
  "02 · 05 Dec – 12 Dec 2026",
  "06 · 04 Feb – 11 Feb 2027",
  "03 · 15 Dec – 22 Dec 2026",
  "07 · 14 Feb – 21 Feb 2027",
  "04 · 15 Jan – 22 Jan 2027",
  "08 · 24 Feb – 03 Mar 2027",
];

const PITCH_STATS: [string, string][] = [
  ["01", "destination / manali, india"],
  ["02", "experience / indian himalayan group travel"],
  ["03", "price / from approx. us$500 pp"],
  ["04", "group size / ideally 10-12+"],
];

const NETWORK: { title: string; text: string }[] = [
  {
    title: "personal",
    text: "Friends · Family · Neighbours · Former classmates · Community contacts",
  },
  {
    title: "professional",
    text: "Colleagues · Business contacts · Companies · Professional groups · Local organisations",
  },
  {
    title: "travel",
    text: "Existing travel customers · Travel consultants · Travel agencies · Tour organisers · Travel communities",
  },
  {
    title: "online",
    text: "WhatsApp · Facebook · Instagram · LinkedIn · Community groups",
  },
];

const QUALIFY = [
  "How many people are travelling?",
  "Where are they travelling from?",
  "What dates are they considering?",
  "Are the dates flexible?",
  "What type of experience are they looking for?",
  "Are they seriously considering India?",
  "Who is coordinating the group?",
  "What is their approximate budget?",
];

const LEAD_PRIORITY = [
  ["hot", "Group is serious and discussing dates and budget."],
  ["warm", "Interested but still discussing with their group."],
  ["cold", "General enquiry with no clear travel plan."],
];

const HANDOVER = [
  "Partner Name",
  "Partner Country / Market",
  "Customer/Group Name",
  "Traveller Country / Market",
  "Number of Travellers",
  "Preferred Travel Dates",
  "Contact Number",
  "Email/WhatsApp",
  "Approximate Budget",
  "Requirements",
  "Special Requests",
  "Current Status",
];

const BOOKING_PROCESS = [
  <>
    <strong>lead generated</strong> You identify a potential customer or group.
  </>,
  <>
    <strong>initial pitch</strong> You introduce the relevant tour using the
    approved information.
  </>,
  <>
    <strong>qualification</strong> You collect group size, dates and
    requirements.
  </>,
  <>
    <strong>handover</strong> Serious prospects are connected with The Himalayan
    Ramble.
  </>,
  <>
    <strong>proposal &amp; planning</strong> Our team discusses itinerary,
    availability, pricing and requirements.
  </>,
  <>
    <strong>customer approval</strong> The customer agrees to proceed.
  </>,
  <>
    <strong>booking process</strong> Booking formalities and payments are
    completed.
  </>,
  <>
    <strong>confirmation</strong> The Himalayan Ramble officially confirms the
    booking.
  </>,
  <>
    <strong>monthly commission</strong> Commission is calculated on the total
    confirmed travellers you brought that calendar month.
  </>,
];

const TIERS: [string, string][] = [
  ["5–9", "2%"],
  ["10–19", "4%"],
  ["20–29", "6%"],
  ["30–39", "8%"],
  ["40–49", "10%"],
  ["50+", "12%"],
];

const TIER_JUMP = [
  "You bring 10 confirmed travellers. They fall under the 4% tier.",
  "Commission is paid at 4% on the eligible booking value of those 10.",
  "Later that month, 10 more confirm. Your month total is now 20.",
  "20 travellers fall under the 6% tier. All 20 are recalculated at 6%.",
  "The 4% already paid is deducted. Only the remaining balance is paid.",
];

const DO_LIST = [
  "Be professional and respectful.",
  "Use accurate and approved information.",
  "Explain the experience clearly.",
  "Follow up with interested customers.",
  "Be transparent about pricing.",
  "Ask questions before making recommendations.",
  "Contact The Himalayan Ramble when you need clarification.",
];

const DO_NOT_LIST = [
  "Promise unauthorised discounts.",
  "Change the official package price.",
  "Guarantee services that are not confirmed.",
  "Promise specific hotels without confirmation.",
  "Make visa guarantees.",
  "Guarantee weather conditions.",
  "Promise refunds outside official policies.",
  "Provide inaccurate information.",
];

const OBJECTIONS: { q: string; a: string }[] = [
  {
    q: "\u201cwhy should we visit manali?\u201d",
    a: "Manali offers a unique combination of Himalayan landscapes, nature, culture and adventure. A great option beyond conventional city or beach holidays.",
  },
  {
    q: "\u201cus$500 is expensive.\u201d",
    a: "US$500 is the approximate starting price. The final price depends on itinerary, dates and requirements. The Himalayan Ramble team provides the exact quotation.",
  },
  {
    q: "\u201ccan we travel with only four people?\u201d",
    a: "The tour is primarily designed for groups of 10-12 or more. Smaller groups may be considered in special circumstances — I can check with The Himalayan Ramble.",
  },
  {
    q: "\u201ccan you give us a discount?\u201d",
    a: "Pricing is determined by The Himalayan Ramble. I cannot promise a discount, but I can ask the team about the applicable quotation.",
  },
  {
    q: "\u201ccan we customise the trip?\u201d",
    a: "Yes, customisation may be possible depending on requirements. I can connect you with The Himalayan Ramble's team to discuss your group.",
  },
];

const MARKETING_CHANNELS = [
  "WhatsApp",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Local communities",
  "Travel groups",
  "Personal and professional networks",
];

const MARKETING_ENSURE = [
  "The company name is used correctly.",
  "Official pricing is used.",
  "Official package information is used.",
  "Only approved photographs and promotional material are used where required.",
  "Any significant modification to promotional content is approved before publication.",
];

const DO_NOT_SHARE = [
  "Phone numbers",
  "Email addresses",
  "Passport information",
  "Payment information",
  "Travel documents",
  "Private conversations",
  "Personal customer information",
];

const PARTNER_TERMS = [
  "Represent The Himalayan Ramble professionally.",
  "Follow the approved sales and communication process.",
  "Use accurate company and product information.",
  "Focus on genuine customers and group bookings.",
  "Maintain confidentiality of customer information.",
  "Keep all customer information inside The Himalayan Ramble or its authorised travel operations, and never misuse it. Information is used only for the lawful purpose of arranging the customer's travel.",
];

/* ------------------------------------------------------------------ *
 *  Data — Manali Winter Circuit
 * ------------------------------------------------------------------ */

const MANALI_FACTS: [string, string][] = [
  ["Season", "Late November to early March"],
  ["Board basis", "Bed & breakfast, CP basis"],
  ["Hotels", "Mix of 3/4-star and boutique properties"],
  ["Vehicle", "Private Tempo Traveller with driver"],
  ["Travel companion", "English-speaking travel companion"],
  ["Price", "From US$500 per person, double sharing"],
];

const ROUTE = [
  ["delhi", "Arrival and departure on Days 01 and 08"],
  ["agra", "Taj Mahal and Agra Fort. 1 night"],
  ["shimla", "Jakhu Ridge and Mall Road. 1 night"],
  ["manali", "Base for Sissu, Solang and Kothi. 3 nights"],
  ["delhi", "Overnight road journey back. Tour ends"],
];

const ITINERARY: {
  kicker: string;
  title: ReactNode;
  days: { name: string; desc: ReactNode; tags: string }[];
}[] = [
  {
    kicker: "day 01 / day 02",
    title: (
      <>
        Delhi →
        <br />
        Agra → <span>Shimla</span>
      </>
    ),
    days: [
      {
        name: "Day 01 / Delhi to Agra",
        desc: "Morning pickup from Indira Gandhi International Airport. Travel by private vehicle to Agra, check in, rest and spend the evening at leisure. Overnight in Agra.",
        tags: "IGI airport pickup · Private road transfer · Overnight Agra",
      },
      {
        name: "Day 02 / Agra to Shimla",
        desc: "Start early for the Taj Mahal, on foot or by tuk-tuk. Return to the hotel, collect luggage and depart. Visit Agra Fort by vehicle, the red sandstone fortress that served as a centre of Mughal power for more than a century. Leave for Shimla in the evening on an overnight road journey.",
        tags: "Taj Mahal · Agra Fort · Overnight road journey",
      },
    ],
  },
  {
    kicker: "day 03 / day 04",
    title: (
      <>
        Shimla
        <br />
        <span>To Manali</span>
      </>
    ),
    days: [
      {
        name: "Day 03 / Shimla",
        desc: "Arrive in the early morning, check in and rest. After breakfast, walk up to Jakhu through the cedar-covered ridge or take the cable car. Descend to Mall Road and explore the colonial ridge at your own pace. Overnight in Shimla.",
        tags: "Jakhu Ridge walk · Mall Road · Overnight Shimla",
      },
      {
        name: "Day 04 / Shimla to Manali",
        desc: "Depart after breakfast. Stop for lunch near Bilaspur beside the Beas River. Arrive in Manali in the evening, check in, then walk the Mall Road. Overnight in Manali.",
        tags: "Lunch stop at Bilaspur · Evening Mall Road · Overnight Manali",
      },
    ],
  },
  {
    kicker: "day 05 / day 06",
    title: (
      <>
        Above
        <br />
        <span>3,000 metres</span>
      </>
    ),
    days: [
      {
        name: "Day 05 / Atal Tunnel & Sissu",
        desc: "Head north from Manali through the Atal Tunnel, the world's longest highway tunnel at this altitude. Enter Lahaul at Sissu for open snow and valley views. Return to Manali in the evening, walk the Mall Road and overnight in Manali.",
        tags: "Atal Tunnel · Sissu snow experience · Overnight Manali",
      },
      {
        name: "Day 06 / Solang Valley",
        desc: "Spend the day in Solang, one of Himachal's most accessible adventure areas. Paragliding is included. Zipline, skiing, the snow-point cable car, ATV rides and tube slides are available locally at additional cost. Walk Old Manali in the evening. Overnight in Manali.",
        tags: "Paragliding included · Solang Valley · Old Manali",
      },
    ],
  },
  {
    kicker: "day 07 / day 08",
    title: (
      <>
        Forest
        <br />
        Kothi
        <br />
        <span>Delhi</span>
      </>
    ),
    days: [
      {
        name: "Day 07 / Kothi & Departure",
        desc: "Walk through the Manali forest reserve and cedar woodland in the morning. Continue to Kothi near Palchan for bungee jumping over the valley. Depart for Delhi around 15:00–16:00 on an overnight road journey.",
        tags: "Forest walk · Kothi bungee jump, additional cost · Overnight road journey",
      },
      {
        name: "Day 08 / Arrive Delhi",
        desc: "Arrive at Delhi IGI Airport in the early morning, approximately 05:00–06:00. Tour ends.",
        tags: "IGI airport arrival · Airport drop assistance · Tour ends",
      },
    ],
  },
];

const DEPARTURES = [
  ["01", "25 Nov 2026 → 02 Dec 2026"],
  ["02", "05 Dec 2026 → 12 Dec 2026"],
  ["03", "15 Dec 2026 → 22 Dec 2026"],
  ["04", "15 Jan 2027 → 22 Jan 2027"],
  ["05", "25 Jan 2027 → 01 Feb 2027"],
  ["06", "04 Feb 2027 → 11 Feb 2027"],
  ["07", "14 Feb 2027 → 21 Feb 2027"],
  ["08", "24 Feb 2027 → 03 Mar 2027"],
];

const INCLUSIONS = [
  "Seven nights' accommodation in a mix of 3/4-star and boutique properties in Agra, Shimla and Manali.",
  "Accommodation on CP basis with breakfast each hotel morning.",
  "Three complimentary meals arranged by The Himalayan Ramble during the tour.",
  "Private Tempo Traveller with driver throughout the itinerary, exclusively for your group.",
  "Fuel, tolls, parking, inter-state permits, driver allowance and driver accommodation.",
  "English-speaking travel companion throughout the trip.",
  "Airport pickup on Day 01 and airport drop on Day 08, with meet-and-assist service.",
  "All attractions listed in the day-by-day itinerary.",
  "Entrance tickets and permits for monuments and parks listed in the itinerary.",
  "Atal Tunnel and Rohtang route permits where applicable.",
  "One paragliding flight per person at Solang Valley.",
  "Local field assistance throughout the tour.",
  "Luggage handling at hotels and all transfer points.",
  "Applicable government taxes and GST on the above inclusions.",
];

const EXCLUSIONS = [
  "International and domestic flights, airport taxes and excess baggage.",
  "Visa fees, e-Visa processing and personal travel insurance.",
  "Lunches and dinners other than the three complimentary meals.",
  "Room service, minibar and hotel purchases charged to the room.",
  "Jakhu cable car tickets.",
  "Kothi bungee jumping.",
  "Zipline, skiing, snow-point cable car, ATVs, tube slides and additional paragliding.",
  "Any activity not expressly listed under inclusions.",
  "Laundry, telephone, internet, tips, shopping and camera fees.",
  "Medical treatment, evacuation and emergency expenses.",
  "Costs arising from weather, snowfall, road closures, landslides, strikes or flight delays, including additional accommodation, transport or rerouting.",
  "4x4 vehicle costs if heavy snowfall makes one necessary.",
  "Anything not expressly listed under inclusions.",
];

const MANALI_CANCEL = [
  ["more than 20 days", "No cancellation charge on tour cost. Deposit refunded less non-recoverable and supplier charges."],
  ["20 to 10 days", "20% of package cost retained."],
  ["10 days or less", "No refund, including no-show."],
];

const MANALI_TERMS_1: [string, string][] = [
  ["Rate basis", "Price is per person for the confirmed number of travellers and room configuration, tied to the selected departure. Any change to dates, occupancy or accommodation category reopens the quotation."],
  ["Booking", "Booking is confirmed on receipt of the deposit. Until then, rooms and vehicle availability are not held."],
  ["Payment", "50% on confirmation and the full balance one week before departure."],
  ["Cancellation", "As stated on the cancellation page. Cancellations by suppliers, including hotels and activity operators, follow their supplier terms where stricter."],
  ["Vehicle", "Private Tempo Traveller with driver operated by The Himalayan Ramble. Fuel, tolls, parking and driver costs are included. The vehicle may not be used privately outside the itinerary without prior agreement."],
  ["Permits & ID", "Every traveller must carry original photo identification. Issuance of Atal Tunnel and Rohtang permits rests with the issuing authority; refusal or delay is outside our control."],
  ["Liability", "We plan and coordinate the circuit but are not responsible for third-party supplier actions or losses arising from force majeure, road closures, strikes or vehicle failure."],
];

const MANALI_TERMS_2: [string, string][] = [
  ["Route & weather", "The Atal Tunnel and road to Sissu are weather-dependent and may close without notice. If a section is impassable, we will use the nearest practical alternative at no additional cost. If closure requires an extra night, extra day or full rerouting, costs are charged at actual cost."],
  ["Snow & vehicle", "The Tempo Traveller handles the standard route well, but heavy snow may make some high-altitude or single-lane sections inaccessible and may cause the vehicle to become stuck or damaged. If route conditions require it, a temporary 4x4 will be arranged for that section at actual cost and is not included."],
  ["Altitude", "The route reaches approximately 3,100m at Sissu and overnight accommodation is at 2,050m in Manali. Travellers confirm they are fit for travel at altitude. Evacuation and medical costs are the traveller's responsibility."],
  ["Activities", "Paragliding and all optional activities at Solang and Kothi are subject to operator discretion based on weather, wind and same-day safety approval. If the included flight cannot operate for weather or safety reasons, there is no cash refund for that flight."],
  ["Accommodation", "Accommodation is confirmed by category. Named hotels will be advised before departure. If a property becomes unavailable, an equivalent property in the same category will be substituted and you will be informed before travel."],
  ["Itinerary", "The Himalayan Ramble may change the order of the itinerary for safety, road conditions or traveller welfare while maintaining the overall content of the tour."],
];

const MANALI_CONTACT: [string, string][] = [
  ["Contact", "Anshul Thakur — Operations Manager"],
  ["Email", "anshulsimla@gmail.com · anshul@thehimalayanramble.com"],
  ["WhatsApp", "+91 89889 33330"],
  ["Location", "Shimla, Himachal Pradesh, India"],
  ["Website", "thehimalayanramble.com"],
];

/* ------------------------------------------------------------------ *
 *  Data — Commission & Cancellation Policy
 * ------------------------------------------------------------------ */

const COMMISSION_TIERS: [string, string][] = [
  ["5–9", "2%"],
  ["10–19", "4%"],
  ["20–29", "6%"],
  ["30–39", "8%"],
  ["40–49", "10%"],
  ["50+", "12%"],
];

const COMMISSION_TIER_JUMP = [
  "You bring 10 confirmed travellers. They fall under the 4% tier.",
  "Commission is calculated on the eligible booking value of those 10.",
  "Later in the same month, another 10 travellers confirm. Your total is now 20.",
  "20 travellers fall under the 6% tier. All 20 are recalculated at 6%.",
  "Commission already paid at 4% is deducted. Only the remaining balance is paid.",
];

const SLOT_FACTS: [string, string][] = [
  ["Current Manali Standard", "10–12+ confirmed travellers per departure slot."],
  ["Target", "No later than 30 days before the specific departure."],
  ["Measured", "Slot by slot, not month by month."],
  ["Confirmed Means", "Booked and paid through the required process, not merely enquired or pencilled in."],
];

const PERFORMANCE_STEPS = [
  "Work actively toward filling departure slots.",
  "Generate more than 50 confirmed travellers across the three-month period.",
  "Convert genuine group opportunities into real bookings.",
  "Communicate professionally and follow through efficiently.",
  "Demonstrate that the same level of performance can continue across future tours.",
];

const PAYOUT_FACTS: [string, string][] = [
  ["Calculation", "Using the tier for the calendar month in which the travellers were confirmed."],
  ["Settlement", "Monthly, against a statement covering bookings that passed the non-refundable point during that month."],
  ["Outstanding Balance", "If the customer's balance has not been received in full, commission is held until it is received."],
  ["Transfer Costs", "Bank-transfer and currency-conversion charges are borne by the partner unless otherwise agreed in writing."],
];

const CUSTOMER_CANCEL: [string, string][] = [
  ["more than 20 days", "No cancellation charge on tour cost under the standard customer policy. Deposit is refunded after non-refundable components and unrecoverable supplier costs are deducted."],
  ["20–10 days", "20% of package cost retained."],
  ["10 days or less", "No refund. No-show is treated the same."],
  ["deposit", "30% of the advance is non-refundable."],
];

const SHRINK_TERMS: [string, string][] = [
  ["Cancelled Traveller", "A cancelled traveller leaves the partner's traveller count for the relevant month."],
  ["Retained Amounts", "No commission is paid on retained or forfeited amounts. Retained money covers costs already committed to hotels, vehicles and operators. It is not margin."],
  ["Before Non-Refundable Point", "The traveller simply leaves the count. Nothing has been paid as commission, so nothing is recovered."],
  ["Tier Reduction", "If a cancellation drops the month into a lower commission tier, the month is recalculated at the lower rate and the difference is adjusted against the next settlement."],
  ["After Non-Refundable Point", "Cancellations after the non-refundable point do not affect commission already paid."],
];

const EDGE_TERMS: [string, string][] = [
  ["Group Shrinks", "A group of 12 that travels as 9 earns commission on 9. The 3 cancelled travellers leave the relevant count and may change the tier."],
  ["Date Change", "A date change is not a cancellation. The traveller remains credited to the partner and is counted in the month in which they finally travel. Amendment costs do not earn commission."],
  ["Partnership Ends", "Commission remains payable for confirmed bookings that reach the non-refundable point. Nothing further accrues after the partnership ends."],
  ["Records", "THR booking records are the reference for traveller counts, eligible value and commission tier."],
  ["Statement Queries", "Queries must be raised within 15 days of receiving the statement."],
  ["Attribution", "If two partners claim the same customer, the earliest recorded introduction stands."],
  ["No Rebates", "Commission may not be discounted, rebated or shared with the customer as an inducement unless expressly authorised in writing."],
];

const THREE_MEASURES: [string, string][] = [
  ["01 / Monthly Commission Tier", "5–9 = 2% · 10–19 = 4% · 20–29 = 6% · 30–39 = 8% · 40–49 = 10% · 50+ = 12%"],
  ["02 / Slot Standard", "10–12+ confirmed travellers per Manali departure, targeted no later than 30 days before that departure."],
  ["03 / Three-Month Performance", "More than 50 confirmed travellers across the initial three-month commission period. Not a monthly minimum."],
];

/* ------------------------------------------------------------------ *
 *  Page
 * ------------------------------------------------------------------ */

export default function PartnerResourcesPage() {
  return (
    <main id="main" className={styles.root}>
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.topbar}>
            <span>The Himalayan Ramble</span>
            <span>International Travel Partner Network</span>
          </div>
          <p className={styles.heroKicker}>internal partner portal</p>
          <h1 className={styles.heroTitle}>
            <span>Partner's</span>
            <span className={styles.accent}>Resources.</span>
          </h1>
          <p className={`${styles.lead} ${styles.heroLead}`}>
            This private library supports our international travel partners. It
            covers the partner kit, the Manali Winter Circuit package, and the
            commission &amp; cancellation policy.
          </p>
          <div className={styles.translate}>
            <span className={styles.translateLabel}>Translate this page</span>
            <Translate />
            <span className={styles.translateHint}>
              Choose your language — the entire page will be translated.
            </span>
          </div>
          <p className={styles.note}>
            Internal partner documents / not for public distribution
          </p>
        </header>

        <nav className={styles.partNav} aria-label="Partner resources">
          <a className={styles.partNavItem} href="#partner-kit">
            <span>01</span> International Travel Partner Kit
          </a>
          <a className={styles.partNavItem} href="#manali-circuit">
            <span>02</span> Manali Winter Circuit
          </a>
          <a className={styles.partNavItem} href="#commission-policy">
            <span>03</span> Commission &amp; Cancellation Policy
          </a>
        </nav>

        {/* ---------------------------------------------------------- */}
        {/* 01 — INTERNATIONAL TRAVEL PARTNER KIT                      */}
        {/* ---------------------------------------------------------- */}
        <Part id="partner-kit" num="01" name="International Travel Partner Kit">
          <header className={styles.cover}>
            <p className={styles.kicker}>international travel partner kit.</p>
            <h1 className={styles.coverTitle}>
              <span>International</span>
              <span className={styles.accent}>Travel</span>
              <span>Partner Kit.</span>
            </h1>
            <p className={styles.lead}>
              <strong>The Himalayan Ramble.</strong> Shimla-based Himalayan
              travel operator since 2000. Approved by the Department of Tourism,
              Himachal Pradesh, and the Ministry of Tourism, Government of
              India.
            </p>
            <Statement>
              you bring the <em>customers.</em>
              <br />
              we create the journey.
            </Statement>
            <p className={styles.note}>
              internal partner document / not for public distribution
            </p>
          </header>

          <section className={styles.section} id="kit-index">
            <div className={styles.sectionNum}>00 / navigation</div>
            <h2 className={styles.sectionTitle}>index.</h2>
            <div className={styles.index}>
              <p className={styles.indexTitle}>on this document</p>
              <ol className={styles.indexList}>
                {KIT_INDEX.map(([n, t, href]) => (
                  <li key={n}>
                    <a href={href}>
                      <b>{n}</b>
                      {t}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <Section
            id="kit-welcome"
            num="01 / welcome & the program"
            title={
              <>
                welcome<span>.</span>
              </>
            }
          >
            <div className={styles.copy}>
              <p>
                Welcome to The Himalayan Ramble International Travel Partner
                Network.
              </p>
              <p>
                Founded in 2000 and based in Shimla, India, The Himalayan Ramble
                specialises in Himalayan travel, group tours, trekking,
                adventure expeditions and customised travel experiences.
              </p>
              <p>
                Through this partnership, we connect travellers from your market
                with authentic and professionally organised Himalayan
                experiences. Partners may operate from any country or market and
                represent The Himalayan Ramble within their own network.
              </p>
              <Stats
                items={[
                  ["25", "years operating"],
                  ["7", "regions across northern india"],
                ]}
              />
            </div>
            <Subhead>The program</Subhead>
            <p className={styles.copy}>
              The International Travel Partner Program builds a network of
              trusted partners who introduce and promote The Himalayan Ramble's
              travel experiences within their local market.
            </p>
            <Subhead>As a partner, you will:</Subhead>
            <Steps items={AS_PARTNER} />
            <p className={styles.copy}>
              This is a performance-based, part-time international partnership
              focused on generating consistent group bookings through your own
              network and market. You handle customer acquisition and
              relationship management; The Himalayan Ramble handles destination
              expertise, quotations, travel planning, operations and final
              booking confirmation.
            </p>
            <Callout label="network equation">
              your network + our expertise = more travellers.
            </Callout>
            <BigLineP>
              you bring the customers.
              <br />
              we create the journey.
            </BigLineP>
          </Section>

          <Section
            id="kit-role"
            num="02 / role, responsibilities & how it works"
            title={
              <>
                your role<span>.</span>
              </>
            }
          >
            <p className={styles.copy}>
              Your primary role is to find, approach, pitch and convert
              customers within your network.
            </p>
            <Subhead>You are responsible for:</Subhead>
            <Steps items={RESPONSIBILITIES} />
            <Warning label="important">
              Generating a lead is only the beginning. Your responsibility is to
              help convert that lead into a confirmed booking.
            </Warning>
            <Subhead>How it works</Subhead>
            <Steps items={HOW_IT_WORKS} />
            <BigLineP>find / pitch / qualify / connect / convert / confirm / earn</BigLineP>
            <p className={styles.copy}>
              The Himalayan Ramble handles the detailed travel planning and
              operations. You handle the customer.
            </p>
          </Section>

          <Section
            id="kit-groups"
            num="03 / target customers & the manali product"
            title={
              <>
                groups<span>.</span>
                <br />
                not solo.
              </>
            }
          >
            <div className={styles.copy}>
              <p>
                Our primary focus is group travel. The ideal group size is 10-12
                travellers or more. The ideal customer is a person who can
                either organise or influence a group trip. The Manali Winter
                Circuit is currently our flagship departure product for
                international partners. Additional Himalayan destinations and
                tour products will be introduced progressively.
              </p>
            </div>
            <Subhead>Focus on:</Subhead>
            <InlineList items={FOCUS} />
            <Callout label="priority">groups of 10-12+ travellers.</Callout>
            <div className={styles.product}>
              <h3 className={styles.productTitle}>manali</h3>
              <p className={styles.productMini}>
                Himachal Pradesh, India. 2,050m, Beas river valley.
              </p>
              <p className={styles.price}>
                starting price: us$500 / person, approximate
              </p>
              <p>
                <strong>ideal group size:</strong> 10-12+ travellers
              </p>
              <Subhead>highlights</Subhead>
              <ul>
                {HIGHLIGHTS.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
            <Subhead>Fixed departure slots</Subhead>
            <Slots items={SLOTS} />
            <BigLineP>snow you can drive to.</BigLineP>
            <div className={styles.copy}>
              <p>
                No trekking required. The Indian Himalaya has snow in reach of
                the road. The Atal Tunnel and the valley floor keep the winter
                route open and drivable, and Manali itself sits at a comfortable
                2,050m — high enough for alpine character, lower than
                high-altitude trekking routes.
              </p>
              <p>
                For further details on the Manali product, see the package
                document on this page.
              </p>
            </div>
          </Section>

          <Section
            id="kit-pitch"
            num="04 / the official pitch"
            title={
              <>
                the pitch<span>.</span>
              </>
            }
          >
            <p className={styles.copy}>
              <strong>Your pitch should focus on the experience, not just the
              price.</strong>
            </p>
            <div className={styles.pitch}>
              <span className={styles.pitchLabel}>basic pitch / say it like this</span>
              <p className={styles.copy}>
                “Are you and your friends planning your next international group
                trip? How about experiencing the Indian Himalayas? The Himalayan
                Ramble offers group tours to Manali, one of India's most
                beautiful Himalayan destinations, starting from approximately
                US$500 per person. The tour is designed for groups looking for
                mountains, nature, culture and an authentic Himalayan
                experience. If you have a group of 10-12 or more people
                interested in travelling, I can connect you with our team in
                India to discuss the details.”
              </p>
            </div>
            <Subhead>Every pitch must communicate:</Subhead>
            <Stats items={PITCH_STATS} />
            <BigLineP>
              company — the himalayan ramble
              <br />
              call to action — ask for group size and preferred dates
            </BigLineP>
          </Section>

          <Section
            id="kit-network"
            num="05 / finding customers & lead qualification"
            title={
              <>
                your network
                <br />
                is the product.
              </>
            }
          >
            <div className={styles.duo}>
              {NETWORK.map((n) => (
                <div className={styles.duoCol} key={n.title}>
                  <h4 className={styles.duoTitle}>{n.title}</h4>
                  <p className={styles.duoText}>{n.text}</p>
                </div>
              ))}
            </div>
            <p className={styles.copy}>
              For travel agencies, start with customers who already have
              experience travelling internationally.
            </p>
            <p className={styles.quote}>
              one organiser
              <br />
              is <span>twelve</span> travellers.
            </p>
            <Subhead>Qualify before you send.</Subhead>
            <p className={styles.copy}>Ask every prospect:</p>
            <ol className={styles.qualify}>
              {QUALIFY.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
            <Subhead>Lead priority</Subhead>
            <div className={styles.duo}>
              {LEAD_PRIORITY.map(([t, d]) => (
                <div className={styles.duoCol} key={t}>
                  <h4 className={styles.duoTitle}>{t}</h4>
                  <p className={styles.duoText}>{d}</p>
                </div>
              ))}
            </div>
            <BigLineP>
              focus your effort primarily on hot and warm group leads.
            </BigLineP>
          </Section>

          <Section
            id="kit-handover"
            num="06 / lead handover & booking process"
            title={
              <>
                handover<span>.</span>
              </>
            }
          >
            <p className={styles.copy}>
              When you have a serious prospect, provide the following to The
              Himalayan Ramble:
            </p>
            <InlineList items={HANDOVER} />
            <Warning label="important">
              Do not send unqualified or casual enquiries as business.
            </Warning>
            <Subhead>The booking process</Subhead>
            <Steps items={BOOKING_PROCESS} />
          </Section>

          <Section
            id="kit-commission"
            num="07 / commission structure"
            title={
              <>
                commission<span>.</span>
              </>
            }
          >
            <p className={styles.copy}>
              Based on the total number of confirmed travellers you bring during
              each calendar month.
            </p>
            <Tier rows={TIERS} />
            <Warning label="commission is paid on confirmed bookings, not on leads.">
              A lead, enquiry or quotation does not qualify. Rates are fixed and
              non-negotiable. The tier is set by your total confirmed travellers
              in the calendar month and applied to the total eligible booking
              value for that month.
            </Warning>
            <Subhead>How the tier jump pays — worked example</Subhead>
            <Steps items={TIER_JUMP} />
            <Callout label="end-of-month position">
              you end the month on 6% of everything.
            </Callout>
          </Section>

          <Section
            id="kit-slot"
            num="08 / fill the slot"
            title={
              <>
                fill
                <br />
                the slot<span>.</span>
              </>
            }
          >
            <p className={styles.copy}>
              There is no minimum number of confirmed travellers per month.
              Instead, each fixed departure date is a slot, and your
              responsibility is to ensure your slot reaches full group size
              before it closes.
            </p>
            <Subhead>The deadline</Subhead>
            <p className={styles.copy}>
              Every departure slot should be filled to the required group size
              no later than{" "}
              <strong>30 days before that departure date.</strong> This applies
              slot by slot, not month by month — each date carries its own
              deadline, independent of any other.
            </p>
            <Subhead>What “filled” means</Subhead>
            <p className={styles.copy}>
              The slot reaches the group size confirmed for that product —
              currently 10-12+ travellers for the Manali Winter Circuit.
              Confirmed means booked and paid, not enquired or pencilled in.
            </p>
            <Subhead>Why this matters</Subhead>
            <p className={styles.copy}>
              This is a desired performance condition, not a hard cutoff —
              nothing automatically happens to a slot that is not filled by the
              deadline. It is, however, the standard The Himalayan Ramble uses
              when reviewing partner performance for future roles, renewed terms
              and additional markets.
            </p>
            <p className={styles.copy}>
              Commission itself is unaffected by this condition and continues to
              follow the monthly tiered structure set out on the previous page.
            </p>
            <p className={`${styles.copy} ${styles.muted} ${styles.mini}`}>
              This applies to all current and future Himalayan Ramble products
              sold through the partner program.
            </p>
          </Section>

          <Section
            id="kit-sales"
            num="09 / sales guidelines"
            title={
              <>
                do<span>.</span>
                <br />
                do not.
              </>
            }
          >
            <div className={styles.duo}>
              <div className={styles.duoCol}>
                <h4 className={`${styles.duoTitle} ${styles.yes}`}>do</h4>
                <ul className={styles.duoList}>
                  {DO_LIST.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.duoCol}>
                <h4 className={`${styles.duoTitle} ${styles.no}`}>do not</h4>
                <ul className={styles.duoList}>
                  {DO_NOT_LIST.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Callout label="golden rule">never guess when you can ask.</Callout>
          </Section>

          <Section
            id="kit-objections"
            num="10 / handling objections"
            title={
              <>
                when they
                <br />
                push back.
              </>
            }
          >
            {OBJECTIONS.map((o) => (
              <div className={styles.pitch} key={o.q}>
                <span className={styles.pitchLabel}>{o.q}</span>
                <p className={styles.copy}>{o.a}</p>
              </div>
            ))}
            <p className={styles.quote}>
              you cannot promise <span>price.</span>
              <br />
              you can promise an answer.
            </p>
          </Section>

          <Section
            id="kit-marketing"
            num="11 / marketing & brand"
            title={
              <>
                marketing
                <br />
                &amp; brand<span>.</span>
              </>
            }
          >
            <p className={styles.copy}>
              Partners are encouraged to promote the tours through their local
              market, personal and professional networks, communities and
              appropriate digital channels. Partners may operate from any
              country or market.
            </p>
            <Subhead>You may use</Subhead>
            <InlineList items={MARKETING_CHANNELS} />
            <p className={styles.copy}>
              The Himalayan Ramble will provide approved promotional material
              wherever applicable.
            </p>
            <Subhead>Please ensure</Subhead>
            <Steps items={MARKETING_ENSURE} />
            <BigLineP>
              protecting the reputation of the himalayan ramble is a shared
              responsibility.
            </BigLineP>
          </Section>

          <Section
            id="kit-data"
            num="12 / data, privacy & partner terms"
            title={
              <>
                customer
                <br />
                data<span>.</span>
              </>
            }
          >
            <p className={styles.copy}>
              Customer information must be handled responsibly.
            </p>
            <Subhead>Do not publicly share or misuse</Subhead>
            <InlineList items={DO_NOT_SHARE} />
            <p className={styles.copy}>
              Customer information should only be shared with authorised people
              involved in arranging the customer's travel.
            </p>
            <Callout label="keep it inside the business">
              it does not leave the business.
            </Callout>
            <Subhead>Partner terms</Subhead>
            <Steps items={PARTNER_TERMS} />
            <p className={styles.copy}>
              Partners must use official pricing and approved company
              information, and must not make unauthorised promises, discounts or
              commitments to customers. Commission is applicable only to
              eligible confirmed bookings. Customer acquisition, local marketing
              and related expenses are the responsibility of the partner unless
              otherwise agreed. Continuation of the partnership is
              performance-based.
            </p>
          </Section>
        </Part>

        {/* ---------------------------------------------------------- */}
        {/* 02 — MANALI WINTER CIRCUIT                                 */}
        {/* ---------------------------------------------------------- */}
        <Part id="manali-circuit" num="02" name="Manali Winter Circuit">
          <header className={styles.cover}>
            <div className={styles.topbar}>
              <span>The Himalayan Ramble</span>
              <span>16-page package document</span>
            </div>
            <p className={styles.kicker}>international winter departure</p>
            <h1 className={styles.coverTitle}>
              <span>Manali</span>
              <span>Winter</span>
              <span className={styles.accent}>Circuit</span>
            </h1>
            <div className={styles.rate}>
              <span className={styles.eyebrow}>8 days / 7 nights</span>
              <strong>Delhi / Agra / Shimla / Manali / Delhi</strong>
            </div>
            <div className={styles.priceRow}>
              <span>starting from</span>
              <b>US$500</b>
              <span>per person</span>
            </div>
            <p className={styles.lead}>
              Double sharing bed &amp; breakfast, mix of 3/4-star and boutique
              properties, private vehicle throughout.
            </p>
            <Statement>
              snow you can drive to
              <br />
              <em>no trekking required</em>
            </Statement>
          </header>

          <Section
            id="m-overview"
            num="01 / overview"
            title={
              <>
                plains
                <br />
                to
                <br />
                <span>snow line</span>
              </>
            }
          >
            <p className={`${styles.copy} ${styles.eyebrow}`}>
              from the plains to the snow line
            </p>
            <div className={styles.copy}>
              <p>
                Eight days from the plains of the Mughal Empire to the snow
                line. Begin at the Taj Mahal and Agra Fort, travel overnight
                into the foothills at Shimla, then head north to Manali, the
                last major town before the route crosses into Lahaul.
              </p>
              <p>
                Experience open snow at Sissu, fly above Solang Valley, and walk
                through cedar forest beside the Beas River. Every stage of the
                route is road-accessible.
              </p>
            </div>
            <Facts items={MANALI_FACTS} />
          </Section>

          <Section
            id="m-route"
            num="02 / route"
            title={
              <>
                one route
                <br />
                five
                <br />
                <span>destinations</span>
              </>
            }
          >
            <div className={styles.route}>
              {ROUTE.map(([place, text], i) => (
                <div className={styles.routeRow} key={`${place}-${i}`}>
                  <b>{place}</b>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <Statement>
              one private vehicle
              <br />
              <em>throughout all 8 days</em>
            </Statement>
          </Section>

          <Section
            id="m-itinerary"
            num="03 / itinerary"
            title={
              <>
                day by day<span>.</span>
              </>
            }
          >
            {ITINERARY.map((block) => (
              <div className={styles.itinBlock} key={block.kicker}>
                <div className={styles.sectionNum}>{block.kicker}</div>
                <h3 className={styles.itinTitle}>{block.title}</h3>
                {block.days.map((day) => (
                  <div className={styles.day} key={day.name}>
                    <h4 className={styles.dayTitle}>{day.name}</h4>
                    <p>{day.desc}</p>
                    <div className={styles.tags}>{day.tags}</div>
                  </div>
                ))}
              </div>
            ))}
          </Section>

          <Section
            id="m-departures"
            num="04 / departures"
            title={
              <>
                book your
                <br />
                <span>departure</span>
              </>
            }
          >
            <div className={styles.dates}>
              {DEPARTURES.map(([n, d]) => (
                <div className={styles.datesRow} key={n}>
                  <span>{n}</span>
                  <b>{d}</b>
                </div>
              ))}
            </div>
            <p className={`${styles.note} ${styles.muted}`} style={{ marginTop: "16px" }}>
              Departures are fixed. Pricing is quoted against the selected
              departure. Changes to dates, occupancy or hotel category reopen
              the quotation.
            </p>
          </Section>

          <Section
            id="m-inclusions"
            num="05 / what you get"
            title={
              <>
                included<span>.</span>
              </>
            }
          >
            <ol className={styles.docList}>
              {INCLUSIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <Statement>
              <em>
                no surprise charges during the journey
                <br />
                ระหว่างการเดินทาง
              </em>
            </Statement>
          </Section>

          <Section
            id="m-exclusions"
            num="06 / what you pay separately"
            title={
              <>
                not
                <br />
                included<span>.</span>
              </>
            }
          >
            <ol className={styles.docList}>
              {EXCLUSIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Section>

          <Section
            id="m-price"
            num="07 / price & payment"
            title={
              <>
                price
                <br />
                <span>&amp; payment</span>
              </>
            }
          >
            <div className={styles.money}>
              <span>starting from per person double sharing</span>
              <b>US$500</b>
            </div>
            <p className={styles.copy}>
              Price is per person on double sharing, based on the confirmed
              number of travellers and room configuration, and tied to the
              selected departure. Hotels are a mix of 3- and 4-star properties,
              with the confirmed hotel category for each night provided at
              booking.
            </p>
            <Subhead>Payment schedule</Subhead>
            <div className={styles.payGrid}>
              <b>50%</b>
              <span>
                <strong>on booking confirmation</strong>
                <p>
                  The booking is confirmed only once this deposit is received.
                  Until then, rooms and vehicle availability are not held.
                </p>
              </span>
              <b>50%</b>
              <span>
                <strong>one week before departure</strong>
                <p>
                  Pay the full balance no later than one week before departure.
                  Failure to pay by the deadline may result in cancellation
                  without further notice.
                </p>
              </span>
            </div>
          </Section>

          <Section
            id="m-cancellation"
            num="08 / cancellation"
            title={
              <>
                the later you cancel
                <br />
                <span>the higher the cost</span>
              </>
            }
          >
            {MANALI_CANCEL.map(([b, s]) => (
              <div className={styles.cancelRow} key={b}>
                <b>{b}</b>
                <span>{s}</span>
              </div>
            ))}
            <Statement>
              <em>30% of the deposit is non-refundable</em>
            </Statement>
          </Section>

          <Section
            id="m-why"
            num="09 / why the policy tightens"
            title={
              <>
                slot
                <br />
                window
                <br />
                <span>closes.</span>
              </>
            }
          >
            <div className={styles.copy}>
              <p>
                The balance is due one week before departure, so the package's
                costs are committed by that point. Room allocations in Shimla
                and Manali are released and paid, the vehicle is contracted for
                eight days, and slots for monuments and activities are booked in
                your name.
              </p>
              <p>
                After that point, those costs cannot be recovered. Early
                cancellation costs little. Late cancellation can cost the full
                package.
              </p>
            </div>
            <RuleBox>
              Cancellation must be submitted in writing. The date we receive the
              notice is the date used to apply the policy.
            </RuleBox>
          </Section>

          <Section
            id="m-terms"
            num="10 / terms & conditions"
            title={
              <>
                to <span>book.</span>
              </>
            }
          >
            <Terms rows={MANALI_TERMS_1} />
            <Subhead>During the journey</Subhead>
            <Terms rows={MANALI_TERMS_2} />
          </Section>

          <Section
            id="m-book"
            num="11 / book this trip"
            title={
              <>
                your
                <br />
                <span>himalayan</span>
                <br />
                journey.
              </>
            }
          >
            <p className={styles.copy} style={{ marginTop: "20px" }}>
              Approved by the Department of Tourism, Himachal Pradesh, and the
              Ministry of Tourism, Government of India. Operating Himalayan
              travel in India since 2000.
            </p>
            <Statement>
              snow you can drive to
              <br />
              <em>no trekking required</em>
            </Statement>
          </Section>
        </Part>

        {/* ---------------------------------------------------------- */}
        {/* 03 — COMMISSION & CANCELLATION POLICY                      */}
        {/* ---------------------------------------------------------- */}
        <Part
          id="commission-policy"
          num="03"
          name="Commission & Cancellation Policy"
        >
          <header className={styles.cover}>
            <div className={styles.topbar}>
              <span>The Himalayan Ramble</span>
              <span>International Partner Program</span>
            </div>
            <p className={styles.kicker}>commission &amp; cancellation policy</p>
            <h1 className={styles.coverTitle}>
              <span>Partner</span>
              <span className={styles.accent}>Commission</span>
              <span>&amp; Cancellation.</span>
            </h1>
            <p className={styles.lead}>
              The Partner Kit explains how commission is earned. This document
              explains what happens to commission when a booking changes,
              shrinks or cancels.
            </p>
            <Statement>
              commission is paid at the
              <br />
              <em>non-refundable point.</em>
            </Statement>
            <p className={styles.copy}>
              For the current program, that point is one week before departure,
              when the balance is due in full and the booking is no longer
              refundable under the standard customer policy.
            </p>
            <p className={styles.note}>
              internal partner document / not for public distribution
            </p>
          </header>

          <Section
            id="c01"
            num="C01 / what is paid"
            title={
              <>
                confirmed
                <br />
                <span>travellers.</span>
              </>
            }
          >
            <div className={styles.copy}>
              <p>
                Commission is paid on confirmed travellers only. Leads,
                enquiries and quotations do not qualify.
              </p>
              <p>
                A traveller becomes confirmed when the required advance has been
                received and written confirmation has been issued.
              </p>
            </div>
            <RuleBox label="eligible booking value">
              Package value received by The Himalayan Ramble, excluding
              applicable taxes/GST and third-party costs booked at cost. Ground
              extras and chargeable items do not earn commission.
            </RuleBox>
          </Section>

          <Section
            id="c02"
            num="C02 / commission tiers"
            title={
              <>
                bring
                <br />
                travellers.
                <br />
                <span>earn.</span>
              </>
            }
          >
            <p className={styles.copy}>
              The commission rate is determined by the total number of confirmed
              travellers brought by the partner during each calendar month.
            </p>
            <Tier rows={COMMISSION_TIERS} />
            <Warning label="monthly tier ≠ monthly target.">
              There is no minimum monthly confirmed-traveller requirement. The
              tier only determines the commission rate.
            </Warning>
          </Section>

          <Section
            id="c03"
            num="C03 / tier jump"
            title={
              <>
                the tier
                <br />
                <span>moves up.</span>
              </>
            }
          >
            <Steps items={COMMISSION_TIER_JUMP} />
            <Statement>
              the higher tier applies to the total eligible business
              <br />
              <em>for that month.</em>
            </Statement>
          </Section>

          <Section
            id="c04"
            num="C04 / slot standard"
            title={
              <>
                fill
                <br />
                <span>the slot.</span>
              </>
            }
          >
            <div className={styles.copy}>
              <p>
                There is no minimum number of confirmed travellers per month.
                Each fixed departure is a separate slot, and partners are
                expected to work toward filling the relevant slot.
              </p>
            </div>
            <Facts items={SLOT_FACTS} />
            <div className={styles.copy}>
              <p>
                A slot is considered filled when it reaches the required group
                size for that product. This is a performance standard, not an
                automatic cancellation or penalty mechanism.
              </p>
              <p>
                Commission continues to follow the monthly tier structure
                independently.
              </p>
            </div>
          </Section>

          <Section
            id="c05"
            num="C05 / three-month performance path"
            title={
              <>
                prove
                <br />
                performance.
                <br />
                <span>grow.</span>
              </>
            }
          >
            <p className={styles.copy}>
              The initial partnership period is three months on a commission
              basis. It is designed to demonstrate that the partner can find
              customers, build groups, contribute to filling departure slots
              and convert opportunities into real confirmed travellers.
            </p>
            <div className={styles.heroNumber}>
              50+
              <small>
                confirmed travellers across the initial three-month period
              </small>
            </div>
            <p className={styles.copy}>
              The 50+ figure is counted individually across the full three-month
              period. It is <strong>not</strong> a monthly minimum.
            </p>
            <Steps items={PERFORMANCE_STEPS} />
          </Section>

          <Section
            id="c06"
            num="C06 / full-time opportunity"
            title={
              <>
                the next
                <br />
                <span>step.</span>
              </>
            }
          >
            <p className={styles.copy}>
              If a partner successfully demonstrates the required performance and
              can credibly continue delivering results for future tours with the
              same consistency and efficiency, The Himalayan Ramble may offer a{" "}
              <strong>full-time position with salary</strong>.
            </p>
            <RuleBox>
              Three months does not automatically create a full-time position.
              Any transition depends on performance, consistency, slot-filling
              ability, confirmed travellers, future potential, business
              requirements and mutual agreement.
            </RuleBox>
          </Section>

          <Section
            id="c07"
            num="C07 / payout"
            title={
              <>
                when
                <br />
                commission
                <br />
                <span>is paid.</span>
              </>
            }
          >
            <p className={styles.copy}>
              Commission is released when a booking passes its non-refundable
              point, currently one week before departure. It is not held until
              the tour is completed.
            </p>
            <Facts items={PAYOUT_FACTS} />
          </Section>

          <Section
            id="c08"
            num="C08 / customer cancellation"
            title={
              <>
                when the
                <br />
                customer
                <br />
                <span>cancels.</span>
              </>
            }
          >
            {CUSTOMER_CANCEL.map(([b, s]) => (
              <div className={styles.cancelRow} key={b}>
                <b>{b}</b>
                <span>{s}</span>
              </div>
            ))}
            <RuleBox>
              Cancellation must be submitted in writing. The date THR receives
              the notice is the date used to apply the policy.
            </RuleBox>
          </Section>

          <Section
            id="c09"
            num="C09 / effect on commission"
            title={
              <>
                when the
                <br />
                booking
                <br />
                <span>shrinks.</span>
              </>
            }
          >
            <Terms rows={SHRINK_TERMS} />
          </Section>

          <Section
            id="c10"
            num="C10 / edge cases & records"
            title={
              <>
                keep the
                <br />
                <span>numbers clean.</span>
              </>
            }
          >
            <Terms rows={EDGE_TERMS} />
          </Section>

          <Section
            id="c11"
            num="C11 / three measures"
            title={
              <>
                do not
                <br />
                mix the
                <br />
                <span>numbers.</span>
              </>
            }
          >
            <Facts items={THREE_MEASURES} />
            <Statement>
              no monthly minimum → fill slots → 50+ in 3 months → prove
              consistency → <em>full-time opportunity.</em>
            </Statement>
          </Section>

          <Section
            id="c-final"
            num="final / contact"
            title={
              <>
                let's
                <br />
                <span>build it.</span>
              </>
            }
          >
            <p className={styles.copy}>
              The commission period is the starting point. The objective is to
              build a reliable international partner network that consistently
              brings genuine travellers to professionally organised Himalayan
              journeys. Get in touch to start yours.
            </p>
            <div className={styles.contact}>
              <div className={styles.contactRole}>operations manager</div>
              <div className={styles.contactName}>anshul thakur</div>
              <div className={styles.contactList}>
                {MANALI_CONTACT.map(([label, value]) => (
                  <div className={styles.contactRow} key={label}>
                    <b>{label}</b>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.contactFooter}>
                Send your CV or resume, or contact the Operations Manager for
                further information. thehimalayanramble.com
              </div>
            </div>
            <Statement>
              you bring the <em>customers.</em>
              <br />
              we create the journey.
            </Statement>
            <p className={`${styles.note} ${styles.muted}`}>
              The Himalayan Ramble · International Partner Program · Commission
              &amp; Cancellation Policy
            </p>
          </Section>
        </Part>
      </div>
    </main>
  );
}

function BigLineP({ children }: { children: ReactNode }) {
  return <p className={styles.bigline}>{children}</p>;
}