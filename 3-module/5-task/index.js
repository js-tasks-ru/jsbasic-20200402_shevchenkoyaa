/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = str.split(' ') 
  let joinEl = result.join(',')
  let splitResult = joinEl.split(',')
  
  
  let onlyNumbers = splitResult.filter(function (item) {
      return (parseFloat(item) == item);
    });
 
  max = Math.max.apply(null, onlyNumbers);
  min = Math.min.apply(null, onlyNumbers);

let finalResult = {max, min};
return finalResult 
}

