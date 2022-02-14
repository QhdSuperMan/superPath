
// function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {   //对入参增加约束
//   return names.map(n => o[n]);    //过滤的代码不变
// }

// interface Person {
//     name: string;
//     age: number;
// }
// let person: Person = {
//     name: 'Jarid',
//     age: 35
// };

// let strings: Array<string | number> = pluck(person, ['name','age']); // ok, ["Jarid"]

// console.log(strings)




function a(num: string) {
  return num
}
type ReturnTypes<T extends (...args: any) => any> = T extends (...args: any) => infer R ? unknown : void;  
type b = typeof a
type aaa = ReturnTypes<typeof a>

