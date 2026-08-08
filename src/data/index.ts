import type { PlaceData } from "@/data/schema";
import { REGIONS } from "@/data/regions";
import { himachalPradeshPlaces } from "@/data/places/himachal-pradesh";
import { delhiPlaces } from "@/data/places/delhi";
import { ladakhPlaces } from "@/data/places/ladakh";
import { jammuAndKashmirPlaces } from "@/data/places/jammu-and-kashmir";
import { uttarakhandPlaces } from "@/data/places/uttarakhand";
import { sikkimPlaces } from "@/data/places/sikkim";
import { chandigarhPlaces } from "@/data/places/chandigarh";

// One array per region file, concatenated here — every region now has a
// real data file; this is the complete set (Phase 4 done).
const ALL_PLACES: PlaceData[] = [
  ...himachalPradeshPlaces,
  ...delhiPlaces,
  ...ladakhPlaces,
  ...jammuAndKashmirPlaces,
  ...uttarakhandPlaces,
  ...sikkimPlaces,
  ...chandigarhPlaces,
];

export function getAllRegions() {
  return REGIONS;
}

export function getRegion(slug: string) {
  return REGIONS.find((r) => r.slug === slug);
}

export function getAllPlaces() {
  return ALL_PLACES;
}

export function getPlace(region: string, slug: string) {
  return ALL_PLACES.find((p) => p.region === region && p.slug === slug);
}

export function getPlacesForRegion(region: string) {
  return ALL_PLACES.filter((p) => p.region === region);
}
