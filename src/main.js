// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Groups from './components/Groups';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "Groups",
    component: Groups
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
