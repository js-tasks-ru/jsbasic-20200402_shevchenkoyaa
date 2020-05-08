function initCarousel() {
let rightClickButton = document.querySelector('.carousel__arrow_right');
let leftClickButton = document.querySelector('.carousel__arrow_left');
let carousel = document.querySelector('.carousel__inner');
let counter = 0 
let offsetWidth = carousel.offsetWidth


rightClickButton.addEventListener('click', counterPlus);
leftClickButton.addEventListener('click', counterMinus);

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
   if (counter === 0) {
      carousel.style.transform = 'translateX(0px)'
   } else if (counter === 1) {
      carousel.style.transform = `translateX(988px)`
   } else if (counter === 2) {
      carousel.style.transform = `translateX(${988 * 2}px)` 
   } else if (counter === 3) {
      carousel.style.transform = `translateX(${988 * 3}px)` 
   }
} 

function arrowHide() {
   if (counter === 0) {                      
      leftClickButton.style.display = 'none'
   } else if (counter === 3) {
      rightClickButton.style.display = 'none'
   }
   
}

 console.log(offsetWidth)
 console.log(counter)
}
