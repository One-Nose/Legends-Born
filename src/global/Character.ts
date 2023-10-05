import { Hex } from 'honeycomb-grid'
import Action from './Action'
import { BaseCards } from './cards'
import Game from './Game'

export default class Character<T extends Game> {
  game: T
  hex: Hex
  name: string
  color: 'red' | 'blue'

  action: Action

  constructor(game: T, options: CharacterProperties) {
    this.game = game
    this.name = options.name
    this.color = options.color

    const hex = game.board.getHex(options.position)
    if (hex === undefined) throw 'Cannot create character in a non-existing hex'
    this.hex = hex

    this.action = BaseCards.Stand
  }
}

export interface CharacterProperties {
  name: string
  color: 'red' | 'blue'
  position: [number, number]
}
