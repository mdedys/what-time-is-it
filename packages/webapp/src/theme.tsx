import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import LightTheme from "./themes/light";

export default ({ element }) => (
  <StylesProvider>
    <ThemeProvider theme={LightTheme}>
      <StyledThemeProvider theme={LightTheme}>{element}</StyledThemeProvider>
    </ThemeProvider>
  </StylesProvider>
);
