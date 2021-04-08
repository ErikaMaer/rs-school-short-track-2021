/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const a = [];
  for (let i = 0; i < n.toString().length; i++) {
    const b = n.toString().split('');
    b.splice(i, 1);
    a.push(b.join(''));
  }
  return Math.max.apply(null, a);
}

module.exports = deleteDigit;
