import React from "react";
import styled from "styled-components";
import { CssBaseline } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { DateTime } from "luxon";

import Autocomplete from "../components/Autocomplete";
import Map from "../components/Map";
import Box from "../components/Box";
import { CityData } from "../data/city-data";

const MapContainer = styled.div`
  overflow: hidden;

  padding-top: 24px;
  height: 50%;
  width: 100%;
`;

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Separator = styled.div`
  background-color: #d9e2ec;
  height: 1px;
  width: 100%;
`;

const CountryContainer = styled.div`
  position: relative;
`;

const AutocompleteWrapper = styled.div`
  position: relative;
  top: -50%;
  left: 50%;
`;

const Header = styled.h1`
  color: #f0f4f8;
  text-align: center;
`;

const Centered = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Content = styled.div`
  padding: 8px 24px;
`;

export default function Home() {
  const [value, setValue] = React.useState<CityData | null>(null);

  const [localTime, setLocalTime] = React.useState(DateTime.local());

  React.useEffect(() => {
    // setInterval(() => {
    //   setLocalTime(DateTime.local());
    // }, 1000);
  }, []);

  const onChange = (_, value) => {
    console.log("value: ", value);
    setValue(value);
  };

  console.log("value: ", value);

  return (
    <PageContainer>
      <CssBaseline />
      <Centered>
        <Box>
          <Typography variant="h5" style={{ padding: "0 8px" }}>
            {DateTime.local().toFormat("h:mm:ss a ZZZZZ")}
          </Typography>
        </Box>
        <Box style={{ marginTop: 24 }}>
          <Content>
            <Typography
              variant="h5"
              style={{
                marginBottom: 16,
                padding: "0 8px",
                textAlign: "center",
              }}
            >
              What time is it there?
            </Typography>
            <Autocomplete onChange={onChange} value={value} />
            <Typography variant="h5" style={{ margin: "16px 0" }}>
              {value &&
                DateTime.local()
                  .setZone(value.timezone)
                  .toFormat("h:mm:ss a ZZZZZ")}
            </Typography>
          </Content>
        </Box>
      </Centered>
      <Map />
    </PageContainer>
  );
}
