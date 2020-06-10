function toggleText() {
  
  let text = document.getElementById('text');
  let button = document.querySelector('.toggle-text-button')
  function action() {
    text.hidden = !text.hidden
   }
  
  button.addEventListener('click', action)
  

}
toggleText()