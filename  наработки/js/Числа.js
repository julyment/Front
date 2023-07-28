// function readNumber() {
//   let num;
//   do {
//     num = prompt("Введите число", 0);
//   } while (!isFinite(num));
//   if (num === null || num === "") return null;
//   return +num;
// }
// alert(`Число: ${readNumber()}`);

//Тут только на ввод чисел
// let num = prompt("Введите число");
// function readNumber() {
//   if (+num == null || num == "") return null;
//   return +num;
// }
// alert(`Ваше число: ${readNumber()}`);

//А тут можно обработать текст
// function readNumber() {
//   let num = prompt("Введите число:");
//   if (+num == null || num == "") return null; //не сможем сравнить с NaN, NaN равняется только самому себе
//   if (isNaN(num)) return readNumber();
//   return +num;
// }
// alert(`Ваше число: ${readNumber()}`);

//Случайное число от min до max
// min = Number(prompt("Нижняя граница:"));
// max = Number(prompt("Верхняя граница:"));
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }
// alert(random(min, max)); //не забывать указывать параметры

//Случайное цеое число от min до max
// min = Number(prompt("Нижняя граница:"));
// max = Number(prompt("Верхняя граница:"));
// function randomInteger(min, max) {
//   return Math.trunc(min + Math.random() * (max - min));
// }
// alert(randomInteger(min, max));
