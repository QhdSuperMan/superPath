<template>
  <div id="app">
    11125
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      axios
        .get("/news", {
          params: {
            ID: 12345
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
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
