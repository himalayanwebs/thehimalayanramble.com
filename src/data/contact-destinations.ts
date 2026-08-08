// Hand-curated to match legacy contact.html's <select id="destination">
// exactly — NOT derived from the full region/place data, because most
// places (everything outside Himachal + Zanskar) only get a region-level
// entry there. See PlaceData.destinationValue / RegionData.cta.destinationValue.
export const DESTINATION_GROUPS: { label: string; options: string[] }[] = [
  {
    label: "Himachal Pradesh",
    options: ["Shimla", "Manali", "Spiti", "Kinnaur", "Kullu"],
  },
  {
    label: "Other Regions",
    options: [
      "Ladakh",
      "Zanskar",
      "Jammu & Kashmir",
      "Uttarakhand",
      "Sikkim",
      "Delhi",
      "Chandigarh",
    ],
  },
];

export const DESTINATION_NOT_SURE = "Not sure yet";
