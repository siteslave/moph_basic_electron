// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// var os = require('os');

// alert('Hell world')
// console.log(os.arch());


const {ipcRenderer} = require('electron')

var configFile = ipcRenderer.sendSync('get-config-file')

console.log(configFile)

