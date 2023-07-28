// //Заглавная  буква
// let str = "вася";
// alert(str[0].toUpperCase() + str.substring(1));

//Проверка на спам
// function checkSpam(str) {
//   str = str.toLowerCase();
//   return str.includes("viagra") || str.includes("xxx");
// }
// alert(checkSpam("buy ViAgRA now"));
// alert(checkSpam("free xxxxx"));
// alert(checkSpam("innocent rabbit"));

//Усечение строки
// str = prompt("Входящая строка");
// maxlength = prompt("Максимальная длина строки");
// function truncate(str, maxlength) {
//   len = str.length;
//   str > maxlength ? (str = str.slice(0, maxlength - 1) + "...") : str;
//   return str;
// }
// alert(truncate(str, maxlength));
//Выделить число
cost = prompt("Стоимость");
function extractCurrencyValue(cost) {
  cost = cost.slice(1);
  return `Стоимость ${cost} доллара`;
}
alert(extractCurrencyValue(cost));
