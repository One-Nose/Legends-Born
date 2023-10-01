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
    const positions = await this.client.getCharacterPositions()
    for (const position of positions)
      this.characters.push(new Character(this.board.getHex(position) as Hex))
    this.scene.createCharacters(this.characters)
  }
}
