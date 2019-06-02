const response = require('../../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      Ты видишь под ногами полотенце. Что ты сделаешь?
    `,
    oneTime: true,
    options: [
      {
        text: 'Перешагнуть',
        payload: 'dialog1/Test1/-15',
        color: 'DEFAULT_COLOR'
      },
      {
        text: 'Поднять',
        payload: 'dialog1/Test1/-10',
        color: 'DEFAULT_COLOR'
      },
      {
        text: 'Вытереть ноги',
        payload: 'dialog1/Test1/+15',
        color: 'DEFAULT_COLOR'
      },
    ]
  }

  update.send(response(options))
}