module.exports = (updates) => {
  updates.use(async (context, next) => {
    if (context.type === 'message' && context.isOutbox) {
      return
    }

    try {
      await next()
    } catch (error) {
      console.error('> [ERROR]'.red, error)
    }
  })
}
