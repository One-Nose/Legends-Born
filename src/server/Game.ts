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

    for (const character of characters) {
      const hex = this.board.getHex(character.position)
      if (hex === undefined)
        throw 'Trying to create a character on a non-exsisting hex'

      this.characters.push(new Character(character.name, character.color, hex))
    }
  }
}
