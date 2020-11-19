import RawData from "city-timezones/data/cityMap.json";
import CountryCapitals from "country-json/src/country-by-capital-city.json";

export interface CountryCapital {
  country: string;
  city: string;
}

export interface CityData {
  readonly lat: number;
  readonly lng: number;
  readonly pop: number;
  readonly city: string;
  readonly iso2: string;
  readonly iso3: string;
  readonly country: string;
  readonly timezone: string;
  readonly province: string;
  readonly exactCity: string;
  readonly city_ascii: string;
  readonly state_ansi: string;
  readonly exactProvince: string;
}

export interface CityLookupMap {
  [city: string]: CityData;
}

const data = (RawData as CityData[]).sort((c1, c2) =>
  c1.city.localeCompare(c2.city)
);

const map = data.reduce<CityLookupMap>((map, record) => {
  map[
    `${record.city_ascii.toLowerCase()}::${record.country.toLowerCase()}`
  ] = record;
  return map;
}, {});

/**
 * Return cities as an array of strings
 */
function get() {
  return data;
}

/**
 * Find city in CityLookupMap
 * @param city Name of city to find
 */
function lookup(key: string): CityData | null {
  return map[key.toLowerCase()] || null;
}

/**
 * Get all the capitals in the world
 */
function capitals(): CountryCapital[] {
  return CountryCapitals as CountryCapital[];
}

export default {
  capitals,
  get,
  lookup,
};
