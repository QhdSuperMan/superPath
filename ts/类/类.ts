// class Animal {
//     public name: string;
//     protected protectedN: string;
//     private privateN: string;
//     constructor(theName: string) { this.name = theName; }
// }

// class Dog extends Animal {
//   constructor () {
//     super('1')
//   }
// }

//? private的兼容性问题
/**
 *
class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
  constructor() { super("Rhino"); }
}

class Employee {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.

*/

// ? protected的构造函数不可以被new 但是可以被继承
/**
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}
// ? 参数属性改造(默认赋值)
class Person {
  constructor(readonly name:string){};
}
var ad:Person = new Person("1111")
 */

