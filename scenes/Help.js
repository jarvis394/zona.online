const response = require('../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      Ну смотри, по ходу игры разберёшься.
      - Нажимай на кнопки
      - Сражайся на нарах
      - Лежи на пальме
    `,
    oneTime: true,
    options: [
      {
        text: 'Ну, погнали',
        payload: 'start/Main.0',
        color: 'POSITIVE_COLOR'
      },
      {
        text: 'Про тюремный закон расскажи',
        payload: 'Help'
      }
    ]
  }

  update.send(response(options))
}