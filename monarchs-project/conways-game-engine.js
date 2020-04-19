module.exports = class ConwaysGameEngine {
  constructor(opts) {
    this.board = {
      height: opts.board.height || 10,
      width: opts.board.width || 10,
      offState: 0,
      onState: 1,
      world: null
    }
  }
}