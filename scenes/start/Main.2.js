const response = require('../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      Тебя без суда везут сразу в твой будующий дом лет эдак на 150
    `,
    oneTime: true,
    options: [
      {
        text: 'Неужели...',
        payload: 'start/Main.3',
        color: 'DEFAULT_COLOR'
      }
    ]
  }

  update.send(response(options))
}