import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start, setDefaultMountApp, initGlobalState } from 'qiankun'

createApp(App).use(store).use(router).mount('#app')

registerMicroApps([
    {
        name: 'app1',
        entry: '//localhost: 9901',
        container: '#subapp-container',
        activeRule: '/app1'
    },
    {
        name: 'app2',
        entry: '//localhost: 9902',
        container: '#subapp-container',
        activeRule: '/app2'
    },
    {
        name: 'app3',
        entry: '//localhost: 9903',
        container: '#subapp-container',
        activeRule: '/app3'
    },
])

const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: 'qiankun'
})

onGlobalStateChange((value, prev) => {
    console.log('[onGlobalStateChange - master]:', value, prev)
})

setGlobalState({
    ignore: 'master',
    user: {
        name: 'master',
    }
})

setDefaultMountApp(('/app1'))

start()
