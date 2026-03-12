<template>
  <div>
    <div class="card-container">
      <div class="card">
        <h2>父组件数据</h2>
        <div class="parent-data">
          <div class="method">
            <h3>原始数据</h3>
            <div class="value-display">message: {{ parentMessage }}</div>
            <div class="value-display">count: {{ parentCount }}</div>
            <div class="value-display">name: {{ parentName }}</div>
            <div class="value-display">title: {{ parentTitle }}</div>
            <div class="value-display">eventProp: {{ eventProp }}</div>
            <div class="value-display">modelValue: {{ modelValue }}</div>
            <div class="value-display">writableValue: {{ writableValue }}</div>
          </div>
          <div class="method">
            <h3>操作</h3>
            <button @click="resetData">重置数据</button>
            <button @click="shuffleData">随机数据</button>
          </div>
        </div>
        <div class="explanation">
          <h2>说明与最佳实践</h2>
          <p>
            在 Vue 中，props
            遵循单向数据流原则，意味着数据从父组件流向子组件，但反之则不行。
          </p>

          <p>
            <strong>直接修改 props</strong>：不推荐，违反 Vue
            的设计原则，会导致代码难以维护和调试，Vue 会在控制台发出警告。
          </p>

          <p>
            <strong>使用 computed 属性</strong>：基于 props 生成新值，但不修改原
            props。适用于需要对props进行转换或计算的场景。
          </p>

          <p>
            <strong>使用 watch</strong>：监听 props
            变化，更新子组件内的本地数据。适用于需要根据props变化执行异步操作或复杂逻辑的场景。
          </p>

          <p>
            <strong>自定义事件</strong
            >：推荐方式，通过事件通知父组件修改数据，保持单向数据流。这是最符合Vue设计理念的方式。
          </p>

          <p>
            <strong>使用 v-model</strong>：Vue 3.4+ 中提供了更简洁的 v-model
            语法，本质上是 modelValue 和 update:modelValue 事件的组合。
          </p>
        </div>
      </div>

      <div class="children-area">
        <button
          :class="tab.id === currentTab ? 'active' : ''"
          v-for="tab in tabs"
          :key="tab.id"
          @click="currentTab = tab.id"
        >
          {{ tab.title }}
        </button>

        <DirectModify :direct-prop="parentMessage" v-show="currentTab === 1" />

        <ComputedProps
          :computed-prop="parentName"
          @update-parent-name="updateParentName"
          v-show="currentTab === 2"
        />

        <WritableComputed
          :computed-prop="writableValue"
          @update-value="writableValue = $event"
          v-show="currentTab === 3"
        />

        <WatchProps :watched-prop="parentTitle" v-show="currentTab === 4" />

        <CustomEvents
          :event-prop="eventProp"
          @update-event="updateEventProp"
          v-show="currentTab === 5"
        />

        <VModelProps
          :model-value="modelValue"
          @update:model-value="updateModelValue"
          v-show="currentTab === 6"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DirectModify from "./DirectModify.vue";
import ComputedProps from "./ComputedProps.vue";
import WatchProps from "./WatchProps.vue";
import CustomEvents from "./CustomEvents.vue";
import VModelProps from "./VModelProps.vue";
import WritableComputed from "./WritableComputed.vue";

const currentTab = ref(1);
const tabs = [
  { id: 1, title: "直接修改" },
  { id: 2, title: "使用 Computed" },
  { id: 3, title: "可写的 Computed" },
  { id: 4, title: "使用 Watch" },
  { id: 5, title: "自定义事件（推荐）" },
  { id: 6, title: "使用 v-model" },
];
const parentMessage = ref("Hello from Parent");
const parentCount = ref(0);
const parentName = ref("Vue Developer");
const parentTitle = ref("Initial Title");
const eventProp = ref("Event Value");
const modelValue = ref("Model Value");
const writableValue = ref("Writable Value");

const updateEventProp = (newValue) => {
  eventProp.value = newValue;
};

const updateModelValue = (newValue) => {
  modelValue.value = newValue;
};

const resetData = () => {
  parentMessage.value = "Hello from Parent";
  parentCount.value = 0;
  parentName.value = "Vue Developer";
  parentTitle.value = "Initial Title";
  eventProp.value = "Event Value";
  modelValue.value = "Model Value";
  writableValue.value = " Writable Value";
};

const shuffleData = () => {
  const messages = [
    "Hello World",
    "Vue is awesome",
    "Props are reactive",
    "One-way data flow",
  ];
  const names = [
    "Vue Developer",
    "Frontend Engineer",
    "Web Designer",
    "Fullstack Developer",
  ];
  const titles = [
    "Initial Title",
    "New Title",
    "Updated Title",
    "Dynamic Title",
  ];

  parentMessage.value = messages[Math.floor(Math.random() * messages.length)];
  parentName.value = names[Math.floor(Math.random() * names.length)];
  parentTitle.value = titles[Math.floor(Math.random() * titles.length)];
  parentCount.value = Math.floor(Math.random() * 100);
};

const updateParentName = (value) => {
  parentName.value = value;
};
</script>
<style scoped></style>
