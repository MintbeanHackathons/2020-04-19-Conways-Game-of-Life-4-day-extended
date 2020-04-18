import { useEffect, useState } from "react";
// import { useImmer } from "use-immer";

const COLUMN = 33;
const ROW = 23;

const initializeGrid = () => {
  let grid = [];
  for (let row = 0; row < ROW; row++) {
    const newRow = [];
    for (let column = 0; column < COLUMN; column++) {
      newRow.push(false);
    }
    grid.push(newRow);
  }
  grid[10][11] = true;
  grid[10][12] = true;
  grid[10][13] = true;
  grid[10][14] = true;
  grid[10][15] = true;
  grid[10][16] = true;
  grid[10][17] = true;
  grid[10][18] = true;
  grid[10][19] = true;
  grid[10][20] = true;

  return grid;
};

const checkNeighbourSquares = (grid, x, y) => {
  let aliveNeighbours = 0;
  if (x - 1 >= 0) {
    if (grid[x - 1][y] === true) {
      aliveNeighbours++;
    }
  }
  if (x - 1 >= 0 && y - 1 >= 0) {
    if (grid[x - 1][y - 1] === true) {
      aliveNeighbours++;
    }
  }
  if (y - 1 >= 0) {
    if (grid[x][y - 1] === true) {
      aliveNeighbours++;
    }
  }
  if (x + 1 < ROW && y - 1 >= 0) {
    if (grid[x + 1][y - 1] === true) {
      aliveNeighbours++;
    }
  }
  if (x + 1 < ROW) {
    console.log(x, y);
    if (grid[x + 1][y] === true) {
      aliveNeighbours++;
    }
  }
  if (x + 1 < ROW && y + 1 < COLUMN) {
    if (grid[x + 1][y + 1] === true) {
      aliveNeighbours++;
    }
  }
  if (y + 1 < COLUMN) {
    if (grid[x][y + 1] === true) {
      aliveNeighbours++;
    }
  }
  if (x - 1 >= 0 && y + 1 < COLUMN) {
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

const scanGrid = (grid) => {
  const copyGrid = JSON.parse(JSON.stringify(grid));
  const newGrid = JSON.parse(JSON.stringify(grid));
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      if (copyGrid[row][column] === true) {
        newGrid[row][column] = actOnAlive(copyGrid, row, column);
      } else {
        newGrid[row][column] = actOnDead(copyGrid, row, column);
      }
    }
  }
  return newGrid;
};

// const start = (grid) => {};

export default function useGridData() {
  const [grid, setGrid] = useState(initializeGrid());
  const [allMoves, setAllMoves] = useState(false);

  const nextMove = (grid) => {
    setGrid(scanGrid(grid));
  };

  const changeAllMoves = () => {
    setAllMoves(!allMoves);
  };

  useEffect(() => {
    if (allMoves) {
      const interval = setInterval(() => setGrid(scanGrid(grid)), 750);

      return () => clearInterval(interval);
    }
  }, [allMoves, grid]);

  // useEffect(() => {
  //   const interval = setInterval(() => setGrid(scanGrid(grid)), 1000);

  //   return () => clearInterval(interval);
  // }, [allMoves, grid]);
  // const allMoves = (grid) => {
  //   setInterval(() => {
  //     nextMove(scanGrid(grid));
  //   }, 1000);
  return { grid, nextMove, changeAllMoves };
}
