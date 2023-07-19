//Обращение через [] может происходить, если ключ был уже создан
// let obj = {};
// let namee = 'namee'
// let surname = 'surname'
// obj[namee] = 'John';
// obj[surname] = 'Smith';
// obj[namee] = 'Pete';
// delete obj[namee];
// console.log(obj[surname])

// let obj = {};
// obj.namee = 'John';
// obj.surname = 'Smith';
// obj.namee = 'Pete';
// delete obj.namee;
// console.log(obj.surname)

//Проверка на пустоту
// let schedule = {key1:'что-то там есть',}
// function isEmpty(){
//     for (let i in schedule){
//         return false;
//     }
//     return true;
// }
// console.log(isEmpty(schedule))

//Сумма свойств объекта
// let salaries = {John: 100, Ann: 160, Pete: 130};
// let summ = 0;
// function summProp(){
//     for(let i in salaries){
//         summ += salaries[i];
//     }
//     return summ
// }
// console.log(summProp())

//Умножение числовых свойств (просто алгоритм)
// let menu = {width: 200, height:300, title:'My menu'}
// for (let i in menu){
//     (typeof(menu[i]) == 'number') ? menu[i] = 2*menu[i] : menu[i];
//     }
// alert(JSON.stringify(menu))

//Умножение числовых свойств
// let menu = {width: 200, height:300, title:'My menu'}
// function multiplyNumeric(obj){
//     for (let i in obj){
//         (typeof(obj[i]) == 'number') ? obj[i] = 2*obj[i] : obj[i];
//     }
//     return obj;
// }
// alert(JSON.stringify(multiplyNumeric(menu)))

// let user = {
//     name: "John",
//     age: 30
//   };

//   let clone = Object.assign({}, user); //сращение нескольких объектов в один
//   alert(JSON.stringify(clone))

// let user = {
//     name: "John",
//     age: 30
//   };

//   user.sayHi = function() { //метод объекта заключается в наличии функции
//     alert("Привет!");
//   };

// //   user.sayHi();
// alert(JSON.stringify(user))

//Функция-конструктор
// function UserInfo(){
//     // this создается  пустой объект
//     this.name;
//     this.age = 30;
//     // return this - подразумевается
// }
// console.log(new UserInfo('Вася'))
// console.log(new UserInfo('Лена'))
//Задачки
let userInfo = {
  name: "Вася",
  age: 30,
};
let user = userInfo;
user.age = 45;

console.log(userInfo.age);
