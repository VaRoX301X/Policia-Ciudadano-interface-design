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


Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
