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
    this.elem = document.createElement('table');
    let button = '<td><button>X</button></td>';
    button.addEventListener ('click', deleteTr);
    this.maketable(rows);
    
  }
  
   

    maketable (rows) { 
        const list = rows.map(data => `
        <tr>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.salary}</td>
        <td>${data.city}</td>
        <td><button>X</button></td>
        </tr>
        `).join('')
        this.elem.innerHTML = `
    <table>
    <thead>
      <tr>
        <td>Имя</td>
        <td>Возраст</td>
        <td>Зарплата</td>
        <td>Город</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      ${list}
    </tbody>
    </table>
    `;
    }
    function deleteTr () {

      let deleteEvent = target.colsest('tr')
      deleteEvent.remove
    }

    
  }
