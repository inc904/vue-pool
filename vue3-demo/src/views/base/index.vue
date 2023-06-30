<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane v-for="item in components" :key="item.name" :label="item.title" :name="item.name">
        <component :is="item.component" />
      </el-tab-pane>
      <!-- <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import vModelInComp from './vModelInComp.vue'

let components = [
  { name: 'vModelInComp', title: '在组件上使用v-model', component: vModelInComp }
]
let activeName = ref('vModelInComp')

defineOptions({
  name: 'BaseVueExercise'
})

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
</style>
