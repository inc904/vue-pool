<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/slider">slider</RouterLink>
        <RouterLink to="/control">control</RouterLink>
        <RouterLink to="/child-props">child-props</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}

.logo {
  width: 50px;
  height: 50px;
}

nav {
  display: flex;
  gap: 10px;
}

nav a {
  display: block;
  padding: 5px;
  text-decoration: none;
  color: #333;
}

nav a:hover {
  color: #000;
  background-color: #ccc;
}
</style>
