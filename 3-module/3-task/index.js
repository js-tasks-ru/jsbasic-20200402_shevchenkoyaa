/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {

 

  let arr = str.split('-'); 



  let arrName = arr.map(arr => arr[0].toUpperCase() + arr.slice(1)) 


let oneName = arrName.join('')

return oneName;
}
