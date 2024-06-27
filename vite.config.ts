import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { BASE_URL } from './src/config/env';
console.log("🚀 ~ BASE_URL:", BASE_URL)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    // 服务启动时是否自动打开浏览器
    open: false,
    port: 3001, // 服务端口
    proxy: {
      '/api': {
        target: BASE_URL, // 后台服务器地址
        changeOrigin: true, // 是否允许不同源
        secure: true, // 支持https
        rewrite: path => path.replace(/^\/api/, '/')
      }
    }
  },
})
