import { StepScene } from '@vk-io/scenes'
import Step from '../lib/Step'
import Answer from '../lib/Answer'

module.exports = new StepScene('dialog2', [
  
  c => {
    new Step({
      message: 'Тут ты замечаешь под ногами полотенце\n\n❓ Что выберешь?',
      keyboard: [ 
        [ 'Наклониться и подобрать', null, 'changeTrust=-0.1' ], 
        [ 'Вытереть ноги', null, 'changeTrust=0.15' ],
        [ 'Перешагнуть', null, 'changeTrust=-0.15'] ]
    }).send(c)
  },
  
  c => {
    const kb = [[ 'Продолжить', 'primary' ]]
    new Answer([
      {
        message: '- Ну и чё? Не знаешь, что такое полотенце? На следующей ходке вытери об него ноги - это не оскорбление, а наоборот.',
        keyboard: kb
      },
      {
        message: '- Ну, дядя, воровскую жизнь видел походу. Проходи.',
        keyboard: kb
      },
      {
        message: '- Ты чё, полотенца боишься? Ну и блудень...',
        keyboard: kb
      },
    ]).send(c)
  },
  
])