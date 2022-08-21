import { createApp } from 'vue'
import { LmgLoader } from './utils/imgUtil'
import './style.css'
import App from './App.vue'
LmgLoader.getimgList()

createApp(App).mount('#app')



