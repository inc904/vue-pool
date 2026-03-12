<template>
  <div class="card not-recommended">
    <h2>直接修改（不推荐）</h2>
    <div class="method">
      <h3>直接修改 props</h3>
      <div class="value-display">
        {{ directProp }}
      </div>
      <button @click="directProp += '!'" class="warning">添加感叹号!</button>
      <button @click="directProp = directProp.toUpperCase()" class="warning">
        转为大写
      </button>
      <p class="warning">
        警告：这会修改 props，违反单向数据流原则，Vue 会发出警告
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectModify",
  props: {
    directProp: {
      type: String,
      required: true,
    },
  },
  // 注意：在Vue 3中，直接修改props会触发警告
  // 这个组件仅用于演示不推荐的做法
  // [Vue warn] Set operation on key "directProp" failed: target is readonly.
};
</script>

<style scoped>
.not-recommended {
  border-left: 5px solid #dc3545;
}
.warning {
  color: #fff;
  font-size: 14px;
  margin-top: 8px;
  font-weight: 500;
}
button.warning {
  background: #dc3545;
}
button.warning:hover {
  background: #bd2130;
}
</style>
