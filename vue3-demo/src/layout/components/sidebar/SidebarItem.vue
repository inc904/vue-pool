<template>
  <div>
    <app-link v-if="!item.meta.hidden" :to="item.path">
      <el-menu-item>
        <el-icon><icon-menu /></el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </app-link>

    <el-sub-menu index="1" v-else>
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

  </div>
</template>

<script setup >
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import appLink from './Link.vue'
defineOptions({
  name: 'SideBarItem'
})
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  }
})


</script>

<style scoped>
</style>
