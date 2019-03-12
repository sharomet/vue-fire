import './assets/scss/app.scss'
/*import './assets/js/jquery-3.3.1.slim.min.js'
import './assets/js/popper.min.js'
import './assets/js/bootstrap.min.js'*/
import './firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import VueMoment from 'vue-moment'

Vue.use(VueFire)
Vue.use(VueMoment);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
