import * as React from "react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"

import DarkTheme from "./theme/dark"

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <div>Hello World</div>
    </ThemeProvider>
  )
}

export default App
