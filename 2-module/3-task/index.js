let calculator = {
 a: 3,
 b: 5, 
};
  
   calculator.read = function (read) {
     return (this.a, this.b);
   }; 
   calculator.sum = function (sum) {
     return (this.a + this.b);
   };
   calculator.mul = function (mul) {
     return (this.a * this.b)
   } 

 

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
