/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const arr = [];
  for (let i = 0; i < domains.length; i++) {
    const a = domains[i].match(/com$/);
    const b = domains[i].match(/(\w)*.com$/);
    const c = domains[i].match(/(\w*\.\w*\.com)*$/);
    if (c[0] !== '') {
      arr.push(`.${a[0]}`, `.${b[0].split('.').reverse().join('.')}`);
      arr.push(`.${c[0].split('.').reverse().join('.')}`);
    } else {
      arr.push(`.${a[0]}`, `.${b[0].split('.').reverse().join('.')}`);
    }
  }
  return arr.reduce((a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }), {});
}

module.exports = getDNSStats;
