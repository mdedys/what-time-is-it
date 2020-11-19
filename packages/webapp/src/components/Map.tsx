import { useTheme } from "@material-ui/core";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Point,
} from "react-simple-maps";

import Data, { CityData } from "../data/city-data";

const cache: string[] = [];

const capitals = Data.capitals();
const dataLength = capitals.length;

function isInCache(city: string): boolean {
  return (
    cache.findIndex((c: string) => c.toLowerCase() === city.toLowerCase()) !==
    -1
  );
}

function addToCache(city: string) {
  if (city.length === 5) {
    cache.shift();
  }
  cache.push(city);
}

function getCapital(): CityData {
  let city: CityData | null = null;
  let capital: string | null = null;

  let circuitBreaker = 0;
  while (!capital && circuitBreaker <= 20) {
    const idx = Math.floor(Math.random() * dataLength);
    const next = capitals[idx];

    const nextCity = Data.lookup(`${next.city}::${next.country}`);
    if (nextCity && !isInCache(next.city)) {
      city = nextCity;
      capital = next.city;
      break;
    }
    circuitBreaker++;
  }

  if (!capital || !city) return Data.lookup("toronto")!;
  addToCache(capital);
  return city;
}

export default React.memo(function Map() {
  const theme = useTheme();

  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number>(500);
  const [width, setWidth] = React.useState<number>(500);
  const [capital, setCapital] = React.useState<CityData>(getCapital());

  React.useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [ref.current]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCapital(getCapital());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const marker = {
    markerOffset: -15,
    name: capital?.city,
    country: capital?.country,
    coordinates: [capital?.lng || 0, capital?.lat || 0] as Point,
  };

  return (
    <ComposableMap
      height={height}
      width={width}
      projection="geoEqualEarth"
      projectionConfig={{ scale: 250, center: [25, 7] }}
    >
      <Geographies
        geography={
          "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
        }
      >
        {({ geographies }) =>
          geographies.map((geo) => {
            const fill =
              geo.properties?.NAME?.toLowerCase() ===
              marker.country?.toLowerCase()
                ? theme.palette.primary.light
                : theme.palette.background.default;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fill}
                stroke={theme.palette.primary.main}
              />
            );
          })
        }
      </Geographies>
      <Marker coordinates={marker.coordinates}>
        <circle r={6} fill={theme.palette.warning.light} />
      </Marker>
    </ComposableMap>
  );
});
