import React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import DarkTheme from "./themes/dark";

export default ({ element }) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={DarkTheme}>{element}</ThemeProvider>
  </StylesProvider>
);
