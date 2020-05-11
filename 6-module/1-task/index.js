/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    let table = document.createElement('table');
    let button = '<td><button>X</button></td>';
    let tr = target.closest('tr')
   // button.addEvenlistener ('click', delete)

    for (let prop in rows) {
      table.innerHTML = `  
      <tr>
      <td>${prop.name}</td>
      <td>${prop.age}</td>
      <td>${prop.salary}</td>
      <td>${prop.city}</td>
      <td><button>X</button></td>
      </tr>`;

    }
    
    /* function delete () {
      tr.remove()
    }*/

  }
}
