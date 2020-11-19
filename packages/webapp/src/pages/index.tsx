import React from "react";
import styled from "styled-components";
import { CssBaseline, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { DateTime } from "luxon";

import Autocomplete from "../components/Autocomplete";
import Box from "../components/Box";
import GithubLink from "../components/GithubLink";
import Map from "../components/Map";
import TheTime from "../components/TheTime";
import SEO from "../components/SEO";
import { CityData } from "../data/city-data";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const GithubLinkContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const Footer = styled.div`
  align-items: center;
  box-shadow: ${(props) => props.theme.shadows[10]};
  display: flex;
  justify-content: center;
  height: 32px;
  width: 100%;
`;

const Centered = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  min-width: 300px;
`;

const Content = styled.div`
  padding: 8px 24px;
`;

const AutocompleteContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
`;

export default function Home() {
  const theme = useTheme();
  const [value, setValue] = React.useState<CityData | null>(null);
  const [localTime, setLocalTime] = React.useState(DateTime.local());

  React.useEffect(() => {
    setInterval(() => {
      setLocalTime(DateTime.local());
    }, 1000);
  }, []);

  const onChange = (_, value) => {
    setValue(value);
  };

  return (
    <>
      <SEO />
      <PageContainer>
        <CssBaseline />
        <GithubLinkContainer>
          <GithubLink />
        </GithubLinkContainer>
        <Centered>
          <Box>
            <TheTime datetime={localTime} />
          </Box>
          <Box style={{ marginTop: 24 }}>
            <Content>
              <Typography
                variant="h6"
                style={{
                  padding: "0 8px",
                  textAlign: "center",
                }}
              >
                What time is it there?
              </Typography>
              <AutocompleteContainer>
                <Autocomplete onChange={onChange} value={value} />
              </AutocompleteContainer>
              {value && (
                <TheTime datetime={localTime.setZone(value.timezone)} />
              )}
            </Content>
          </Box>
        </Centered>
        <Map />
        <Footer style={{ backgroundColor: theme.palette.primary.main }}>
          <Typography
            variant="caption"
            style={{ color: theme.palette.common.white }}
          >
            Built with love by{" "}
            <Link
              href="https://github.com/mdedys"
              target="_blank"
              color="inherit"
            >
              mdedys
            </Link>{" "}
            using{" "}
            <Link
              href="https://www.gatsbyjs.com/"
              target="_blank"
              color="inherit"
            >
              Gatsby
            </Link>
          </Typography>
        </Footer>
      </PageContainer>
    </>
  );
}
