<template>
  <el-card style="width: 300px;">
    <el-form>
      <p>searchText: {{ searchText }}</p>
      <el-form-item label="searchText:">
        <el-input type="text" v-model="searchText" />
      </el-form-item>
      <el-form-item label="searchText2:">
        <input :model="searchText" @input="searchText = $event.target.value" />
      </el-form-item>
    </el-form>

  </el-card>
  <CustomInput :modelValue="searchText" @update:modelValue="newValue => searchText = newValue" />
</template>

<script setup>
import { ref } from 'vue'
import CustomInput from './customInput.vue'
defineOptions({
  name: 'VModalInComp'
})

let searchText = ref('')

</script>

<style lang="scss" scoped>
</style>
