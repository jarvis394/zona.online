import { StepScene } from '@vk-io/scenes'
import Step from '../lib/Step'

module.exports = new StepScene('prelude', [
  
  c => {
    new Step({
      message: 'Ты - местный глава мафии.\n' + 
        'Ты - шишка настолько важная, что за твою голову полицией назначена такая награда, ' + 
        'что ты и сам был бы не прочь приподнести её им на блюдечке.\n' + 
        'Ты - это тот, про кого говорят со страхом.',
      keyboard: [[ 'Да! Я тут самый главный!', 'negative' ]]
    }).send(c)
  },
  
  c => {
    new Step({
      message: 'Но так было до недавнего времени. \n' + 
        'Годы взяли своё, и тебя повязали прямо на твоём рабочем месте.',
      keyboard: [[ 'Как...' ]]
    }).send(c)
  },
  
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
      keyboard: [[ 'Начать знакомство', 'primary' ]],
      function: (context) => context.sendPhoto('https://cdn.glitch.com/402bffaa-011f-4634-93f6-90c0f2354ab4%2F0oitXHh_d.jpg')
    }).send(c)
  },
  
  c => c.scene.enter('dialog1')
  
])