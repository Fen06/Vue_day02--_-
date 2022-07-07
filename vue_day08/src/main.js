import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';

import axios from 'axios';
axios.defaults.baseURL = ' https://www.escook.cn';
Vue.prototype.$axios = axios;

Vue.directive('fous', {
  inserted(el) {
    el.focus();
  },
});

Vue.directive('User', {
  inserted(el) {
    if (el.id != 'Admin') {
      el.style.display = 'none';
    }
    console.log(el.id);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
