import { CharacterProperties } from '../global/Character'
import Game from './Game'

export default class Server {
  game: Game

  constructor() {
    this.game = new Game()
  }

  async getCharacters(): Promise<CharacterProperties[]> {
    return this.game.characters.map((character) => ({
      name: character.name,
      color: character.color,
      position: [character.hex.q, character.hex.r],
    }))
  }
}
