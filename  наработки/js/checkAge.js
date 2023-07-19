// //С тернарным выражением
// function checkAge(age){
//     return (age < 18) ? alert('Родители разрешили?') : true
// }
// //С опертором ИЛИ(||)
// function checkAge(age){
//     return (age>18) || confirm('Родители разрешили?')//от confirm зависит выполнение функции
// }
// alert(checkAge(Number(prompt('Какой ваш возраст?'))))
//Функция минимума
// a = +prompt('Первое число:');
// b = +prompt('Второе число:');
//С тернарным выражением
// function minimum(a,b){
//     return (a<b) ? a:b;
// }
// alert(minimum(a,b))
//Через if
// function minimum(a,b){
//     if (a<b){
//         return a;
//     }
//     return b;
// }
// alert(minimum(a,b))
x = +prompt("Число?");
n = +prompt("В какую степень возвести?");
function pow(x, n) {
  return x ** n;
}
alert(pow(x, n));
