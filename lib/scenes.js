const log = require('loglevel')

module.exports = (updates, api, Keyboard) => {
  const optionsDefault = {
    message: 'Не понял',
    keyboard: Keyboard.keyboard([
      Keyboard.textButton({
        label: 'Ну, погнали',
        payload: {
          command: 'start/Main.0'
        },
        color: Keyboard.POSITIVE_COLOR
      }),
      Keyboard.textButton({
        label: 'Про тюремный закон расскажи',
        payload: {
          command: 'Help'
        }
      })
    ]).oneTime()
  }

  updates.on('message', update => {
    if (!update.payload.payload) return update.send(optionsDefault)

    let cmd = JSON.parse(update.payload.payload).command

    try {
      let scene = require(`../scenes/${cmd}`)
      scene.run(api, update, Keyboard)
    } catch (e) {
      if (e.code === 'MODULE_NOT_FOUND') return
      log.error(e)
    }
  })
}