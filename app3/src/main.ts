import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



export async function bootstrap() {
    console.log('app3 bootstraped')
}
export async function mount() {
    console.log('app3 mount')
}
export async function unmout() {
    console.log('app3 unmout')
}

createApp(App).use(store).use(router).mount('#app')
