const gridLife = gridArray => {
  const grid = gridArray;
  const width = gridArray.length;
  const height = gridArray[0].length;

  const validateCoords = (x, y) => {
    let xValid = x;
    let yValid = y;
    // left or Right
    while (xValid < 0) {
      xValid += width;
    }
    while (xValid >= width) {
      xValid -= width;
    }

    // top or Bottom
    while (yValid < 0) {
      yValid += height;
    }
    while (yValid >= height) {
      yValid -= height;
    }
    return { xValid, yValid };
  };

  const getCellValue = (x, y) => {
    const { xValid, yValid } = validateCoords(x, y);
    // console.log(`x: ${xValid}, y: ${yValid}, grid: ${grid}`)
    return grid[xValid][yValid];
  };

  const getSurroundingValues = (x, y) => {
    return [
      getCellValue(x - 1, y - 1),
      getCellValue(x - 1, y),
      getCellValue(x - 1, y + 1),
      getCellValue(x, y - 1),
      getCellValue(x, y + 1),
      getCellValue(x + 1, y - 1),
      getCellValue(x + 1, y),
      getCellValue(x + 1, y + 1),
    ];
  };
  const countSurroundingLives = (x, y) => {
    const values = getSurroundingValues(x, y);
    let counter = 0;
    for (let i = 0; i < values.length; i += 1) {
      if (values[i] === 1) {
        counter += 1;
      }
    }
    return counter;
  };

  const liveOrDies = (x, y) => {
    const lives = getCellValue(x, y);
    const surroundingLives = countSurroundingLives(x, y);
    if (lives === 1) {
      if (surroundingLives < 2 || surroundingLives >= 4) {
        return 0;
      }
      return 1;
    }

    if (surroundingLives === 3) {
      return 1;
    }
    return 0;
  };

  const genNext = () => {
    const newGrid = Array(width).fill().map(() => Array(height));
    for (let x = 0; x < width; x += 1) {
      for (let y = 0; y < height; y += 1) {
        newGrid[x][y] = liveOrDies(x, y);
      }
    }
    return newGrid;
  };

  return {
    grid,
    width,
    height,
    validateCoords,
    getCellValue,
    liveOrDies,
    getSurroundingValues,
    countSurroundingLives,
    genNext,
  };
};

export default gridLife;
