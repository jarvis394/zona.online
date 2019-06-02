const response = require('../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      Да, брат, ты в ТЮРЯГЕ.
      Нелегко тем, кто там обитает, но на Зоне одно правило - выживает сильнейший. 
    `,
    oneTime: true,
    options: [
      {
        text: 'Запомню...',
        payload: 'start/Main.4',
        color: 'DEFAULT_COLOR'
      }
    ]
  }

  update.send(response(options))
}