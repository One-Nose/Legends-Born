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

    for (const color of ['red', 'blue'])
      this.load.spritesheet(
        `fighter-${color}`,
        `assets/${color}/pions/fighter.png`,
        { frameWidth: 48, frameHeight: 48, startFrame: 5 }
      )
  }

  create(): void {
    new Game(this)
  }

  createBoard(board: Board): void {
    for (const hex of board) this.add.image(hex.x, hex.y, 'hex')
  }

  createCharacters(characters: Character[]): void {
    for (const character of characters)
      this.add
        .sprite(
          character.hex.x,
          character.hex.y,
          `${character.name}-${character.color}`
        )
        .setOrigin(0.5, 0.6)
        .setScale(3)
        .setFlipX(character.color === 'red')
  }
}
