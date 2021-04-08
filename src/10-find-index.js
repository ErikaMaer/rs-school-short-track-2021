/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let middle;
  let end = array.length - 1;
  while (start <= end) {
    middle = start + Math.floor((end - start) / 2);
    if (array[middle] === value) {
      return middle;
    }
    if (array[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return middle;
}

module.exports = findIndex;
