import gridLife from '../scripts/grid';

test('returns the cell value', () => {
  const g = gridLife([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]);
  expect(g.getCellValue(0, 0)).toBe(1);
  expect(g.getCellValue(0, 1)).toBe(2);
  expect(g.getCellValue(0, 2)).toBe(3);
  expect(g.getCellValue(1, 0)).toBe(4);
  expect(g.getCellValue(1, 1)).toBe(5);
  expect(g.getCellValue(1, 2)).toBe(6);
  expect(g.getCellValue(2, 0)).toBe(7);
  expect(g.getCellValue(2, 1)).toBe(8);
  expect(g.getCellValue(2, 2)).toBe(9);
  expect(g.getCellValue(-1, 1)).toBe(8);
  expect(g.getCellValue(-1, -1)).toBe(9);
});

describe('Validate Coords', () => {
  test('validate 3,3 coords on 3x3 matrix', () => {
    const g = gridLife([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1]]);
    expect(g.validateCoords(3, 3)).toStrictEqual({ xValid: 0, yValid: 0 });
  });
});

test('returns the surrounding Values', () => {
  const g = gridLife([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]);
  const result = [1, 2, 3, 4, 6, 7, 8, 9];
  const result2 = [9, 7, 8, 3, 2, 6, 4, 5];
  expect(g.getSurroundingValues(1, 1)).toStrictEqual(result);
  expect(g.getSurroundingValues(0, 0)).toStrictEqual(result2);
});

test('count surrounding lives to be 1', () => {
  const g = gridLife([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 1]]);
  expect(g.countSurroundingLives(0, 0)).toBe(2);
  expect(g.countSurroundingLives(1, 2)).toBe(2);
});

test('count surrounding lives', () => {
  const g = gridLife([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]]);
  expect(g.countSurroundingLives(0, 0)).toBe(0);
});

describe('live or dies', () => {
  test('the cell dies', () => {
    const g = gridLife([
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]]);
    expect(g.liveOrDies(1, 2)).toBe(0);
    expect(g.getSurroundingValues(0, 0)).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0]);
    expect(g.countSurroundingLives(2, 2)).toBe(2);
    expect(g.liveOrDies(2, 2)).toBe(1);
    expect(g.liveOrDies(2, 1)).toBe(1);
  });
});

describe('Grid nextGen Tests', () => {
  test('next generation grid size is ok', () => {
    const g = gridLife([
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]]);
    expect(g.genNext().length).toStrictEqual(3);
  });

  test('next generation result', () => {
    const g = gridLife([
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]]);
    const result = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]];
    expect(g.genNext()).toStrictEqual(result);
  });
});
