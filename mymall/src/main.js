// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
