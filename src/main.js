// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuelidate from 'vuelidate';

const app = createApp(App);
app.use(store)
app.use(router)
// app.use(Vuelidate)
app.mount('#app')
