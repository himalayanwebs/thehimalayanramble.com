// Sections 1–9, ported verbatim from legacy terms.html. Section 10
// ("Contact") is hand-written directly in app/terms/page.tsx instead,
// since it needs real tel:/mailto: links rather than plain text.
export type LegalBlock = { p: string } | { ul: string[] };

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export const LEGAL_UPDATED =
  "Last updated: August 2026. These terms apply to every trip, booking, and enquiry arranged through The Himalayan Ramble, Shimla.";

export const LEGAL_SECTIONS: LegalSection[] = [
  {
    id: "booking",
    title: "1. Booking & Payment",
    blocks: [
      {
        p: "A booking is confirmed once we've discussed your itinerary, agreed the price, and received your advance payment. The advance amount and balance schedule are confirmed in writing (email or WhatsApp) at the time of booking and vary by trip length, season, and group size.",
      },
      {
        p: "Prices quoted cover exactly what's listed as inclusions for your itinerary — accommodation, transport, guides, and permits where applicable. Anything not explicitly listed as included should be assumed excluded.",
      },
    ],
  },
  {
    id: "cancellation",
    title: "2. Cancellation & Refunds",
    blocks: [
      {
        p: "Cancellations must be made in writing. Because accommodation, vehicles, and guides are booked in advance on your behalf, refunds are scaled to how close to departure the cancellation falls:",
      },
      {
        ul: [
          "30+ days before departure: advance payment refundable, less any non-recoverable third-party costs already committed.",
          "15–29 days before departure: partial refund, case by case, once third-party cancellation costs are deducted.",
          "0–14 days before departure, or no-show: generally non-refundable, as accommodation and transport are already committed.",
        ],
      },
      { p: "Where we're able to reassign your booking to another date at no extra cost, we'll offer that first." },
    ],
  },
  {
    id: "itinerary",
    title: "3. Itinerary Changes",
    blocks: [
      {
        p: "Himalayan roads, weather, and permits are unpredictable. We reserve the right to alter routes, accommodation, or the day-by-day order of an itinerary where road closures, landslides, snowfall, political restrictions, or permit issues make the original plan unsafe or unworkable — always aiming to preserve the overall experience and value of the trip.",
      },
    ],
  },
  {
    id: "responsibilities",
    title: "4. Traveler Responsibilities",
    blocks: [
      {
        p: "You're responsible for carrying valid identification, any permits required for restricted areas (Inner Line Permits for parts of Spiti, Kinnaur, and Ladakh, for instance), and for disclosing any medical conditions relevant to high-altitude travel before departure. Please arrive for departures on time — delays caused by a traveler may affect the group's itinerary.",
      },
    ],
  },
  {
    id: "risk",
    title: "5. Adventure Activities & Risk",
    blocks: [
      {
        p: "Trekking, river rafting, winter expeditions, and high-altitude travel carry inherent risk, including altitude sickness, weather exposure, and terrain hazards. We mitigate this with licensed guides, appropriate equipment, and routes matched to your fitness and experience — but we cannot eliminate the risk entirely, and by joining an adventure activity you accept that risk. Guides' safety instructions are final during any activity.",
      },
    ],
  },
  {
    id: "force-majeure",
    title: "6. Force Majeure",
    blocks: [
      {
        p: "We're not liable for delays, changes, or cancellations caused by circumstances outside our reasonable control — extreme weather, landslides and road closures, government restrictions, strikes, or natural disasters. Where possible we'll rework the itinerary or reschedule rather than cancel outright.",
      },
    ],
  },
  {
    id: "insurance",
    title: "7. Travel Insurance",
    blocks: [
      {
        p: "We strongly recommend travel insurance covering trip cancellation, medical emergencies, and high-altitude evacuation for any trek or high-altitude itinerary. Insurance is the traveler's responsibility to arrange.",
      },
    ],
  },
  {
    id: "privacy",
    title: "8. Privacy",
    blocks: [
      {
        p: "Information you share through our contact form or directly with us (name, phone, email, travel plans) is used only to plan and communicate about your trip. We don't sell or share it with third parties beyond what's needed to arrange your bookings (hotels, transport, permit authorities).",
      },
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    blocks: [
      {
        p: "These terms are governed by the laws of India, with courts in Shimla, Himachal Pradesh, having jurisdiction over any dispute arising from a booking with The Himalayan Ramble.",
      },
    ],
  },
];
