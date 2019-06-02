const {
  Keyboard 
} = require('vk-io')

function response(options) {
  let keyboard = []

  for (let option of options.options) {
    keyboard.push(
      Keyboard.textButton({
        label: option.text,
        payload: {
          command: option.payload
        },
        color: option.color ? Keyboard[option.color] : Keyboard.DEFAULT_COLOR
      })
    )
  }

  keyboard = Keyboard.keyboard(keyboard)

  return {
    message: options.message,
    keyboard: options.oneTime ? keyboard.oneTime() : keyboard
  }
}

module.exports = response