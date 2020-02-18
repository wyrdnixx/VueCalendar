import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//import VModal from 'vue-js-modal'
 
//Vue.use(VModal, { dialog: true })


import vuetify from '@/plugins/vuetify' // path to vuetify export


new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')

