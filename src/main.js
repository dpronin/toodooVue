import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebaseHelper'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true;

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})