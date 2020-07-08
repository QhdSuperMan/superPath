<template>
  <div>
    {{ sonMessage }}
    <div>
      父组件的 {{ fatherData.id }}
    </div>
  </div>
</template>

<script lang='ts'>
import "reflect-metadata";
import { Component, Prop, Vue, Provide } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  @Prop({
    default: () => {
      return { id: 1 };
    }
  }) fatherData!: object;
  @Provide() sonMessage = "这是子组件";
  sonMethods(msg: object): void {
    console.log(msg);
  }
}
</script>

<style>
</style>