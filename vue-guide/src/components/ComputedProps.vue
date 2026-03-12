<template>
  <div class="card">
    <h2>使用 Computed</h2>
    <div class="method">
      <h3>计算属性</h3>
      <div class="value-display">
        {{ enhancedComputed }}
      </div>
      <p>基于 props 生成新值，但不修改原 props</p>

      <h3>使用计算属性的setter修改值</h3>
      <input type="text" v-model="enhancedComputedSetter" />

      <h3>结合ref和computed修改值</h3>
      <div class="value-display">originalValue: {{ originalValue }}</div>
      <input type="text" v-model="localValue" />
      <button @click="resetToOriginal">Reset</button>
      <button @click="saveChanges">Save</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  computedProp: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update-parent-name"]);

// 1. 计算属性 显示值
const enhancedComputed = computed(() => {
  return props.computedProp + " (computed:show)";
});
// 2. 计算属性setter 修改值
const enhancedComputedSetter = computed({
  get: () => `${props.computedProp}`,
  set: (newValue) => {
    emits("update-parent-name", newValue);
  },
});

// 3. 结合ref和computed修改值， 和《可写的computed》 一样，都是
//  1. 使用 computed 获取值，
//  2. 使用 一个 ref 值 创建一个可以修改的值， 需要修改的时候，使用emit触发父组件的方法，更新父组件传递的props
const localValue = ref(props.computedProp);

// 监听props变化，更新本地值
const originalValue = computed(() => props.computedProp);

const resetToOriginal = () => {
  localValue.value = props.computedProp;
};

const saveChanges = () => {
  emits("update-parent-name", localValue.value);
};
</script>
