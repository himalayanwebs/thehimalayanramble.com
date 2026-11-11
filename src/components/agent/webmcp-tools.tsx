"use client";

import { useEffect } from "react";
import { CONTACT, NAV_REGIONS } from "@/data/nav";

type JsonSchemaProperty = {
  type: string;
  description?: string;
  enum?: string[];
};

type JsonSchema = {
  type: "object";
  properties?: Record<string, JsonSchemaProperty>;
  required?: string[];
  additionalProperties?: boolean;
};

type ToolResult = {
  content: { type: "text"; text: string }[];
};

type ToolAnnotations = {
  readOnlyHint?: boolean;
  untrustedContentHint?: boolean;
  consequentialHint?: boolean;
  debugging?: boolean;
};

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: JsonSchema;
  annotations?: ToolAnnotations;
  execute: (input: Record<string, unknown>) => ToolResult | Promise<ToolResult>;
};

type ModelContextLike = {
  registerTool?: (
    tool: WebMcpTool,
    options?: { signal?: AbortSignal }
  ) => Promise<unknown> | void;
  provideContext?: (context: { tools: WebMcpTool[] }) => void;
};

declare global {
  interface Document {
    modelContext?: ModelContextLike;
  }

  interface Navigator {
    modelContext?: ModelContextLike;
  }
}

const SITE_URL = "https://thehimalayanramble.com";

const DESTINATION_INDEX = NAV_REGIONS.flatMap((region) => [
  {
    name: region.name,
    url: `${SITE_URL}/${region.slug}/`,
    type: "region" as const,
  },
  ...region.places.map((place) => ({
    name: place.name,
    url: `${SITE_URL}/${region.slug}/${place.slug}/`,
    type: "place" as const,
    region: region.name,
  })),
]);

function searchDestinations(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  return DESTINATION_INDEX.filter((destination) =>
    destination.name.toLowerCase().includes(needle)
  ).slice(0, 12);
}

function toolResult(value: unknown): ToolResult {
  return { content: [{ type: "text", text: JSON.stringify(value) }] };
}

const TOOLS: WebMcpTool[] = [
  {
    name: "search_destinations",
    description:
      "Search The Himalayan Ramble's regions and destinations by name, for example Spiti, Ladakh, or Shimla. Read-only.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Region or place name to search for.",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true },
    execute: (input) => {
      const query = typeof input.query === "string" ? input.query : "";
      return toolResult({ results: searchDestinations(query) });
    },
  },
  {
    name: "get_contact_details",
    description:
      "Return The Himalayan Ramble's phone, WhatsApp link, email, office address, hours, and approvals. Read-only.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true },
    execute: () =>
      toolResult({
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
      }),
  },
  {
    name: "build_trip_enquiry_url",
    description:
      "Build a contact-page URL prefilled with a destination so the user can start a trip enquiry. Read-only; it does not submit the form or make a booking.",
    inputSchema: {
      type: "object",
      properties: {
        destination: {
          type: "string",
          description: "Optional destination name to prefill, for example Spiti or Ladakh.",
        },
      },
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true },
    execute: (input) => {
      const params = new URLSearchParams();
      if (typeof input.destination === "string" && input.destination.trim()) {
        params.set("destination", input.destination.trim());
      }
      const query = params.toString();
      return toolResult({
        url: `${SITE_URL}/contact/${query ? `?${query}` : ""}`,
        note: "The contact form replies within one business day. No booking or payment happens on the website.",
      });
    },
  },
];

export function WebMcpTools() {
  useEffect(() => {
    const modelContext = document.modelContext ?? navigator.modelContext;
    if (!modelContext) return;

    if (typeof modelContext.registerTool === "function") {
      const controller = new AbortController();
      for (const tool of TOOLS) {
        Promise.resolve(
          modelContext.registerTool(tool, { signal: controller.signal })
        ).catch(() => {});
      }
      return () => controller.abort();
    }

    if (typeof modelContext.provideContext === "function") {
      modelContext.provideContext({ tools: TOOLS });
    }
  }, []);

  return null;
}
