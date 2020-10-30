import { createApp } from 'vue'
import App from "./App.vue"
import Home from "./view/Home.vue"
import Doc from "./view/Doc.vue"
import './index.css'
import {createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        {path:'/', component: Home},
        {path: '/xxx' , component: Doc}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
