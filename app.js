const {app, dialog, BrowserWindow, Tray, Menu} = require('electron');
const fs = require('fs');
const path = require('path');
const url = require('url');
const version = require('./package.json').version;

// electron context menu
require('electron-context-menu')({
	prepend: (params, browserWindow) => []
});

let win;

function createWindow() {

  win = new BrowserWindow({
    name: `League of legends client | version ${version}`,
    width: 1280,
    height: 720,
    // app icon
    icon: path.join(__dirname, 'assets/icons/app.png')
   });

  app.on('window-all-closed', () => {
    app.quit();
  });

  app.on('open-file', (event, file) => {
    var content = fs.readFileSync(file).toString();
    win.webContents.send('file-opened', file, content);
  });

  // load index.html
  win.loadURL(url.format({
    pathname: path.resolve(__dirname, 'assets/login.html'),
    protocol: 'file:',
    slashes: true
    }));

  win.setMenu(null);

}

app.on('ready', createWindow);
