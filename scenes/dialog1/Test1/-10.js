const response = require('../../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - Ну и что? Не знаешь что такое полотенце? Да уж...
    `,
    oneTime: true,
    options: [
      {
        text: '...',
        payload: 'dialog1/Test1/-10',
        color: 'NEGATIVE_COLOR'
      }
    ]
  }

  update.send(response(options))
}