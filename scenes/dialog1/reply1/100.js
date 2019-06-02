const response = require('../../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - И тебе миру. Давай заходи, другом будешь

      Уровень доверия: 100%
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