import React from 'react';

const Cell = ({live, x, y, handleClick}) => {
  const liveStyle = {
    backgroundColor: "black",
    border: 0,
    padding: 0,
  }
  const deadStyle = {
    backgroundColor: "#eee",
    border: 0,
    padding: 0,
  }
  if (live === 1){
    return(<button className="cell" style={liveStyle} onClick={() => handleClick(x, y)} />)
  }
  return(<button className="cell" style={deadStyle} onClick={() => handleClick(x, y)} />)
}

export default Cell;
