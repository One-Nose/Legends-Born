import { Hex } from 'honeycomb-grid'
import Character, { CharacterProperties } from '../global/Character'
import BasicGame from '../global/Game'

export default class Game extends BasicGame {
  constructor() {
    super(Hex)

    const characters: CharacterProperties[] = [
      { name: 'fighter', color: 'blue', position: [-3, 0] },
      { name: 'fighter', color: 'red', position: [3, 0] },
    ]

    this.characters.push(
      ...characters.map((character) => new Character(this, character))
    )
  }
}
