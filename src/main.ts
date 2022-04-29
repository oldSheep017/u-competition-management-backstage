import { createApp, useAttrs } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import './styles/index.css'
import router from './router'

createApp(App).use(router).use(Antd).mount('#app')
