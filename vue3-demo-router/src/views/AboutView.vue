<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ person.name }} </p>
    <p>{{ personRef.name }} </p>
    <p>{{ personReactive.name }} </p>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const person = { name: 'Jack1' }
const personRef = ref({ name: 'Jack2' })
const personReactive = reactive({ name: 'Jack3' })
console.log('personRef', personRef.value.name)
console.log('personReactive', personReactive.name)
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
