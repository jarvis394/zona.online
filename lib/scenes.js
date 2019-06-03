const log = require('loglevel')

module.exports = (updates, api, Keyboard) => updates.on('message', (update, next) => {
  
  // If no scene found then continue to another middleware
  if (!update.scene.current) {
		return next()
	}

  // Otherwise reenter to the scene
	return update.scene.reenter()
  
})