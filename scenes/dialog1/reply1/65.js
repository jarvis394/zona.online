const response = require('../../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - Какой день? Добрый? Ну ты дал... 
      > Сокамерники смеются и замечают твою нерешительность
      - Давай заходи, что как не родной.

      Уровень доверия: 65%
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