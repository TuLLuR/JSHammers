const electron = require('electron');
const application = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow;

application.on('ready', function () {
windowSettings = {
  width: 1024,
  height: 720,
  frame: false,
  resizable: false
};

var mainWindow = new BrowserWindow(windowSettings);
mainWindow.setMenuBarVisibility(false);
mainWindow.loadURL(`file://${__dirname}/index.html`);

mainWindow.on('closed', function () {
  mainWindow = null;
})

});
