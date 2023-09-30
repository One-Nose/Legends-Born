import { Game, AUTO, Scale } from 'phaser'
import GameScene from './scenes/Game'

new Game({
  type: AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  scale: {
    width: 800,
    height: 450,
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [GameScene],
})
