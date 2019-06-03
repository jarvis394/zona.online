const config = require('./config')
import { VK, Keyboard } from 'vk-io'
import { SessionManager } from '@vk-io/session'
import { SceneManager, StepScene } from '@vk-io/scenes'
import fs from 'fs'

const vk = new VK()
const { api, updates } = vk
const sessionManager = new SessionManager()
const sceneManager = new SceneManager()

vk.setOptions({
  token: config.TOKEN,
})

const chalk = require('chalk')
const log = require('loglevel')
const prefix = require('loglevel-plugin-prefix')

// Logging
prefix.reg(log)
log.enableAll()
console.log('\n\n\n')

const colors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red,
}

prefix.apply(log, {
  format(level) {
    return `${colors[level.toUpperCase()]('> [' + level + ']')} `
  },
})

prefix.apply(log.getLogger('critical'), {
  format(level) {
    return chalk.red.bold(`> [${level}] `)
  },
})

// Register scenes
fs.readdirSync('./scenes').forEach(s => sceneManager.addScene(require('./scenes/' + s)))

// Filter messages
require('./lib/filter')(updates)

// Handle message payload
require('./lib/payload')(updates)

updates.on('message', sessionManager.middleware)
updates.on('message', sceneManager.middleware)

// Logging messages
require('./lib/log')(updates)

// Handle scenes
require('./lib/scenes')(updates, api, Keyboard)

updates.hear('Начать', (context) => context.scene.enter('prelude'))

/**
 * Starts polling
 */
async function run() {
  await vk.updates.startPolling()
  log.info('Polling started')
}

// Run
run().catch((e) => {
  log.error(e)
})


// Web
import express from 'express'
const app = express()

app.listen(3000, () => log.info('Web on 3000'))