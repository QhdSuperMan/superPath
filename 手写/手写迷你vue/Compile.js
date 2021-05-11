/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-04-15 15:46:53
 * @LastEditTime: 2021-04-16 10:04:07
 * @info: 描述
 */
class Complie {
  constructor(el, vm) {
    this.vm = vm
    this.$data = vm.$data
    this.$el = this.getRootDom(el)
    this.fragment = this.getFragment(this.$el)
    this.complie(this.fragment)
    setTimeout(() => {
      this.$el.appendChild(this.fragment)
    }, 50)
  }
  getFragment(el) {
    var fragment = document.createDocumentFragment();
    var child = null
    while (child = el.firstChild) {
      fragment.appendChild(child)
    }
    return fragment
  }
  getRootDom(el) {
    if (this.isNode(el)) {
      return el
    } else {
      return document.querySelector(el)
    }
  }
  getDataValue(str) {
    return str.split('.').reduce((a, b) => {
      return a[b]
    }, this.$data)
  }
  setDataValue(expr, val) {
    return expr.split('.').reduce((data, currentVal, index, arr) => {
      if (index == arr.length - 1) {
        data[currentVal] = val;
      }
      return data[currentVal];
    }, this.$data)
  }
  complieElement(node) {
    [...node.attributes].forEach(val => {
      const { name, value } = val
      if (name === 'v-model') {
        var that = this
        new Watcher(value, this.vm, (val) => {
          node.value = val
        })
        node.addEventListener('input', function (val) {
          that.setDataValue(value, val.target.value)
        })
      }
      if (name === 'v-text') {
        new Watcher(value, this.vm, (val) => {
          node.innerText = val
        })
      }
    })
  }
  complieText(node) {

  }
  complie(node) {
    var childNodes = node.childNodes
    childNodes.forEach(node => {
      if (this.isNode(node)) {
        this.complieElement(node)
      } else {
        this.complieText(node)
      }

      if (node.childNodes.length) {
        this.complie(node)
      }
    })
  }
  isNode(node) {
    return node.nodeType === 1
  }
}