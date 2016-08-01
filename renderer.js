
const {ipcRenderer} = require('electron')

const {remote} = require('electron')
const {Menu, Tray} = remote;

var menuTemplate = [
  {
    label: 'เมนูหลัก',
    submenu: [
      {
        label: 'กำหนดค่า',
        accelerator: 'CmdOrCtrl+S',
        click (item, focusedWindow) {
          ipcRenderer.sendSync('open-setting');
        }
      },
      {label: 'ออกจากโปรแกรม'}
    ]
  },
  {
    label: 'บริการ',
    submenu: [
      {label: 'ผู้ป่วย'},
      {label: 'นัดหมาย'}
    ]
  }
];



let tray = null
tray = new Tray('./icon/icon.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'normal'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)


const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

