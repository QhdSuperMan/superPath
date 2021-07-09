/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-07-07 16:31:23
 * @LastEditTime: 2021-07-07 16:50:40
 * @info: 描述
 */
export const state = () => ({
  list: [1]
})
export const getters = () => {
  getList: state =>  []
}
export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}