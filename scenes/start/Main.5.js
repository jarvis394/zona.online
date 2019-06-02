const response = require('../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      Главное - не бойся. Мафиози ты или жалкий старикашка?
    `,
    oneTime: true,
    options: [
      {
        text: 'Конечно первое!',
        payload: 'dialog1/Dialog.0',
        color: 'POSITIVE_COLOR'
      }
    ]
  }

  update.send(response(options))
}