//Функция, которая преобразует аргументы в свойства объектов
function makeObject(key1, key2) {
  return {
    [key1]: key1,
    [key2]: key2,
  };
}
let a = "какой-то ключ1";
let b = "какой-то ключ2";
let obj = makeObject([a], [b]);
alert(obj[a]);

// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age
//     };
//   }

//   let user = makeUser("John", 30);
//   alert(user.name);
