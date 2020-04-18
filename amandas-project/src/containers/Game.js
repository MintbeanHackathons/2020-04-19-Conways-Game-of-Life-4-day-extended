import React from 'react'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      gridWidth: 400,
      gridHeight: 400
    }
  }
  
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
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,400,400) // clears the canvas ahead of each redraw
    for(let j = 1; j < this.state.gridHeight; j++) { // iterate through rows
      for(let k = 0; k < this.state.gridWidth; k++) { // iterate through columns
        if(this.fillRandom()[j][k] === 1) {
          ctx.fillStyle = '#FF0000'
          ctx.fillRect(j,k,1,1)
        }
      }
    }
  }

  render() {
    return(
      <div>
        <h1>Amanda's Game of Life</h1>
        {console.log(this.drawGrid())}
        <canvas ref='canvas' width={400} height={400}/>
      </div>
    )
  }
}

export default Game