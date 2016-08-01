
const {ipcRenderer} = require('electron')



const {remote} = require('electron')
const {Menu} = remote;

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

const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

