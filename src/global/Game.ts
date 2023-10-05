import { Hex } from 'honeycomb-grid'
import Board from './Board'
import Character from './Character'

export default class Game {
  board: Board
  characters: Character<this>[]

  constructor(hexType: typeof Hex) {
    this.board = new Board(hexType)
    this.characters = []
  }
}
