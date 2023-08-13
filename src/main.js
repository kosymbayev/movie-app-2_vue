import { createApp } from 'vue'

import './style.css'

import App from './App.vue'
import router from './router'
import store from './vuex/store';

createApp(App).use(store).use(router).mount('#app')
