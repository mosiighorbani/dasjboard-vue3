import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// styles
import 'bootstrap/dist/css/bootstrap-reboot.rtl.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
// import '@/assets/all.min.css'
import '@/assets/styles.css'
// scripts
import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/app'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
