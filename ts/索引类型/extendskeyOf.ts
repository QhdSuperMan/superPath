/*
 * @Author: your name
 * @Date: 2021-06-30 21:55:42
 * @LastEditTime: 2021-06-30 22:21:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \albb\ts\索引类型\extendskeyOf.ts
 */

// 索引类型
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: number[] = pluck(person, ['age']); // ok, string[]

// 映射属性

type Item = {
  a: string
  b: number
  c: boolean
}

// Item 的所有属性的一个 联合类型
type ItemKeys = 'a' | 'b' | 'c';
// 也可以简写为：
// type ItemKeys = keyof Item;

type Copy = { [K in ItemKeys]: Item[K] };
// 得到 type Copy = { a: string, b: number, c: boolean };
