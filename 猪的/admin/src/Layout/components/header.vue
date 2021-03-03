<template>
  <el-header class="heaer">
    <div class="title">通利达租赁管理平台</div>
    <div></div>
  </el-header>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.heaer {
  background-color: #fff;
  display: -webkit-flex;
  display: flex;
  padding: 0;
  margin: 0;
  .title {
    background-color: #3a49e8;
    width: 210px;
    display: -webkit-flex;
    display: flex;
    // -webkit-justify-content: center;
    -webkit-align-items: center;
    // justify-content: center;
    align-items: center;
    color: #fff;
	font-size: 18px;
	padding-left: 20px;
	font-weight: bold;
  }
}
</style>

<style lang="less">
#app {
  .el-header {
    padding: 0px;
  }
}
</style>