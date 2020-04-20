/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = str
  .split(' ', ',')
  
  resultMax = Math.max.apply(null, result);

  resultMax = Math.min.apply(null, result);
  
 return result 
}
