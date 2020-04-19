import React from 'react'

const CELL_SIZE = 20
const WIDTH = 400
const HEIGHT = 400

class Game extends React.Component {
  constructor() {
    super()
    this.rows = HEIGHT / CELL_SIZE
    this.cols = WIDTH / CELL_SIZE
    
  }

  state = {
    cells: []
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