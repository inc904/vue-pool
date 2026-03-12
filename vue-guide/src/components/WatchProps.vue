<template>
  <div class="card">
    <h2>使用 Watch</h2>
    <div class="method">
      <h3>监听 props 变化</h3>
      <div class="value-display">
        {{ localWatched }}
      </div>
      <input v-model="localWatched" placeholder="输入新值" />
      <p>通过监听 props 更新本地数据，修改不会影响父组件</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'WatchProps',
  props: {
    watchedProp: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const localWatched = ref(props.watchedProp)

    watch(
      () => props.watchedProp,
      (newVal) => {
        localWatched.value = newVal
      },
    )

    return {
      localWatched,
    }
  },
}
</script>

<style scoped>
input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin: 8px 0;
  width: 100%;
  font-size: 1rem;
}
</style>
