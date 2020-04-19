import React from 'react'
import Cell from '../components/Cell'

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
    cells: [],
    interval: 100,
    isRunning: false
  }

  runGame = () => {
    this.setState({
      isRunning: true
    })
    this.runIteration()
  }

  stopGame = () => {
    this.setState({
      isRunning: false
    })
    if(this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler)
      this.timeoutHandler = null
    }
  }

  runIteration() {
    let newBoard = this.makeEmptyBoard()

    for(let y = 0; y < this.rows; y++) {
      for(let x = 0; x < this.cols; x++) {
        let neighbors = this.calculateNeighbors(this.board, x, y)
        if(this.board[y][x]) {
          if(neighbors === 2 || neighbors === 3) {
            newBoard[y][x] = true
          } else {
            newBoard[y][x] = false
          }
        } else {
          if(!this.board[y][x] && neighbors === 3) {
            newBoard[y][x] = true
          }
        }
      }
    }

    this.board = newBoard
    this.setState({
      cells: this.makeCells()
    })
    this.timeoutHandle = window.setTimeout(() => {
      this.runIteration()
    }, this.state.interval)
  }

  calculateNeighbors(board, x, y) { // calculates the number of neighbors at x and y
    let neighbors = 0
    const dirs = [[-1,-1], [-1,0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
    for(let i = 0; i < dirs.length; i++) {
      const dir = dirs[i]
      let y1 = y + dir[0]
      let x1 = x + dir[1]
      if(x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
        neighbors++
      }
    }
    return neighbors
  }

  handleIntervalChange = event => {
    this.setState({
      interval: event.target.value
    })
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

  makeCells() { // create cells
    let cells = []
    for(let y = 0; y < this.rows; y++) { // iterate through rows
      for(let x = 0; x < this.cols; x++) { // iterate through columns
        if(this.board[y][x]) {
          cells.push({x,y})
        }
      }
    } 
    return cells
  }

  getElementOffset() {
    const rect = this.boardRef.getBoundingClientRect()
    const doc = document.documentElement
    return {
      x: (rect.left + window.pageXOffset) - doc.clientLeft,
      y: (rect.top + window.pageYOffset) - doc.clientTop,
    }
  }

  handleClick = event => {
    const elemOffset = this.getElementOffset()
    const offsetX = event.clientX - elemOffset.x
    const offsetY = event.clientY - elemOffset.y
    const x = Math.floor(offsetX / CELL_SIZE)
    const y = Math.floor(offsetY / CELL_SIZE)
    if(x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x]
    }
    this.setState({
      cells: this.makeCells()
    })
  }

  render() {
    const { cells } = this.state
    return(
      <div>
        <h1>Amanda's Game of Life</h1>
        <div 
          className='board' 
          style={{width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
          onClick={this.handleClick}
          ref={n => {this.boardRef = n}}
        >
          {cells.map(cell => <Cell key={`${cell.x}, ${cell.y}`} x={cell.x} y={cell.y}/>)}
        </div>
        <div className='controls'>
          Update every <input value={this.state.interval} onChange={this.handleIntervalChange}/> msec 
          {this.state.isRunning ? 
            <button className='button' onClick={this.stopGame}>Stop</button> : 
            <button className='button' onClick={this.runGame}>Run</button>
          }
        </div>
      </div>
    )
  }
}

export default Game