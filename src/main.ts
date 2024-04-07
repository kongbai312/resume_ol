import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from '@/stores/index';

//引入项目所需引入文件
import '@/imports';

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')