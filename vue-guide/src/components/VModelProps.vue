<template>
  <div class="card recommended">
    <h2>使用 v-model</h2>
    <div class="method">
      <h3>v-model 双向绑定</h3>
      <div class="value-display">
        {{ modelValue }}
      </div>
      <input v-model="localModel" placeholder="输入新值" />
      <button @click="updateModel">更新</button>
      <p>使用 v-model 实现双向绑定（Vue 3.4+ 语法）</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'VModelProps',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const localModel = ref(props.modelValue)

    const updateModel = () => {
      emit('update:modelValue', localModel.value)
    }

    return {
      localModel,
      updateModel,
    }
  },
}
</script>
