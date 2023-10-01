import { Hex } from 'honeycomb-grid'
import Character from '../global/Character'
import BasicGame from '../global/Game'

export default class Game extends BasicGame {
  constructor() {
    super()
    this.characters.push(
      new Character(this.board.getHex([-3, 0]) as Hex),
      new Character(this.board.getHex([3, 0]) as Hex)
    )
  }
}
