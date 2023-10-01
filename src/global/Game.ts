import Board from './Board'
import Character from './Character'

export default class Game {
  board: Board
  characters: Character[]

  constructor() {
    this.board = new Board()
    this.characters = []
  }
}
