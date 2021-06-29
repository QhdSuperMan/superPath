<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-06-18 15:51:20
 * @LastEditTime: 2021-06-22 15:05:16
 * @info: 描述
-->
<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment1">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: {
    ...mapMutations({
      'increment1': 'increment'
    })
    // ...mapActions([
    //   'increment',
    //   'decrement',
    //   'incrementIfOdd',
    //   'incrementAsync'
    // ])
  }
}
</script>
