import React from 'react'

const CELL_SIZE = 20
const WIDTH = 400
const HEIGHT = 400

class Game extends React.Component {
  constructor() {
    super()
    this.rows = HEIGHT / CELL_SIZE
    this.cols = WIDTH / CELL_SIZE
    this.board = this.makeEmptyBoard()
  }

  state = {
    cells: []
  }

  makeEmptyBoard() { // creates an empty board
    let board = []
    for(let y = 0; y < this.rows; y++) { // iterates through rows
      board[y] = []
      for(let x = 0; x < this.cols; x++) { // iterates through columns
        board[y][x] = false
      }
    }
    return board
  }

  render() {
    return(
      <div>
        <h1>Amanda's Game of Life</h1>
        <div className='board' style={{width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}>

        </div>
        {console.log()}
      </div>
    )
  }
}

export default Game