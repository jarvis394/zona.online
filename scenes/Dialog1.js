import { StepScene } from '@vk-io/scenes'
import Step from '../lib/Step'
import Answer from '../lib/Answer'

module.exports = new StepScene('dialog1', [
  
  c => {
    new Step({
      message: '❓ Что выберешь?',
      keyboard: [ 
        [ 'Здравствуйте!', null, 'changeTrust=0.15' ], 
        [ 'День добрый!', null, 'changeTrust=-0.1' ], 
        [ 'Здорово, мужики!', null, 'changeTrust=-0.05' ], 
        [ 'Мир вашему дому!', null, 'changeTrust=0.25' ], 
        [ 'Промолчать', 'primary', 'changeTrust=-0.25' ] ]
    }).send(c)
  },
  
  c => {
    const kb = [[ 'Зайти', 'primary' ]]
    new Answer([
      {
        message: '- Ну здравствуй, здравствуй. Тут, на зоне, конечно, все на ты, но на следующей ходке желай лучше мира дому нашему. Ну, чего стоишь, заходи.',
        keyboard: kb
      },
      {
        message: '- Какой день? Добрый? Ну ты выдал, хех.\n' + 
          '- Может позвной у него Оптимист будет?\n' +
          '\n  * Камера потешается *',
        keyboard: kb
      },
      {
        message: '- Здравствуй, конечно, но мы тут тебе ещё не мужики. Заходи, познакомимся.',
        keyboard: kb
      },
      {
        message: '- И тебе миру. Давай, заходи, другом будешь.',
        keyboard: kb
      },
      {
        message: '- Ты чего стоишь? Нас боишься? Не укусим, хе-хе...\n' +
          '  * Один из матёрых мужиков ухмыляется и говорит: \'Точно не укусим.\' *\n' +
          '- Давай, дядя, заходи.',
        keyboard: kb
      }
    ]).send(c)
  },
  
  c => c.scene.enter('dialog2')
  /*
  c => {
    new Step({
      message: 'Тебя без суда везут сразу в твой будущий дом лет эдак на 150.',
      keyboard: [[ 'Неужели...' ]]
    }).send(c)
  },
  
  c => {
    new Step({
      message: 'Да, брат, ты в ТЮРЯГЕ.\n' +
        'Нелегко тем, кто там обитает, но на Зоне одно правило - выживает сильнейший.',
      keyboard: [[ 'Запомню...', 'primary' ]]
    }).send(c)
  },
  
  c => {
    new Step({
      message: 'Молодец.\n\n' + 
        'Итак, тебе выдали тюремную робу - писк моды 21 века, и ты отправляешься на хату.\n' + 
        'Думаю, ты знаешь как заходить на хату?',
      keyboard: [[ 'Первый раз такое' ]]
    }).send(c)
  },
  
  c => {
    new Step({
      message: 'Главное - не бойся. Мафиози ты или жалкий старикашка?',
      keyboard: [[ 'Конечно первое!', 'positive' ]]
    }).send(c)
  },
  
  c => {
    new Step({
      message: '- ...',
      keyboard: [[ 'Начать знакомство' ]],
      function: (context) => context.sendPhoto('https://cdn.glitch.com/402bffaa-011f-4634-93f6-90c0f2354ab4%2F0oitXHh_d.jpg')
    }).send(c)
    
    c.scene.enter('dialog1')
  }*/
  
])