import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

interface props {
    container: any
}

let instance = null

function render (props = {}) {
    const { container } = props
    instance = createApp(App)
      .use(store)
      .use(router)
      .mount(container ? container.querySelector('#app') : '#app')
}

export async function bootstrap() {
    console.log('app1 bootstraped')
}
export async function mount(props: props) {
    console.log('app1 mount')
    render(props)
}
export async function unmout() {
    console.log('app1 unmout')
}

