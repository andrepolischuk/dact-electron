# dact-electron [![Build Status][travis-image]][travis-url]

> Sync [dact](https://github.com/andrepolischuk/dact) between [electron](https://github.com/electron/electron) processes

## Install

```sh
npm install --save dact-electron
```

## Usage

In renderer process:

```js
const createData = require('dact')
const sync = require('dact-electron')
const {ipcRenderer} = require('electron')

const initial = {
  users: []
}

const data = createData(initial, sync(ipcRenderer))
```

In main process:

```js
const createData = require('dact')
const sync = require('dact-electron')
const {app, ipcMain, BrowserWindow} = require('electron')

const initial = {
  users: []
}

app.on('ready', () => {
  const win = new BrowserWindow()
  const data = createData(initial, sync(ipcMain, win))

  win.loadURL(`file://${__dirname}/index.html`)
})
```

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/dact-electron
[travis-image]: https://travis-ci.org/andrepolischuk/dact-electron.svg?branch=master
