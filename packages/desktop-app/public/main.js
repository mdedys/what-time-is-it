const { app, BrowserWindow } = require("electron")
const isDev = require("electron-is-dev")
const path = require("path")

function createWindow() {
  const win = new BrowserWindow({
    width: 768,
    height: 512,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  const url = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "./index.html")}`

  win.loadURL(url)

  if (isDev) {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
