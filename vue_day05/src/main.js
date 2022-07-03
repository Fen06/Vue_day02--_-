import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import './assets/style/base.css';
import './assets/style/index.css';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
