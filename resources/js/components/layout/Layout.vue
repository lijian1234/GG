<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="2">图标</el-col>
        <el-col :span="22">
          <nav-menu></nav-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <tabs></tabs>
    </el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
  import navMenu from '../navigationBar/NavMenu.vue'; 
  import tabs from '../tab/Tabs.vue';
  export default {
    components: {
      navMenu,
      tabs
    }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>