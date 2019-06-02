const response = require('../../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - Чё стоишь? Давай брат, проходи. 
      (шёпотом) Аутиста опять подсадили походу...

      Уровень доверия: 25%
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