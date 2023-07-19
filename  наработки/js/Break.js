let sum = 0;
while (true) {
  let value = +prompt("Введите число", ""); //перевод в число
  if (!value) break; // Не вводим значение, то мы должны прекратить цикл и вывести сумму
  sum += value;
}
alert("Сумма: " + sum);
