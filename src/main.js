import Vue from 'vue'
import App from './App.vue'
import './utils/vant' // 按需引入vant

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')