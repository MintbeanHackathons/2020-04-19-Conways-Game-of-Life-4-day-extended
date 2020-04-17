import React from 'react'

class Game extends React.Component {
  createRows = rows => { //creates rows
    let arr = []
    for(let i = 0; i < rows; i++) {
      arr[i] = []
    }
    return arr
  }
  
  fillRandom = () => { //fills the grid randomly
    let theGrid = this.createRows(40)
    for(let j = 0; j < 40; j++) { //iterate through rows
      for(let k = 0; k < 40; k++) { //interate through columns
        let rawRandom = Math.random()
        let int = (rawRandom * 2)
        let oneOrZero = Math.floor(int)
        theGrid[j][k] = oneOrZero
      }
    }
    return theGrid
  }

  render() {

    return(
      <div>
        <h1>Amanda's Game of Life</h1>
        {console.log(this.fillRandom())}
      </div>
    )
  }
}

export default Game