import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router"
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import routes from '@/router'
import store from "@/store";

const router = createRouter({
    history: createWebHistory(),
    routes
})
const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
