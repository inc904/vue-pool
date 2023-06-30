import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './modules/home.js'
import { ascending } from './utils.js'
const modules = import.meta.glob(['./modules/*.js'], {
  eager: true,
})

console.log('modules', modules)
// const routes = [Home]

/** 原始静态路由（未做任何处理） */
const routes = []

Object.keys(modules).forEach((key) => {
  routes.push(modules[key].default)
})

console.log('routes', routes)
console.log('routes2', ascending(routes),)


export const constantRoutes = [...routes]

const router = createRouter({
  history: createWebHashHistory(),
  routes: ascending(routes),
})

export default router
