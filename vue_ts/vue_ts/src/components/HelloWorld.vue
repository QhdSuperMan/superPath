<template>
  <div class="hello">
    {{ msg }}
    {{ test }}
    <button @click="sayHello">111</button>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Prop, Vue, Watch,Provide } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 1 }) msg!: string | number | boolean | undefined;
  @Provide() test = '11'
  sayHello(): string {
   this.test += '11'
   return "1"
  }
  @Watch('msg' , {immediate: true, deep: true })
  onMsgeChaneg( val: string, oldVal: string) {
    console.log(val, oldVal)
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
