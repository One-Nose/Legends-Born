import { Hex } from 'honeycomb-grid'

export default class Character {
  hex: Hex
  name: string
  color: 'red' | 'blue'

  constructor(name: string, color: 'red' | 'blue', startingHex: Hex) {
    this.name = name
    this.color = color
    this.hex = startingHex
  }
}
