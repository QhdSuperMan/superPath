type GetPropsType<T> = T extends { type: infer O } ? GetPropsIsUndefined<O, T> : T
type GetPropsIsUndefined<T, P> = P extends { required: true } ? T : T | undefined

/**
 * @description: 提取props的类型
 * @return {*}
 * @author: wuyurong
 */
export type GetPropsTypes<T> = {
  [i in keyof T]: GetPropsType<T[i]>
}

