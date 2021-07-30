import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




export async function bootstrap() {
    console.log('app2 bootstraped')
}
export async function mount() {
    console.log('app2 mount')
}
export async function unmout() {
    console.log('app2 unmout')
}


createApp(App).use(store).use(router).mount('#app')
