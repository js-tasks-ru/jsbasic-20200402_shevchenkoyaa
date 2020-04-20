/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let salary = data
  .filter((employe) => employe.age <= age)
  .map((employe) => employe.name + ', ' + employe.balance)
  .join('\n')
  return salary
}
