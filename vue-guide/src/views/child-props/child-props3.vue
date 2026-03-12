<!-- <script setup>
const formData = defineModel('form')
</script>

<template>
  <div>
    <p>formData:{{ formData }}</p>
    <input v-model="formData" />
    <slot />
  </div>
</template> -->
<script setup lang="ts">
/**
const model = defineModel({
  default: {
    name: 'Tom'
  }
})
 */
const props = defineProps(['formState', 'score', 'account'])


const school = defineModel('school')
/**
function update() {
  model.value.name += '!'
}
*/

console.log('props', props)
</script>

<template>
  <div>
    <input v-model="formState.username" />
    age:{{ formState.password }}
    <button @click="formState.password++">Increment</button>



    score:{{ score }}
    <button @click="score++">Increment</button>

    account:{{ account }}
    <button @click="account = 'tom2'">change account </button>



    school:{{ school }}
    <button @click="school = 'tom2'">change account </button>

    <!-- <input v-model="account" /> -->
    <!-- 
      v-model cannot be used on a prop, because local prop bindings are not writable.
      Use a v-bind binding combined with a v-on listener that emits update:x event instead.
     -->

    <!-- <div>Parent bound v-model is: {{ model }}</div> -->
    <!-- <button @click="update">Increment</button> -->
  </div>
</template>