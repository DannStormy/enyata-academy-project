// window.$ = window.jQuery = require('jquery');
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')
// app.use({
// install: function(Vue){
//     Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
//     }
// });