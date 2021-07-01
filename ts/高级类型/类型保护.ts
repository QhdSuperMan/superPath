/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-06-30 17:24:38
 * @LastEditTime: 2021-06-30 17:33:49
 * @info: 描述
 */
//! 类型断言保护 as
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

//! typeof类型保护
function padLeft(value: string | number) {
  if (typeof value === 'string') {
    return 'string'
  }
  if (typeof value === 'number') {
    return 'number'
  }
}
padLeft(1)

//! instanceof的右侧要求是一个构造函数，TypeScript将细化为：
//此构造函数的 prototype属性的类型，如果它的类型不为 any的话
//构造签名所返回的类型的联合
