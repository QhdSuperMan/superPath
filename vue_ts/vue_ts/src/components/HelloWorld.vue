<template>
  <div class="hello">
    <p>
      计算属性: {{ computedTest }}
    </p>
    <p>
      全局minxin
    </p>
    <button @click="sayHello('ddd')">点击</button>
    <testComponent ref='son' :fatherData='{id: 55}' />
  </div>
</template>

<script lang="ts">
import { demo } from "./demo";
import "reflect-metadata";
import minxi from "./mixin";
import testComponent from "./test.vue";
import { Component, Prop, Vue, Provide, Ref } from "vue-property-decorator";
@Component({
  // 引入子组件
  components: {
    testComponent
  },
  mixins: [minxi]
})
export default class HelloWorld extends Vue {
  @Prop() msg: string | number | boolean | undefined;
  @Provide() test = "11";
  sayHello(): string {
    // this.$Message(1111);
    // this.son.sonMethods(11);
    // @Ref() son: Object;
    // console.log(new minxi())
    return "1";
  }
  message = "Hello!";
  get computedTest() {
    return "computedTest" + this.message;
  }
  @Ref() readonly son!: HTMLElement;

  // @Watch("message", { immediate: true, deep: true })
  // onMsgeChaneg(val: string, oldVal: string) {
  // }
  mounted() {
    demo("ddd", "dsd");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
