/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-03-03 13:36:30
 * @LastEditTime: 2022-03-03 13:37:49
 * @info: 描述
 */

type A = {
	a?: string | number;
	d: string;
	e: string;
}
type FF = (a:string) => number;


type FFF = Parameters<FF>

type D = Exclude<"a" | "c", 'a' | 'd'> // type D = "c"
type DD = Extract<"a" | "c" | "e", 'a' | 'd'> // type D = a
type DDD = Test<"a" | "c", 'a' | 'd'>
type DDDD = Test1<"a" | "c", 'a' | 'd'>
type Test<T, U> = T & U
type Test1<T, U> = T | U

type G = Record<keyof A, string>



type BB = 'd'






type F = Omit<A, BB>
// type F = {
// 	a?: string | number;
// }
type E = Required<A>
type B = Pick<A, "a"> 
// type B = {
// 	a: string | number;
// }
type C = keyof A
type Keys = keyof A; // 等效于 "name" | "age" | "id"

// 此时 Man 类型与 Person 相等
type Man = {
  [key in Keys]: A[key];
}

