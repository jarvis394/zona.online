module.exports = (updates) => {
  updates.use(async (context, next) => {
    if (context.is('message')) {
      const {
        messagePayload,
      } = context

      context.state.command = messagePayload && messagePayload.command ?
        messagePayload.command :
        null
    }

    await next()
  })
}
