import Game from './Game'

export default class Server {
  game: Game

  constructor() {
    this.game = new Game()
  }

  async getCharacterPositions(): Promise<[number, number][]> {
    return this.game.characters.map((character) => [
      character.hex.q,
      character.hex.r,
    ])
  }
}
