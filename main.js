// 'use strict';

const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const {ipcMain} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
// let page1
// let page2

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: false
  })
  // page1 = new BrowserWindow({
  //   width: 800,
  //   height: 600,
  //   fullscreen: false
  // })
  // page2 = new BrowserWindow({
  //   width: 800,
  //   height: 600,
  //   fullscreen: false
  // })

  // and load the index.html of the app.
  // mainWindow.loadURL(`file://${__dirname}/index.html`)
  // page1.loadURL(`file://${__dirname}/page1.html`)
  // page2.loadURL(`file://${__dirname}/page2.html`)

  // page1.hide();  
  // page2.hide();  
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  ipcMain.on('get-config-file', (event, arg) => {
    var file = './home/configure.json';
    event.returnValue = file;
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.