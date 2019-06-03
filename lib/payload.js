module.exports = (updates) => {
  updates.use(async (context, next) => {
    const functions = {
      changeTrust: n => {
        n = parseFloat(n, 10)
        context.state.profile.trust += n
        context.send(`⛓️ Уровень доверия ${n == 0 ? 'не изменился' : n > 0 ? 'повысился на ' + n : 'понизился на ' + n * -1}`)
      }
    }
    
    if (context.is('message')) {
      let {
        messagePayload,
        state
      } = context
      
      if (!state.profile) state.profile = { trust: 1, balance: 10 }
      
      if (messagePayload) {
        messagePayload = messagePayload.split('&')
        
        let payload = {}
        for (let option of messagePayload) {
          option = option.split('=')
          payload[option[0]] = option[1]

          functions[option[0]] && functions[option[0]](option[1])
        }

        context.state.answerIndex = payload.i
      }
    }

    await next()
  })
}
