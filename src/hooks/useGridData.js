import { useEffect, useState } from "react";

import { ROW, COLUMN } from "../constants/constants";

// initializeGrid initializes an empty grid and then populates it with a preconfigured
// pattern.
// Future versions will replace the manual insertion with a function to allow
// user customized patterns.
const initializeGrid = () => {
  let grid = [];
  for (let row = 0; row < ROW; row++) {
    const newRow = [];
    for (let column = 0; column < COLUMN; column++) {
      newRow.push(false);
    }
    grid.push(newRow);
  }
  grid[11][11] = true;
  grid[11][12] = true;
  grid[11][13] = true;
  grid[11][14] = true;
  grid[11][15] = true;
  grid[11][16] = true;
  grid[11][17] = true;
  grid[11][18] = true;
  grid[11][19] = true;
  grid[11][20] = true;

  return grid;
};

const greaterThanZero = (x) => {
  return x >= 0;
};

const lessThanBoundry = (x, boundry) => {
  return x < boundry;
};

// checkNeighbourSquares checks a squares neighbours and counts how
// many alive squares are next to it.
const checkNeighbourSquares = (grid, x, y) => {
  let aliveNeighbours = 0;
  if (greaterThanZero(x - 1)) {
    if (grid[x - 1][y] === true) {
      aliveNeighbours++;
    }
  }
  if (greaterThanZero(x - 1) && greaterThanZero(y - 1)) {
    if (grid[x - 1][y - 1] === true) {
      aliveNeighbours++;
    }
  }
  if (greaterThanZero(y - 1)) {
    if (grid[x][y - 1] === true) {
      aliveNeighbours++;
    }
  }
  if (lessThanBoundry(x + 1, ROW) && greaterThanZero(y - 1, 0)) {
    if (grid[x + 1][y - 1] === true) {
      aliveNeighbours++;
    }
  }
  if (lessThanBoundry(x + 1, ROW)) {
    console.log(x, y);
    if (grid[x + 1][y] === true) {
      aliveNeighbours++;
    }
  }
  if (lessThanBoundry(x + 1, ROW) && lessThanBoundry(y + 1, COLUMN)) {
    if (grid[x + 1][y + 1] === true) {
      aliveNeighbours++;
    }
  }
  if (lessThanBoundry(y + 1, COLUMN)) {
    if (grid[x][y + 1] === true) {
      aliveNeighbours++;
    }
  }
  if (greaterThanZero(x - 1) && lessThanBoundry(y + 1, COLUMN)) {
    if (grid[x - 1][y + 1] === true) {
      aliveNeighbours++;
    }
  }
  return aliveNeighbours;
};

const actOnDead = (grid, x, y) => {
  return checkNeighbourSquares(grid, x, y) === 3;
};

const actOnAlive = (grid, x, y) => {
  const aliveNeighbours = checkNeighbourSquares(grid, x, y);

  return !(aliveNeighbours < 2 || aliveNeighbours >= 4);
};

// scanGrid scans the grid and updates a deep copy of the grid.
// Future versions will implement a faster algorithm by scanning only
// squares that are alive and store a record of dead squares in an object.
const scanGrid = (grid) => {
  const newGrid = grid.map((curr) => [...curr]);

  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      if (grid[row][column] === true) {
        newGrid[row][column] = actOnAlive(grid, row, column);
      } else {
        newGrid[row][column] = actOnDead(grid, row, column);
      }
    }
  }
  return newGrid;
};

export default function useGridData() {
  const [grid, setGrid] = useState(initializeGrid());
  const [allMoves, setAllMoves] = useState(false);

  // nextMove updates the screen and state with the next move.
  const nextMove = (grid) => {
    setGrid(scanGrid(grid));
  };

  // changeAllMoves sets a flag for when the start/stop button is pressed.
  const changeAllMoves = () => {
    setAllMoves(!allMoves);
  };

  // This useEffect runs when the start/stop button is pushed.
  useEffect(() => {
    if (allMoves) {
      const interval = setInterval(() => setGrid(scanGrid(grid)), 750);

      return () => clearInterval(interval);
    }
  }, [allMoves, grid]);

  return { grid, nextMove, changeAllMoves };
}
