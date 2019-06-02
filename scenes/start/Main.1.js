const response = require('../../lib/Response')

module.exports.run = (api, update) => {
  const options = {
    message: `
      Но так было до недавнего времени. 
      Годы взяли своё, и тебя повязали прямо на твоём рабочем месте. 
    `,
    oneTime: true,
    options: [
      {
        text: 'Как...',
        payload: 'start/Main.2',
        color: 'DEFAULT_COLOR'
      }
    ]
  }

  update.send(response(options))
}