let x: [string, number, any] = ['4',41, {}]
var a: number[] = [1]
var b: Array<number> = [1]

enum Color {Red = 1, Green = 2, Blue = 4}


function f({ a="", b=0 } = {}): void {
  console.log(a,b)
}