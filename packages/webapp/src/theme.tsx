import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import DarkTheme from "./themes/dark";

export default ({ element }) => (
  <ThemeProvider theme={DarkTheme}>{element}</ThemeProvider>
);
