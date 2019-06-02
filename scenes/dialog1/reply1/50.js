const response = require('../../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - Чё умный такой, да? Интиллегент? Тьфу, бля. 
      > Плюёт перед тобой
      - Заходи, чё стоишь. Или мозги уже перетрудились?

      Уровень доверия: 50%
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