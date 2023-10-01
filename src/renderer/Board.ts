import {
  Hex as BasicHex,
  Grid,
  Orientation,
  defineHex,
  spiral,
} from 'honeycomb-grid'

const Hex = defineHex({
  dimensions: { width: 60, height: 60 },
  orientation: Orientation.POINTY,
})

export default class Board extends Grid<BasicHex> {
  constructor() {
    super(Hex, spiral({ radius: 4 }))
  }
}
