/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let result = arr.filter(number => a + ' <> '+ b); 
  return result;
}
