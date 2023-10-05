import Game from './Game'

export default class Server {
  game: Game

  constructor() {
    this.game = new Game()
  }

  async getCharacters(): Promise<
    { name: string; team: 'red' | 'blue'; position: [number, number] }[]
  > {
    return this.game.characters.map((character) => ({
      name: character.name,
      team: character.team,
      position: [character.hex.q, character.hex.r],
    }))
  }
}
