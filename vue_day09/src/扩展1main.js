import Vue from 'vue';
import App from './App.vue';

import ShouyeTwo from '@/viws-2/ShouYetwo.vue';
import FenleiTwo from '@/viws-2/Fenleitwo.vue';
import MyDeTwo from '@/viws-2/MyDetwo.vue';
import DingdanTwo from '@/viws-2/Dingdan.vue';

import ShouYe from '@/views/ShouYe.vue';
import MyLove from '@/views/MyLove.vue';
import About from '@/views/About.vue';
import Not from '@/views/No.vue';

import Sy from '@/views/Ikun/Sy.vue';
import Ml from '@/views/Ikun/Ml.vue';
import Ab from '@/views/Ikun/Ab.vue';
import VueRoute from 'vue-router';
Vue.use(VueRoute);
const routes = [
  { path: '/shouye', component: ShouyeTwo },
  { path: '/fenlei', component: FenleiTwo },
  { path: '/dingdan', component: DingdanTwo },
  { path: '/myde', component: MyDeTwo },

  {
    path: '/',
    component: ShouYe,
  },
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
