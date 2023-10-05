import { Hex, Grid, spiral } from 'honeycomb-grid'

export default class Board extends Grid<Hex> {
  constructor(hexType: typeof Hex) {
    super(hexType, spiral({ radius: 4 }))
  }
}
