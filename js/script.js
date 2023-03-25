'use strict';

console.log('arr' + ' - object');
console.log(4 + '5');
//Унарный плюс, превращает 5 в число
console.log(4 + +'5');

//инкремент и декремент
//префиксная форма и постфиксная форма

let incr = 10,
    decr = 10;

//постфиксный вариант
//incr++; 
//это опрератор инкремента - увеличение на единицу
//decr--;
//оператор декремента - унименьшение на единицу

//это префиксный вариант
//++incr
//--decr

//так не работает (потому что сначала возвращает переменную)
//console.log(incr++);
//console.log(decr--);

//а так работает
console.log(++incr);
console.log(--decr);

//% - разделить, результат - остаток
console.log(5%2);
//работает
console.log(2*4 == 8);
//работает
console.log(2*4 == '8');
// === это строгое сравнение, а 8 это строка, поэтому не сработает
console.log(2*4 === '8');
console.log(2*4 === 8);

console.log(2 + 2 * 2 !== '6');

//!= не равно
//!== строго по типу не равно

//означает И
&&
//означает или
||

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);
console.log(isChecked && isClose);

// ! - оператор отрицания

const data = 30;


