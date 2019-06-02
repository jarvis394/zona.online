const response = require('../../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - Мы ещё не знакомы, так что лучше так не обращаться к нам, а то сам знаешь...
      - Заходи, чё стоишь, узнаемся как раз.

      Уровень доверия: 75%
    `,
    oneTime: true,
    options: [
      {
        text: 'Зайти',
        payload: 'dialog1/Test1/Main',
        color: 'PRIMARY_COLOR'
      },
    ]
  }

  update.send(response(options))
}