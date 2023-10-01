import { Scene } from 'phaser'
import Board from './Board'

export default class GameScene extends Scene {
  board: Board

  constructor() {
    super('GameScene')
    this.board = new Board()
  }

  preload() {
    this.load.image('hex', 'assets/hex.png')
  }

  create() {
    this.cameras.main.setScroll(
      -this.renderer.width / 2,
      -this.renderer.height / 2
    )

    for (const hex of this.board) {
      this.add.image(hex.x, hex.y, 'hex')
    }
  }
}
