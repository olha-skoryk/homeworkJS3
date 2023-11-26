//1) Знайти суму чисел у диапазоні від 1 до 100.

let sum = 0;
let i = 1;
while(i <= 100){
  sum += i;
  i++;
};
console.log(sum);

sum = 0;
do {
  sum += i;
  i++;
} while(i <= 100);
console.log(sum);

sum = 0;
for(let j = 1; j <= 100; j++) {
  sum += j;
}
console.log(sum);

/*2) Пропонувати користувачу розв'язувати рівняння 
 (2 + 2 * 2) до тих пір, поки користувач не надасть правильну відповідь*/

let answer = 0;
while(true) {
  answer = +prompt("Розв'яжіть рівняння (2 + 2 * 2)");
  if(answer === 6) {
    alert('Відповідь правильна');
    break;
  }
}

do {
  answer = +prompt("Розв'яжіть рівняння (2 + 2 * 2)");
} while(answer != 6)

for(;true;)
{
  answer = +prompt("Розв'яжіть рівняння (2 + 2 * 2)");
  if(answer === 6) {
    alert('Відповідь правильна');
    break;
  }
}

let availableAttempts = 5;
while (availableAttempts > 0) {
  availableAttempts--;

  answer = +prompt("Розв'яжіть рівняння (2 + 2 * 2)"); 

  if (answer === 6) {
    alert('Відповідь правильна');
    break;
  } else if(availableAttempts === 0) {
    alert('Правильна відповідь: 6');
  }
}

//3) Створити функцію, яка буде приймати два числа, та буде повертати значення першого числа у ступені другого. Заборонено використовувати оператор ** та Math.pow(); Ступінь може бути позитивною або нульовою

const power = function (num, pow) {
  let result = 1;
  for(let i = 1; i <= pow; i++) {
    result *= num; 
  }
  
  return result;
}
console.log(power(2,2));

// const power2 = function (num, pow) {
//   let result = 1;
//   for(let i = -1; i >= pow; i--) {
//     result /= num; 
//   }
  
//   return result;
// }
// console.log(power2(2,-2));

const power3 = function (num, pow) {
  let result = 1;
  if(pow >= 0) {
    for(let i = 1; i <= pow; i++) {
      result *= num; 
    }
  } else {
    for(let i = -1; i >= pow; i--) {
      result /= num; 
    }
  }
  return result;
}
console.log(power3(3,2));
console.log(power3(3,-2));

/*Bonus level

Розв'язати перше та друге завдання за допомогою кожного циклу.
Переробити друге завдання так, щоб у користувача була певна кількість спроб, після сплиття яких користуачу показали правильну відповідь та припинили питати значення
Доробити третю задачу так, щоб вона приймала в якості ступені і негативні значення.*/
