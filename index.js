const eventName = 'dactElectron'

function syncElectrons (extend) {
  return extend
}

export default function dactElectron (ipc, ...windows) {
  return data => {
    ipc.on(eventName, (event, extend) => {
      data.emit(syncElectrons, extend)
    })

    return next => (extend, meta) => {
      if (meta !== syncElectrons.name) {
        if (windows.length) {
          windows.forEach(win => {
            win.webContents.send(eventName, extend)
          })
        } else {
          ipc.send(eventName, extend)
        }
      }

      return next(extend)
    }
  }
}
