import {
  Hex as BasicHex,
  Grid,
  Orientation,
  defineHex,
  spiral,
} from 'honeycomb-grid'
import GameScene from '../renderer/Game'

const Hex = defineHex({
  dimensions: { width: 60, height: 60 },
  orientation: Orientation.POINTY,
})

export default class Client {
  gameScene: GameScene
  board: Grid<BasicHex>

  constructor(gameScene: GameScene) {
    this.gameScene = gameScene
    this.board = new Grid(Hex, spiral({ radius: 4 }))
  }
}
