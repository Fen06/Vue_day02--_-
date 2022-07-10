import Vue from 'vue';
import App from './App.vue';
import './assets/mobile/flexible.js';
import './assets/styles/reset.css';
import router from '@/router/index';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
