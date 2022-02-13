// {
//   "user/isLogin": number
// }
import { type } from "os";
import { modules } from "./modules";

type getGetter<Module> = Module extends { getters: infer G } ? G : unknown
type getOneGetters<Modules> = {
  [k in keyof Modules]: getGetter<Modules[k]>
}
type oneModules = getOneGetters<typeof modules>

type addStr<P, D> = `${P & string}/${D & string}`
type GetSpliceKey<P, D> = addStr<P, D>
type getTwoModules<Modules> = {
  [K in keyof Modules]: GetSpliceKey<K, keyof Modules[K]>
}
type twoModules = getTwoModules<oneModules>

type getFunc<T, A, B> = T[A & keyof T][B & keyof T[A & keyof T]]

type getThreeModules<T> = {
  [K in getTwoModules<T>[keyof T]]: K extends `${infer A}/${infer B}` ? getFunc<T, A, B> : unknown
}

type therrModules = getThreeModules<oneModules>

type Getters = {
  [K in keyof therrModules]: ReturnType<therrModules[K]>
}

export { Getters }


