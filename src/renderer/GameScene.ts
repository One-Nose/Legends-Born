import { Scene } from 'phaser'
import Game from './Game'
import Board from '../global/Board'
import Character from '../global/Character'

export default class GameScene extends Scene {
  constructor() {
    super('GameScene')
  }

  preload(): void {
    this.load.image('hex', 'assets/hex.png')
  }

  create(): void {
    this.cameras.main.setScroll(
      -this.renderer.width / 2,
      -this.renderer.height / 2
    )

    new Game(this)
  }

  createBoard(board: Board): void {
    for (const hex of board) this.add.image(hex.x, hex.y, 'hex')
  }

  createCharacters(characters: Character[]): void {
    for (const character of characters)
      this.add.image(character.hex.x, character.hex.y, 'character')
  }
}