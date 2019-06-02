const config = require('./config')
const {
  VK,
  Keyboard 
} = require('vk-io')

const vk = new VK()
const {
  api,
  updates,
} = vk

vk.setOptions({
  token: config.TOKEN,
})

const chalk = require('chalk')
const log = require('loglevel')
const prefix = require('loglevel-plugin-prefix')

// Logging
prefix.reg(log)
log.enableAll()

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

// Filter messages
require('./lib/filter')(updates)

// Handle message payload
require('./lib/payload')(updates)

// Logging messages
require('./lib/log')(updates)

// Handle scenes
require('./lib/scenes')(updates, api, Keyboard)

/**
 * Starts polling
 */
async function run() {
  await vk.updates.startPolling()
  console.log('\n\n\n')
  log.info('Polling started')
}

// Run
run().catch((e) => {
  log.error(e)
})
