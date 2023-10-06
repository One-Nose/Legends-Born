import { Orientation, defineHex } from 'honeycomb-grid'
import Client from '../client/Client'
import Character from './Character'
import BasicGame from '../global/Game'
import GameScene from './GameScene'

export default class Game extends BasicGame {
  client: Client
  scene: GameScene
  selectedCharacter: Character<this> | null

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
    this.selectedCharacter = null

    this.scene.createBoard(this.board)
    this.createCharacters()
  }

  async createCharacters(): Promise<void> {
    const characters = await this.client.getCharacters()

    this.characters.push(
      ...characters.map((character) => new Character(this, character))
    )
  }

  undisplayCharacter(): void {
    this.scene.action.hide()
  }
}
