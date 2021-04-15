/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-04-15 18:07:16
 * @LastEditTime: 2021-04-15 20:34:58
 * @info: 描述
 */
class Observer {
  constructor(data, vm) {
    this.$data = data
    this.vm = vm
    this.observer(this.$data)
  }
  observer(obj) {
    Object.keys(obj).forEach((key) => {
      var dep = new Dep()
      var value = obj[key]

      if (typeof (obj[key]) === 'object') {
        this.observer(obj[key])
      } else {
        Object.defineProperty(obj, key, {
          get() {
            if (Dep.target) {
              dep.addSub(Dep.target)
            }
            Dep.target = null
            return value
          },
          set(newValue) {
            value = newValue
            dep.notify()
          }
        })
      }
    })
  }
}


class Watcher {
  constructor(expr, vm, cb) {
    this.cb = cb
    this.vm = vm
    this.expr = expr
    this.$data = vm.$data
    this.oldValue = this.getOldVal(expr)
  }
  getOldVal() {
    Dep.target = this;
    let oldVal = this.expr.split('.').reduce((a, b) => {
      return a[b]
    }, this.$data)
    Dep.target = null;
    this.cb()
    return oldVal;
  }
  update() {
    this.cb(this.getDataValue(this.expr))
  }
}

class Dep {
  constructor() {
    this.listeners = []
  }
  addSub(watcher) {
    this.listeners.push(watcher);
  }
  notify() {
    this.listeners.forEach(w => w.update());
  }
}