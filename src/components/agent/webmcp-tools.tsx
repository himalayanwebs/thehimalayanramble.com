import { CONTACT, NAV_REGIONS } from "@/data/nav";

const SITE_URL = "https://thehimalayanramble.com";

const DESTINATION_INDEX = NAV_REGIONS.flatMap((region) => [
  {
    name: region.name,
    url: `${SITE_URL}/${region.slug}/`,
    type: "region",
  },
  ...region.places.map((place) => ({
    name: place.name,
    url: `${SITE_URL}/${region.slug}/${place.slug}/`,
    type: "place",
    region: region.name,
  })),
]);

const CONTACT_DETAILS = {
  phone: CONTACT.phone,
  phoneHref: CONTACT.phoneHref,
  whatsappHref: CONTACT.whatsappHref,
  email: CONTACT.email,
  address: CONTACT.address,
  hours: CONTACT.hours,
  approvals: [
    "Department of Tourism, Himachal Pradesh",
    "Ministry of Tourism, Government of India",
  ],
};

function serialize(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function WebMcpTools() {
  const data = serialize({
    siteUrl: SITE_URL,
    destinations: DESTINATION_INDEX,
    contact: CONTACT_DETAILS,
  });

  const script = `(function () {
  "use strict";
  var data = ${data};
  var registered = false;

  function text(value) {
    return { content: [{ type: "text", text: JSON.stringify(value) }] };
  }

  function searchDestinations(query) {
    var needle = String(query || "").trim().toLowerCase();
    if (!needle) return [];
    return data.destinations.filter(function (destination) {
      return destination.name.toLowerCase().indexOf(needle) !== -1;
    }).slice(0, 12);
  }

  var tools = [
    {
      name: "search_destinations",
      description: "Search The Himalayan Ramble's regions and destinations by name, for example Spiti, Ladakh, or Shimla. Read-only.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Region or place name to search for."
          }
        },
        required: ["query"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: true },
      execute: function (input) {
        return text({ results: searchDestinations(input && input.query) });
      }
    },
    {
      name: "get_contact_details",
      description: "Return The Himalayan Ramble's phone, WhatsApp link, email, office address, hours, and approvals. Read-only.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false
      },
      annotations: { readOnlyHint: true },
      execute: function () {
        return text(data.contact);
      }
    },
    {
      name: "build_trip_enquiry_url",
      description: "Build a contact-page URL prefilled with a destination so the user can start a trip enquiry. Read-only; it does not submit the form or make a booking.",
      inputSchema: {
        type: "object",
        properties: {
          destination: {
            type: "string",
            description: "Optional destination name to prefill, for example Spiti or Ladakh."
          }
        },
        additionalProperties: false
      },
      annotations: { readOnlyHint: true },
      execute: function (input) {
        var params = new URLSearchParams();
        var destination = input && input.destination;
        if (typeof destination === "string" && destination.trim()) {
          params.set("destination", destination.trim());
        }
        var query = params.toString();
        return text({
          url: data.siteUrl + "/contact/" + (query ? "?" + query : ""),
          note: "The contact form replies within one business day. No booking or payment happens on the website."
        });
      }
    }
  ];

  function register() {
    if (registered) return;
    var modelContext = document.modelContext || navigator.modelContext;
    if (!modelContext) return;

    if (typeof modelContext.registerTool === "function") {
      var controller = new AbortController();
      var registeredAny = false;
      for (var i = 0; i < tools.length; i++) {
        try {
          var result = modelContext.registerTool(tools[i], { signal: controller.signal });
          registeredAny = true;
          if (result && typeof result.catch === "function") result.catch(function () {});
        } catch (error) {}
      }
      if (registeredAny) {
        registered = true;
        window.addEventListener("pagehide", function () {
          controller.abort();
        }, { once: true });
        return;
      }
    }

    if (typeof modelContext.provideContext === "function") {
      try {
        modelContext.provideContext({ tools: tools });
        registered = true;
      } catch (error) {}
    }
  }

  register();
  if (!registered) {
    window.addEventListener("DOMContentLoaded", register, { once: true });
    window.addEventListener("load", register, { once: true });
  }
})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
