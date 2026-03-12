<template>
  <div class="card">
    <h2>可写的 Computed</h2>
    <div class="method">
      <h3>可修改的计算属性</h3>
      <div class="value-display">
        {{ displayValue }}
      </div>
      <input v-model="editableValue" placeholder="输入新值" />
      <button @click="applyModification">应用修改</button>
      <div>
        <button @click="transformValue('uppercase')">转为大写</button>
        <button @click="transformValue('lowercase')">转为小写</button>
        <button @click="transformValue('reverse')">反转</button>
      </div>
      <p>通过方法修改基于props的计算值</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
let props = defineProps({
  computedProp: {
    type: String,
    required: true,
  },
});

let emit = defineEmits(["update-value"]);

const editableValue = ref("");

const displayValue = computed(() => props.computedProp);

const applyModification = () => {
  if (editableValue.value.trim()) {
    emit("update-value", editableValue.value);
    editableValue.value = "";
  }
};

const transformValue = (operation) => {
  let newValue = props.computedProp;

  switch (operation) {
    case "uppercase":
      newValue = newValue.toUpperCase();
      break;
    case "lowercase":
      newValue = newValue.toLowerCase();
      break;
    case "reverse":
      newValue = newValue.split("").reverse().join("");
      break;
  }

  emit("update-value", newValue);
};
</script>
