import { useTheme } from "@material-ui/core";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import GEO_URL from "../data/ne_110m_admin_0_countries.json";

export default function Map() {
  const theme = useTheme();

  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number>(window.innerHeight);
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [ref.current]);

  return (
    <div ref={ref} style={{ opacity: 0.5 }}>
      <ComposableMap
        height={height}
        width={width}
        projection="geoEqualEarth"
        projectionConfig={{ scale: 250, center: [25, 7] }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={theme.palette.background.default}
                stroke={theme.palette.primary.main}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
