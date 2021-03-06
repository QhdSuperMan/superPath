/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-05 15:14:19
 * @LastEditTime: 2021-03-05 16:21:09
 * @info: 描述
 */
interface Ref<T> {
  value: T
}

function ref<T>(value: T): Ref<T> {
  return { value: value }
}
const foo = ref<string | number>('foo')

