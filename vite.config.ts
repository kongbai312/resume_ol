import { fileURLToPath, URL } from 'node:url'

import { defineConfig , loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

//自动引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//允许对父传子 props 进行解构
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      //允许解构
      ReactivityTransform(),
      //自动引入
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
        dts: 'src/auto-import.d.ts',
        //自动引入element-plus
        resolvers: [ElementPlusResolver()]
      }),
      //自动引入element-plus
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    //github部署
    base: env.MODE === 'production' ? '/resume_ol/' : './',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      open: true,
      port: 8080
    }
  })
}
