import { Hex } from 'honeycomb-grid'
import Action from './Action'
import { BaseCards } from './cards'

export default class Character {
  hex: Hex
  name: string
  color: 'red' | 'blue'

  action: Action

  constructor(name: string, color: 'red' | 'blue', startingHex: Hex) {
    this.name = name
    this.color = color
    this.hex = startingHex

    this.action = BaseCards.Stand
  }
}

export interface CharacterProperties {
  name: string
  color: 'red' | 'blue'
  position: [number, number]
}
