import { Scene } from 'phaser'
import Client from '../client/Client'

export default class GameScene extends Scene {
  client: Client

  constructor() {
    super('GameScene')
    this.client = new Client(this)
  }

  preload() {
    this.load.image('hex', 'assets/hex.png')
  }

  create() {
    this.cameras.main.setScroll(
      -this.renderer.width / 2,
      -this.renderer.height / 2
    )

    for (const hex of this.client.board) {
      this.add.image(hex.x, hex.y, 'hex')
    }
  }
}
