import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import CookieConsent from "react-cookie-consent";

import LightTheme from "./themes/light";

export default ({ element }) => (
  <StylesProvider>
    <ThemeProvider theme={LightTheme}>
      <StyledThemeProvider theme={LightTheme}>
        <CookieConsent
          enableDeclineButton
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-tagmanager"
          style={{
            background: "#fafafa",
            color: "#000",
            borderTop: "1px solid #486581",
          }}
          buttonStyle={{
            backgroundColor: "#87eaf2",
            color: "#486581",
            borderRadius: 4,
          }}
          declineButtonStyle={{
            backgroundColor: "#f44336",
            borderRadius: 4,
          }}
        >
          <p>
            This website stores cookies on your computer. These cookies are used
            to collect information about how you interact with this website.
          </p>
          <p>
            We use this information in order to improve and customize your
            browsing experience and for analytics and metrics about our visitors
            on this website.
          </p>
          <p>
            If you decline, your information won’t be tracked when you visit
            this website. A single cookie will be used in your browser to
            remember your preference not to be tracked.
          </p>
        </CookieConsent>
        {element}
      </StyledThemeProvider>
    </ThemeProvider>
  </StylesProvider>
);
