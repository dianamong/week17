let array = [];
const generate = document.querySelector(".button");
let result = document.querySelector("#result");
let max = document.querySelector("#max");
let min = document.querySelector("#min");
let medium = document.querySelector("#medium");
let sum = document.querySelector("#sum");
let mult = document.querySelector("#mult");

function random(min, max) {
  // получить случайное число от min до max
  return Math.floor(min + Math.random() * (max - min));
}

generate.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    array.push(random(-10, 10));
  }
  console.log(array);
  result.textContent = `Сгенерировали: ${array}`;

  let maxNumber = Math.max.apply(null, array);
  max.textContent = `Максимальное число: ${maxNumber}`;

  let minNumber = Math.min.apply(null, array);
  min.textContent = `Минимальное число: ${minNumber}`;

  let sumNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    sumNumbers += array[i];
  }
  sum.textContent = 'Сумма:' + ' ' + sumNumbers;

  let mediumNumber = sumNumbers / array.length;
  medium.textContent = 'Среднее арифметическое:' + ' ' + mediumNumber;

  let multNumbers = array.reduce((a, b) => a * b);
  mult.textContent = 'Произведение чисел:' + ' ' + multNumbers;
});