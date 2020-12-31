<template>
  <div>
    <div style='height: 300px;'>
      <h5>父亲区域</h5>
      <p>{{ obj.one }} {{ obj.two }}</p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" v-model:one="obj.one" v-model:two="obj.two" />
    <button @click="test">测试</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { reactive } from "vue";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  setup() {
    var obj = reactive({ one: "vModelOne", two: "vModelOne" });
    function test () {
      obj.one = "00000"
      console.log(obj)
    }
    return {
      obj,
      test
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
