function checkAge(age) {
  if (age >= 18) return true;
  else {
    return confirm("А родители разрешили?");
  }
}
age = prompt("Сколько вам лет?");
if (checkAge) {
  alert("Проход разрешен");
} else {
  alert("Проход воспрещен");
}
function showMovie(age) {
  if (checkAge(age)) return; //сработает как break, когда натолкнулись на исключение
  alert("Сейчас будет кино");
}
