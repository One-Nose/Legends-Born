import { GameObjects, Scene } from 'phaser'
import Card from '../global/Card'

export default class CardDisplay {
  group: GameObjects.Group
  name: GameObjects.BitmapText

  constructor(scene: Scene) {
    const card = scene.add.image(0, 0, 'card').setOrigin(0, 0)

    this.name = scene.add
      .bitmapText(card.width / 2, 10, 'font')
      .setScale(2)
      .setOrigin(0.5, 0)

    this.group = scene.add
      .group([
        card,
        this.name,
        scene.add
          .bitmapText(card.width / 2, card.height - 10, 'font', 'ACTION')
          .setScale(2)
          .setOrigin(0.5, 1),
      ])
      .incXY(30, 30)
      .setVisible(false)
  }

  hide() {
    this.group.setVisible(false)
  }

  show(card: Card) {
    this.name.setText(card.name)
    this.group.setVisible(true)
  }
}
