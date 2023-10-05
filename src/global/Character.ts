import { Hex } from 'honeycomb-grid'

export default class Character {
  hex: Hex
  name: string
  team: 'red' | 'blue'

  constructor(name: string, team: 'red' | 'blue', startingHex: Hex) {
    this.name = name
    this.team = team
    this.hex = startingHex
  }
}
