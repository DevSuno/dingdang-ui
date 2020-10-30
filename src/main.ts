import { createApp } from 'vue'
import App from "./App.vue"
import index1 from "./components/index1.vue"
import index2 from "./components/index2.vue"
import './index.css'
import {createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        {path:'/', component: index1},
        {path: '/xxx' , component: index2}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
