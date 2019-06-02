const response = require('../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - ...
    `,
    oneTime: true,
    options: [
      {
        text: 'Здорово, мужики',
        payload: 'start/Main.5',
        color: 'DEFAULT_COLOR'
      }
    ]
  }

  update.send(response(options))
}