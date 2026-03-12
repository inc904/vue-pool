<script setup lang="ts">
defineOptions({
  name: 'simple-slider',
})

import { onMounted, ref } from 'vue'
import { imgList } from './assets.ts'
const currentIndex = 0

class Slider {
  container: HTMLElement | null
  items: NodeListOf<Element>

  constructor(id: string) {
    this.container = document.getElementById(id)

    if (this.container) {
      this.items = this.container.querySelectorAll(
        '.slider-list__item, .slider-list__item--selected',
      )
    } else {
      this.items = document.querySelectorAll('') // Empty NodeList as fallback
    }
  }

  getSelectedItem(): Element | null {
    if (!this.container) return null
    const selected = this.container.querySelector('.slider-list__item--selected')
    return selected
  }

  getSelectedItemIndex(): number {
    return Array.from(this.items).indexOf(this.getSelectedItem() as Element)
  }

  slideTo(idx: number) {
    if (!this.container) return
    const selected = this.getSelectedItem()

    if (selected) {
      selected.className = 'slider-list__item'
    }
    const item = this.items[idx]
    if (item) {
      item.className = 'slider-list__item--selected'
    }
  }

  slideNext() {
    console.log(this.container)
    if (!this.container) return
    const currentIdx = this.getSelectedItemIndex()
    const nextIdx = (currentIdx + 1) % this.items.length
    this.slideTo(nextIdx)
  }

  slidePrevious() {
    if (!this.container) return
    const currentIdx = this.getSelectedItemIndex()
    const previousIdx = (currentIdx - 1 + this.items.length) % this.items.length
    this.slideTo(previousIdx)
  }
}

const slider = ref<Slider | null>(null)

onMounted(() => {
  slider.value = new Slider('my-slider')
  setInterval(() => {
    // slider.value?.slideNext()
  }, 1000)
})
</script>

<template>
  <div class="">
    <button @click="slider?.slideTo(1)">1</button>
    <button @click="slider?.slideTo(2)">2</button>
    <button @click="slider?.slidePrevious()">Previous</button>
    <button @click="slider?.slideNext()">Next</button>
  </div>
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
  </div>
</template>

<style>
#my-slider {
  position: relative;
  width: 790px;
}

.slider-list ul {
  list-style-type: none;
  position: relative;
  margin: 0;
  padding: 0;
}

.slider-list__item,
.slider-list__item--selected {
  /* 这里使用绝对定位，可以将多张图片重叠在一起，当然要记得给父盒子开相对定位 */
  position: absolute;
  transition: opacity 1s;
  opacity: 0.1;
  text-align: center;
}

.slider-list__item--selected {
  transition: opacity 1s;
  opacity: 1;
}
</style>
