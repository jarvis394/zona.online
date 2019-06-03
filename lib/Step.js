import { Keyboard } from 'vk-io'

const colors = {
  default: 'DEFAULT_COLOR',
  positive: 'POSITIVE_COLOR',
  negative: 'NEGATIVE_COLOR',
  primary: 'PRIMARY_COLOR'
}

export default class Step {
  
  constructor(options) {
    this.message = options.message
    this.function = options.function
    
    let keyboard = []
    options.keyboard.forEach((option, i) => {
      keyboard.push(
        Keyboard.textButton({
          label: option[0],
          payload: option[2] ? 'next&i=' + i + '&' + option[2] : 'next&i=' + i,
          color: option[1] ? Keyboard[colors[option[1]]] : Keyboard.DEFAULT_COLOR
        })
      )
    })
    
    this.keyboard = Keyboard.keyboard(keyboard).oneTime()
  }
  
  send(c) {
    if (!c.scene.step.firstTime) {
      return c.scene.step.next()
    }
    
    c.send({
      message: this.message,
      keyboard: this.keyboard
    })
    
    if (this.function && typeof this.function === 'function') {
      this.function(c)
    }
  }
}