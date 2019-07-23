const mc = require('flying-squid');

mc.createMCServer({
  'motd': 'A Minecraft Server \nRunning flying-squid',
  'port': 25565,
  'max-players': 10,
  'online-mode': true,
  'logging': true,
  'gameMode': 1,
  'difficulty': 1,
  'worldFolder':'world',
  'generation': {
    'name': 'diamond_square',
    'options':{
      'worldHeight': 80
    }
  },
  "flying-squid-essentials": {
    "chan":"#PrismarineJS/flying-squid",
    "startingMessage":"I live!"
  },
  'kickTimeout': 10000,
  'plugins': {
    "flying-squid-essentials": {
    "chan":"#PrismarineJS/flying-squid",
    "startingMessage":"I live!"
  }
  },
  'modpe': false,
  'view-distance': 10,
  'player-list-text': {
    'header':'WILDCRAFT',
    'footer':'Test server'
  },
  'everybody-op': true,
  'max-entities': 100,
  'version': '1.12.2'
});