const response = require('../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      Молодец.

      Итак, тебе выдали тюремную робу - писк моды 21 века, и ты отправляешься на хату.
      Думаю, ты знаешь как заходить на хату? 
    `,
    oneTime: true,
    options: [
      {
        text: 'Ну...',
        payload: 'start/Main.5',
        color: 'DEFAULT_COLOR'
      }
    ]
  }

  update.send(response(options))
}