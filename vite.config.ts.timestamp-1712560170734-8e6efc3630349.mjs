// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/Vuerelated/personal_resume/node_modules/.pnpm/vite@5.0.11_@types+node@20.11.10_sass@1.72.0/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/Vuerelated/personal_resume/node_modules/.pnpm/@vitejs+plugin-vue@5.0.3_vite@5.0.11_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/Vuerelated/personal_resume/node_modules/.pnpm/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/Vuerelated/personal_resume/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///E:/Vuerelated/personal_resume/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/resolvers.js";
import ReactivityTransform from "file:///E:/Vuerelated/personal_resume/node_modules/.pnpm/@vue-macros+reactivity-transform@0.4.3_vue@3.4.15/node_modules/@vue-macros/reactivity-transform/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/Vuerelated/personal_resume/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    //允许解构
    ReactivityTransform(),
    //自动引入
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
      //自动引入element-plus
      resolvers: [ElementPlusResolver()]
    }),
    //自动引入element-plus
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    open: true,
    port: 8080
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxWdWVyZWxhdGVkXFxcXHBlcnNvbmFsX3Jlc3VtZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcVnVlcmVsYXRlZFxcXFxwZXJzb25hbF9yZXN1bWVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1Z1ZXJlbGF0ZWQvcGVyc29uYWxfcmVzdW1lL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcblxuLy9cdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcbi8vXHU1MTQxXHU4QkI4XHU1QkY5XHU3MjM2XHU0RjIwXHU1QjUwIHByb3BzIFx1OEZEQlx1ODg0Q1x1ODlFM1x1Njc4NFxuaW1wb3J0IFJlYWN0aXZpdHlUcmFuc2Zvcm0gZnJvbSAnQHZ1ZS1tYWNyb3MvcmVhY3Rpdml0eS10cmFuc2Zvcm0vdml0ZSc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgLy9cdTUxNDFcdThCQjhcdTg5RTNcdTY3ODRcbiAgICBSZWFjdGl2aXR5VHJhbnNmb3JtKCksXG4gICAgLy9cdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBWdWUgXHU3NkY4XHU1MTczXHU1MUZEXHU2NTcwXHVGRjBDXHU1OTgyXHVGRjFBcmVmLCByZWFjdGl2ZSwgdG9SZWYgXHU3QjQ5XG4gICAgICBpbXBvcnRzOiBbJ3Z1ZSddLFxuICAgICAgZHRzOlwic3JjL2F1dG8taW1wb3J0LmQudHNcIixcbiAgICAgIC8vXHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1ZWxlbWVudC1wbHVzXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgLy9cdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVlbGVtZW50LXBsdXNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIHNlcnZlcjp7XG4gICAgb3Blbjp0cnVlLFxuICAgIHBvcnQ6ODA4MCxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1EsU0FBUyxlQUFlLFdBQVc7QUFFbFQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBR2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBRXBDLE9BQU8seUJBQXlCO0FBVnVJLElBQU0sMkNBQTJDO0FBYXhOLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQTtBQUFBLElBRUosb0JBQW9CO0FBQUE7QUFBQSxJQUVwQixXQUFXO0FBQUE7QUFBQSxNQUVULFNBQVMsQ0FBQyxLQUFLO0FBQUEsTUFDZixLQUFJO0FBQUE7QUFBQSxNQUVKLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQTtBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFPO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsRUFDUDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
