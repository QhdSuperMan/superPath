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
//? 存取器 类的 get set  
/**
class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    this._fullName = newName + '哈哈'
  }
}
var a: Employee = new Employee()
a.fullName = "5"
 */
//? 静态属性 可以直接访问到
/**
class Grid {
    static origin = {x: 0, y: 0};
}
console.log(Grid.origin)
 */
//? 抽象类
/**
 *
abstract class Department {
    constructor(public name: string) {
    }
    public a:number = 1
    abstract printMeeting(): void; // 必须在派生类中实现
}
abstract class two extends Department {
    constructor(public name: string) {
      super("1")
    }
    public b:number = 1
}
class Test extends two{
  constructor () {
    super("1")
  }
  printMeeting () {

  }
}
var a = new Test()
console.log(a)
 */
//? 高阶用法  类赋值
/**
 *
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}
let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
 */
