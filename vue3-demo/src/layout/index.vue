<template>
  <div class="app-wrapper">
    <div class="side">
      <side-bar></side-bar>
    </div>
    <div class="main-container">
      <nav-bar class="nav-bar"></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import AppMain from './components/appMain.vue'
import NavBar from './components/navBar.vue'
import SideBar from './components/sidebar/index.vue'

defineOptions({
  name: 'Layout'
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100vh;
  min-height: 100%;
  background: #f1f3f4;
  display: flex;

  .side {
    width: 200px;
    background: #ddd;
  }

  .main-container {
    flex: 1;

    .nav-bar {
      height: 60px;
      line-height: 60px;
      background: #742;
      width: 100%;
      flex: 1;
    }
  }
}
</style>
