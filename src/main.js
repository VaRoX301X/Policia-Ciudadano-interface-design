import Vue from 'vue'
import App from './App.vue'
//bootstrap implementation
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//HTTP Requests
import VueResource from 'vue-resource';
Vue.use(VueResource);
// ROUTING
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Routes from './routes';
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
  // mode: 'hash'
});
// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBusinessTime,
  faCoffee,
  faUserAltSlash,
  faWalking,
  faUserPlus,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee);
library.add(faWalking);
library.add(faBusinessTime);
library.add(faUserAltSlash);
library.add(faUserPlus);
library.add(faUser);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
