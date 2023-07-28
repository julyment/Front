/* Метод find позволяет осуществлять разного рода поиск в зависимости от параметра, взятого в функции. 
Возможные параметры - item(элемент массива), index, array(массив) */

// let result = arr.find(function(item, index, array))

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

let user = users.find((item) => item.id == 1);

alert(user.name);

//КАК  РАБОТАЮТ МЕТОДЫ ДЛЯ ДАННЫХ? (смотреть заметку)
let obj = [];
obj.soort = () => {};
console.log("Сейчас юудет применение метода");
obj.soort(console.log("Еще что-то выведем"));

// Метод forEach похожа на map в Питоне
let array = [1, 2, 3];
array.forEach((item, index, array) => {
  console.log(`У ${item} индекс ${index} в array`);
});

//При переборе items в массиве, в данном случае перебираются объекты (поэтому можно вызывать всякие методы и свойства)
let users1 = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

// /* Item- объект, можем вернуть свойство/метод по ключу. */
let user1 = users1.find((item) => item.id == 1);
console.log(user.name);

/* Другое описание метода find:
Find - это метод, функция которого хранится в объекте с методами для array.
Так как это функция, то необходиом перердать ей какие-то аргументы.
Стрелочная функция служит для установки условий!  */

//Метод findIndex и findLastIndex

let users2 = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Вася" },
];

// Найти индекс первого Васи
console.log(users2.findIndex((user) => user.name == "Вася")); // так как y нас всего один аргумент в скобках перербор идет по значениям (items)

// Найти индекс последнего Васи
console.log(users2.findLastIndex((user) => user.name == "Вася"));

// Метод filter возвращает после переюора по заданному параметру возвращает МНОЖЕСТВО значений, удовлетворяющих условию в теле функции.
let users3 = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users3.filter((item) => item.id < 3);

console.log(someUsers.length);
console.log(someUsers);

/* Метод map сипользуется для примененеия функции в скобках для каждого возможного параметра */
let lengths = ["Бильбо", "Гэндальф", "Назгул"].map((item) => item.length);
console.log(lengths);

//РАЗЛИЧИЯ МЕЖДУ MAP И FOREACH? (смотреть заметку)
