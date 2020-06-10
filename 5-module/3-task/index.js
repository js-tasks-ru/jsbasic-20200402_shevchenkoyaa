function initCarousel() {
let rightClickButton = document.querySelector('.carousel__arrow_right');
let leftClickButton = document.querySelector('.carousel__arrow_left');
let carousel = document.querySelector('.carousel__inner');
let counter = 0 
let offsetWidth = carousel.offsetWidth
leftClickButton.style.display = 'none'


rightClickButton.addEventListener('click', counterPlus);
rightClickButton.addEventListener('click', sliding);
rightClickButton.addEventListener('click', arrowHide);
leftClickButton.addEventListener('click', counterMinus);
leftClickButton.addEventListener('click', sliding);
leftClickButton.addEventListener('click', arrowHide);


function counterPlus() {
   if (counter < 3) {
    counter++;
   }
   console.log(counter)
    }
function counterMinus() {
      if (counter > 0) {
           counter--;
        }
        console.log(counter)
    }

function sliding() {
   if (counter >= 0) {
      carousel.style.transform = `translateX(${-offsetWidth * counter}px)`
   }
} 


function arrowHide() {
   rightClickButton.style.display = ''
   leftClickButton.style.display = ''
   if (counter === 0) {
     leftClickButton.style.display = 'none'
   } else if (counter === 3) {
     rightClickButton.style.display = 'none'
   }
 }

 console.log(offsetWidth)
 console.log(counter)
}
