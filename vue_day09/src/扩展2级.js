import Vue from 'vue';
import App from './App.vue';

import ZhuYe from '@/PE/ZhuYe.vue';
import XinWen from '@/PE/XinWen.vue';
import TiYu from '@/PE/TiYu.vue';

import Tiyu from '@/PE/comm/Tiyu.vue';
import Guonei from '@/PE/comm/Guonei.vue';
import Guowai from '@/PE/comm/Guowai.vue';

import Not from '@/views/No.vue';

import VueRoute from 'vue-router';
Vue.use(VueRoute);
const routes = [
  {
    path: '/',
    component: ZhuYe,
  },
  { path: '/zhuye', component: ZhuYe },
  { path: '/xinwen', component: XinWen },
  {
    path: '/tiyu',
    component: TiYu,
    children: [
      {
        path: 'ttiyu',
        component: Tiyu,
      },
      {
        path: 'guonei',
        component: Guonei,
      },
      {
        path: 'guowai',
        component: Guowai,
      },
    ],
  },

  {
    path: '*',
    component: Not,
  },
];

const router = new VueRoute({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
