import Vue from 'vue';
import App from './App.vue';

import ShouYe from './views/ShouYe.vue';
import MyLove from './views/MyLove.vue';
import About from './views/About.vue';

import Sy from './components/Ikun/S-y.vue';
import Ml from './components/Ikun/M-l.vue';
import Ab from './components/Ikun/A-b.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  {
    path: '/shouye',
    component: ShouYe,
    children: [
      {
        path: 'sy',
        component: Sy,
      },
      {
        path: 'ml',
        component: Ml,
      },
      {
        path: 'ab',
        component: Ab,
      },
    ],
  },
  {
    path: '/mylove',
    component: MyLove,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
