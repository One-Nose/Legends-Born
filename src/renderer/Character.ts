import BasicCharacter, { CharacterProperties } from '../global/Character'
import Game from './Game'
import { GameObjects } from 'phaser'

export default class Character<T extends Game> extends BasicCharacter<T> {
  sprite: GameObjects.Sprite

  constructor(game: T, options: CharacterProperties) {
    super(game, options)

    this.sprite = this.game.scene
      .createCharacter(this)
      .on('pointerover', () => this.display())
      .on('pointerout', () => {
        if (game.selectedCharacter === null) game.undisplayCharacter()
        else game.selectedCharacter.display()
      })

    if (this.color === 'blue')
      this.sprite.on('pointerdown', () => this.select())
  }

  display(): void {
    this.game.scene.action.show(this.action)
  }

  select(): void {
    this.game.selectedCharacter = this
    this.game.scene.selectCharacter(this)
  }
}
