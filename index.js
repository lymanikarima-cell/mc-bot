const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'AethersSMP.aternos.me',
  port: 53569,
  username: 'AFK_Bot'
})

bot.on('spawn', () => {
  console.log('Bot joined')

  let moving = false

  setInterval(() => {
    moving = !moving
    bot.setControlState('forward', moving)
    bot.setControlState('jump', moving)
  }, 3000)
})
