import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
