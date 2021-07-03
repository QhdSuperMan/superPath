/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-06-30 16:55:36
 * @LastEditTime: 2021-06-30 17:21:06
 * @info: 描述
 */

// 联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean。
function padLeft(value: string, padding: string | number): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", '5555'); // returns "    Hello world"


// 类型断言 as
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}
var pet: Bird | Fish
if ((pet as Fish).swim) {
  (pet as Fish).swim();
}
else {
  (pet as Bird).fly();
}
