import { Hex } from 'honeycomb-grid'
import Client from '../client/Client'
import Character from '../global/Character'
import BasicGame from '../global/Game'
import GameScene from './GameScene'

export default class Game extends BasicGame {
  client: Client
  scene: GameScene

  constructor(scene: GameScene) {
    super()
    this.client = new Client()
    this.scene = scene

    this.scene.createBoard(this.board)
    this.createCharacters()
  }

  async createCharacters(): Promise<void> {
    const characters = await this.client.getCharacters()
    for (const character of characters)
      this.characters.push(
        new Character(
          character.name,
          character.team,
          this.board.getHex(character.position) as Hex
        )
      )
    this.scene.createCharacters(this.characters)
  }
}
