import { Hex, Orientation, defineHex } from 'honeycomb-grid'
import Client from '../client/Client'
import Character from '../global/Character'
import BasicGame from '../global/Game'
import GameScene from './GameScene'

export default class Game extends BasicGame {
  client: Client
  scene: GameScene

  constructor(scene: GameScene) {
    super(
      defineHex({
        dimensions: { width: 60, height: 60 },
        orientation: Orientation.POINTY,
        origin: { x: -scene.renderer.width / 2, y: -scene.renderer.height / 2 },
      })
    )

    this.client = new Client()
    this.scene = scene

    this.scene.createBoard(this.board)
    this.createCharacters()
  }

  async createCharacters(): Promise<void> {
    const characters = await this.client.getCharacters()

    for (const characterProperties of characters) {
      const hex = this.board.getHex(characterProperties.position)
      if (hex === undefined)
        throw 'Trying to create a character on a non-existing hex'

      const character = new Character(
        characterProperties.name,
        characterProperties.color,
        hex
      )

      this.characters.push(character)
      this.scene.createCharacter(character)
    }
  }
}
