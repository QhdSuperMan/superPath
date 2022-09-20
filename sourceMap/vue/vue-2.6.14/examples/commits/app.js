/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-06-18 15:38:57
 * @LastEditTime: 2022-02-10 19:23:26
 * @info: 描述
 */
/* global Vue */

var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

/**
 * Actual demo
 */

// const store = new Vuex.Store({
//   state: {
//     count: 1
//   },
//   mutations: {
//     increment(state) {
//       state.count++
//     }
//   }
// })
debugger
var vm = new Vue({

  el: '#demo',
  // store: store,
  data: {
    branches: ['master', 'dev'],
    currentBranch: 0,
    // commits: null
  },

  // filters: {
  //   truncate: function (v) {
  //     var newline = v.indexOf('\n')
  //     return newline > 0 ? v.slice(0, newline) : v
  //   },
  //   formatDate: function (v) {
  //     return v.replace(/T|Z/g, ' ')
  //   }
  // },
  components: {
    test: {
      props: ['branches'],
      template: '<div><p v-for="val in branches" :key >{{ val  }}</p></div>'
    }
    // asyncaaa: function (resolve, reject) {
    //   setTimeout(function () {
    //     // 向 `resolve` 回调传递组件定义
    //     resolve({
    //       template: '<div>I am async!</div>'
    //     })
    //   }, 1000)
    // },
  },
  methods: {
    clickC() {
      this.currentBranch += 1
      this.branches.push(this.currentBranch)
    },
    // fetchData: function () {
    //   var self = this
    //   if (navigator.userAgent.indexOf('PhantomJS') > -1) {
    //     // use mocks in e2e to avoid dependency on network / authentication
    //     setTimeout(function () {
    //       self.commits = window.MOCKS[self.currentBranch]
    //     }, 0)
    //   } else {
    //     var xhr = new XMLHttpRequest()
    //     xhr.open('GET', apiURL + self.currentBranch)
    //     xhr.onload = function () {
    //       self.commits = JSON.parse(xhr.responseText)
    //       console.log(self.commits[0].html_url)
    //     }
    //     xhr.send()
    //   }
    // }
  }
})
console.log(vm)
