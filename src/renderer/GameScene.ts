import { GameObjects, Geom, Scene } from 'phaser'
import Game from './Game'
import Board from '../global/Board'
import Character from './Character'
import CardDisplay from './CardDisplay'

export default class GameScene extends Scene {
  action!: CardDisplay
  selectImage!: GameObjects.Image

  constructor() {
    super('GameScene')
  }

  preload(): void {
    this.load.bitmapFont('font', 'assets/font.png', 'assets/font.xml')

    this.load.image('hex', 'assets/hex.png')
    this.load.image('card', 'assets/card.png')
    this.load.image('select', 'assets/select.png')

    for (const color of ['red', 'blue'])
      this.load.spritesheet(
        `fighter-${color}`,
        `assets/${color}/pions/fighter.png`,
        { frameWidth: 48, frameHeight: 48, startFrame: 5 }
      )
  }

  create(): void {
    new Game(this)
    this.action = new CardDisplay(this)
  }

  createBoard(board: Board): void {
    for (const hex of board) this.add.image(hex.x, hex.y, 'hex')

    this.selectImage = this.add
      .image(0, 0, 'select')
      .setAlpha(0)
      .setVisible(false)
  }

  createCharacter(character: Character<Game>): GameObjects.Sprite {
    return this.add
      .sprite(
        character.hex.x,
        character.hex.y,
        `${character.name}-${character.color}`
      )
      .setOrigin(0.5, 0.62)
      .setScale(3)
      .setFlipX(character.color === 'red')
      .setInteractive(
        new Geom.Rectangle(18, 13, 12, 19),
        Geom.Rectangle.Contains
      )
  }

  selectCharacter(character: Character<Game>): void {
    this.selectImage.setVisible(true)

    this.tweens.chain({
      targets: this.selectImage,
      tweens: [
        {
          duration: 70,
          alpha: 0,
          onComplete: () =>
            this.selectImage.setPosition(
              character.sprite.x,
              character.sprite.y
            ),
        },
        { duration: 70, alpha: 1 },
      ],
    })
  }
}
