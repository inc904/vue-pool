<template>
  <div class="card recommended">
    <h2>自定义事件（推荐）</h2>
    <div class="method">
      <h3>通过事件向上传递修改</h3>
      <div class="value-display">
        {{ eventProp }}
      </div>
      <input v-model="localEvent" placeholder="输入新值" />
      <button @click="updateParent">更新父组件</button>
      <p>通过事件通知父组件修改数据，保持单向数据流</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CustomEvents',
  props: {
    eventProp: {
      type: String,
      required: true,
    },
  },
  emits: ['update-event'],
  setup(props, { emit }) {
    const localEvent = ref(props.eventProp)

    const updateParent = () => {
      emit('update-event', localEvent.value)
    }

    return {
      localEvent,
      updateParent,
    }
  },
}
</script>

<style scoped>
.recommended {
  border-left: 5px solid #28a745;
}
</style>
