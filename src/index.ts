import { Game, AUTO, Scale } from 'phaser'
import GameScene from './renderer/GameScene'

new Game({
  type: AUTO,
  parent: 'game',
  backgroundColor: '#69B57F',
  pixelArt: true,
  scale: {
    width: 800,
    height: 450,
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [GameScene],
})
