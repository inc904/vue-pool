<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOen" @close="handleClose">
      <sidebar-item v-for="route in _constantRoutes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>

<script setup>
import { constantRoutes } from '@/router'
import sidebarItem from '@/layout/components/sidebar/SidebarItem.vue'

defineOptions({
  name: 'SideBar'
})
const _constantRoutes = constantRoutes



const handleOen = (key, keyPath) => { console.log(key, keyPath) }
const handleClose = (key, keyPath) => { console.log(key, keyPath) }

</script>

<style lang="scss" scoped>
</style>
