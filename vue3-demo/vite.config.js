import { fileURLToPath, URL } from 'node:url'
// import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'

/** 路径查找 */
// const pathResolve = (dir) => {
//   return resolve(__dirname, '.', dir)
// }

const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url)),
}

// const alias =  {
//   '@': pathResolve('src'),
// }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  resolve: {
    alias,
  },
})
