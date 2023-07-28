// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     //Как рабоатает .toPrimitive:
//     this[Symbol.toPrimitive] = (hint) => {
//      //hint: 'number' ,'string ,'default'
//      if (hint === 'string'){
//         return this.name
//      }
//      if (hint === 'number'){
//         return this.age
//      }
//     }
// }
//Это функция-конструктор
function obj(name, age) {
  //создаем свойства и один метод объекта
  this.name = String(name);
  this.age = String(age);
  this["Правило преобразования к примитиву"] = (hint) => {
    if (hint === "string") {
      return this.name;
    }
    if (hint === "number") {
      return this.age;
    }
    return "default";
  };
}

dave = new obj("Dave", 30);
mike = new obj("Mike", 45);

console.log(Number(dave));
