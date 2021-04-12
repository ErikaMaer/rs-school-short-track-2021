/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function counter(array, i, j) {
    let a = 0;

    const prev = array[i - 1];
    const curr = array[i];
    const next = array[i + 1];

    [prev, curr, next].forEach((row) => {
      if (row) {
        if (row[j - 1] === true) {
          a++;
        }
        if (row[j] === true) {
          a++;
        }
        if (row[j + 1] === true) {
          a++;
        }
      }
    });
    return a;
  }

  const arr = [];
  const a = matrix.map((x, i) => x.map((b, j) => {
    if (b === true) {
      arr.push(counter(matrix, i, j) - 1);
      return true;
    }
    return counter(matrix, i, j);
  }));
  const b = a.map((x) => x.map((y) => {
    if (y === true) {
      return arr.shift();
    }
    return y;
  }));
  return b;
}

module.exports = minesweeper;
