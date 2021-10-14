import { createApp } from 'vue'
import VueViewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(VueViewer).mount('#app')
