import RawData from "city-timezones/data/cityMap.json";

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

const data = RawData as CityData[];

/**
 * Return cities as an array of strings
 */
function getCities() {
  return data.sort((c1, c2) => c1.city.localeCompare(c2.city));
}

export default {
  getCities,
};
