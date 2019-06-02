const response = require('../../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - Ты чё, полотенца боишься? Ну и блудень...
    `,
    oneTime: true,
    options: [
      {
        text: '...',
        payload: 'dialog1/Test1/-15',
        color: 'NEGATIVE_COLOR'
      }
    ]
  }

  update.send(response(options))
}