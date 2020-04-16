/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let splitedArr = str.split('-');

  let arrName = splitedArr.map(splitedArr => splitedArr.toUpperCase() + splitedArr.slice(1))

let oneName = arrName.join('')

return oneName;
}
