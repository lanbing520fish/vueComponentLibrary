import Vue from 'vue'
import App from './App'
import '../src/assets/css/reset.css'
import '../src/assets/css/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount("#app")
