import { Keyboard } from 'vk-io'

const colors = {
  default: 'DEFAULT_COLOR',
  positive: 'POSITIVE_COLOR',
  negative: 'NEGATIVE_COLOR',
  primary: 'PRIMARY_COLOR'
}

export default class Answer {
  
  constructor(answers) {
    for (let answer of answers) {
      let keyboard = []
      for (let option of answer.keyboard) {
        keyboard.push(
          Keyboard.textButton({
            label: option[0],
            payload: option[2] ? 'next&' + option[2] : 'next',
            color: option[1] ? Keyboard[colors[option[1]]] : Keyboard.DEFAULT_COLOR
          })
        )
      }
    
      answer.keyboard = Keyboard.keyboard(keyboard).oneTime()
    }
    
    this.answers = answers
  }
  
  send(c) {
    if (!c.scene.step.firstTime) {
      return c.scene.step.next()
    }
    
    const answer = this.answers[c.state.answerIndex]
    
    c.send({
      message: answer.message,
      keyboard: answer.keyboard
    })
    
    if (answer.function && typeof answer.function === 'function') {
      answer.function(c)
    }
  }
}