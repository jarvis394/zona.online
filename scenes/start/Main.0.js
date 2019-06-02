const response = require('../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      Ты - местный глава мафии.
      Ты - шишка настолько важная, что за твою голову полицией назначена такая награда, что ты и сам был бы не прочь приподнести её им на блюдечке.
      Ты - это тот, про кого говорят со страхом.
    `,
    oneTime: true,
    options: [
      {
        text: 'Да, бля, я самый главный в городе!',
        payload: 'start/Main.1',
        color: 'NEGATIVE_COLOR'
      }
    ]
  }

  update.send(response(options))
}