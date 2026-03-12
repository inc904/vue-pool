<template>
  <div>
    <div id="my-slider" class="slider-list">
      <ul>
        <li
          :class="index === currentIndex ? 'slider-list__item--selected' : 'slider-list__item'"
          v-for="(item, index) in imgList"
          :key="index"
        >
          <img :src="item" alt="" />
        </li>
      </ul>
      <a class="slide-list__next"></a>
      <a class="slide-list__previous"></a>
      <div class="slide-list__control">
        <span class="slide-list__control-buttons--selected"></span>
        <span class="slide-list__control-buttons"></span>
        <span class="slide-list__control-buttons"></span>
        <span class="slide-list__control-buttons"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { imgList } from './assets.ts'

const currentIndex = ref(0)
</script>
