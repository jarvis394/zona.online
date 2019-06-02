const response = require('../../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - Ну сразу видно, свой человек, давай к нам на пальму.
    `,
    oneTime: true,
    options: [
      {
        text: 'Я не против',
        payload: 'dialog1/Test1/+15',
        color: 'POSITIVE_COLOR'
      }
    ]
  }

  update.send(response(options))
}