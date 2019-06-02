const response = require('../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      - ...
    `,
    oneTime: true,
    options: [
      {
        text: 'Здравствуйте!',
        payload: 'dialog1/reply1/50',
        color: 'DEFAULT_COLOR'
      },
      {
        text: 'День добрый...',
        payload: 'dialog1/reply1/45',
        color: 'DEFAULT_COLOR'
      },
      {
        text: 'Здорово, мужики!',
        payload: 'dialog1/reply1/75',
        color: 'DEFAULT_COLOR'
      },
      {
        text: 'Мир вашему дому.',
        payload: 'dialog1/reply1/100',
        color: 'DEFAULT_COLOR'
      },
      {
        text: 'Промолчать',
        payload: 'dialog1/reply1/25',
        color: 'NEGATIVE_COLOR'
      }
    ]
  }

  update.send(response(options))
  update.sendPhoto('https://i.imgur.com/0oitXHh.png')
}