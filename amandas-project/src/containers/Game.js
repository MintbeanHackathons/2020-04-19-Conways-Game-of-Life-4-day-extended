import React from 'react'

const CELL_SIZE = 20
const WIDTH = 400
const HEIGHT = 400

class Game extends React.Component {
  createRows = rows => { //creates rows
    let arr = []
    for(let i = 0; i < rows; i++) {
      arr[i] = []
    }
    return arr
  }
  
  fillRandom = () => { //fills the grid randomly
    let theGrid = this.createRows(400)
    for(let j = 0; j < this.state.gridHeight; j++) { //iterate through rows
      for(let k = 0; k < this.state.gridHeight; k++) { //interate through columns
        let random = Math.random()
        let int = (random * 2)
        let oneOrZero = Math.floor(int)
        theGrid[j][k] = oneOrZero
      }
    }
    return theGrid
  }

  drawGrid = () => { // draws grid on canvas 
    for(let j = 1; j < this.state.gridHeight; j++) { // iterate through rows
      for(let k = 0; k < this.state.gridWidth; k++) { // iterate through columns
        if(this.fillRandom()[j][k] === 1) {
          // console.log(this.props.ctx.getContext('2d').)
          // ctx.fillStyle = '#FF0000'
          // ctx.fillRect(j,k,1,1)
        }
      }
    }
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