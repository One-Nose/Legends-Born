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
      .on('pointerdown', () => this.select())
  }

  display(): void {
    this.game.scene.showAction()
  }

  select(): void {
    this.game.selectedCharacter = this
  }
}
