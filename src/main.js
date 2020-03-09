import Vue from 'vue'
import GaleryDropDown from './index.vue'
import './assets/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(GaleryDropDown),
}).$mount('#app')
