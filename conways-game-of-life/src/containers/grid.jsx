import React from 'react';
import Cell from '../components/cell'

const Grid = ({grid, handleCellClick}) => {
  return (
    <div>
      { grid.map((row, rowIndex, arrayobj) => {
        return (<div key={rowIndex} className="row">
          { row.map((live, index, arrayobj) => {
            return (<Cell key={index} live={live} x={rowIndex} y={index} handleClick={handleCellClick} />);
          }) }
        </div>);
      })}
    </div>
  )
}

export default Grid;
