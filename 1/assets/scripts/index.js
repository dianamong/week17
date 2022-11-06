const inputFullName = document.querySelector("#fullName");
const inputSurname = document.querySelector("#surname");
const inputName = document.querySelector("#name");
const inputMiddleName = document.querySelector("#middleName");
const transform = document.querySelector(".btn");

transform.addEventListener("click", () => {
  let fullName = document.querySelector("#fullName").value;
  //Замена лишних пробелов одним пробелом,убирает пробелы в начале и конце строки
  let fullNameTrim = fullName.replace(/\s+/g, ' ').trim();
  console.log(fullNameTrim);
  //Преобразовывает строку в массив по пробелам
  let fullNameSplit = fullNameTrim.split(" ");
  console.log(fullNameSplit);
  //Исправление регистра
  for (let i = 0; i < fullNameSplit.length; i++) {
    let userName = fullNameSplit[i];
    let lower = userName.toLowerCase();
    let firstLetter = lower.slice(0,1);
    let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
    console.log(capitalized);
    fullNameSplit[i] = capitalized;
    //console.log(fullNameSplit[i]);
    inputSurname.value = fullNameSplit[0];
    inputName.value = fullNameSplit[1];
    inputMiddleName.value = fullNameSplit[2];
  }
});
