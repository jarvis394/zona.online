const log = require('loglevel')

module.exports = async (updates) => {
  updates.on('message', async (update, next) => {
    log.info(update.text)

    await next()
  })
}
