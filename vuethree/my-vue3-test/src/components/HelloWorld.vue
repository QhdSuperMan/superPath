<template>
  <div class="hello">
    <h5>儿子区域</h5>
    <h5>{{ msg }}</h5>
    <p>{{ a }}</p>
    <p>{{ state.id }}</p>
    <input type="text" v-model="a" @input="inputChange">
    <p>
      测试v-model {{ one }} {{ two }}
    </p>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    one: String,
    two: String
  },
  // data () {
  //   return {
  //     a: '111'
  //   }
  // },
  setup(props, { emit }) {
    console.log(props);
    var state = reactive({ id: 1 });
    var a = ref("哈哈哈");
    setTimeout(() => {
      state.id = 5;
      a.value = 9;
    }, 1000);
    function inputChange(e) {
      console.log(e, a);
      emit("update:one", e.target.value + "one");
      emit("update:two", e.target.value + "two");
    }
    return {
      a,
      state,
      inputChange
    };
  }
};
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
