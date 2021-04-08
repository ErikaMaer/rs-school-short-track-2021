/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let a = 1;
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      a++;
    } else {
      arr.push(a + str[i]);
      a = 1;
    }
  }
  return arr.join('').replace(/1/g, '');
}

module.exports = encodeLine;
