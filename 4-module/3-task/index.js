/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  
    for (i = 0; i < table.rows.lenght; i++) 
    
    let position = table.rows[i].cells[3];
    let ageStyle = table.rows[i].cells[1]
    let genderPos = table.rows[i].cells[2]
  {
  //console.log(ageStyle)

 if (age <= 18) {
   table.ageStyle.style.textDecoration = 'line-through' : '';
 };
    
  if (status === true) {
    table.position.classList.add('available')
  } else if (status === true) {
    table.position.classList.add('unavailable')
  } else if (status === '') {
    table.position.setAttribute('hidden','')
  };
    
   if (gender === 'm') {
     table.genderPos.classList.add('male')
   } else if (gender === 'f') {
     table.genderPos.classList.add('female')
   };

    }
 
 highlight(table)
 }






 /*function highlight(table) {
    for (i = 0; i < table.rows.lenght; i++) 
    
    let position = table.rows[i].cells[3]; {
  console.log(position)
if position == true : position.classList.add('aviable') ? false : position.classList.add('unaviable') ? position('') : position.setAttribute('hidden','');
    }
  
  let genderPos = table.rows[i].cells[2]; {
  if genderPos == 'm' : genderPos.classList.ad('male') ? 'f' : genderPos.classList.ad('female');
  }
  
  let ageStyle = table.rows[i].cells[2]; {
  if ageStyle <= '18': ageStyle(style="text-decoration: line-through")
  }


}*/
