import Vue from 'vue';
import App from './App.vue';

import ULRouter from '@/English/ULRouter';
import Contacts from '@/English/Contacts';
import About from '@/English/About';
import Not from '@/views/No.vue';

import A from '@/English/XEnglish/A.vue';
import B from '@/English/XEnglish/B.vue';
import C from '@/English/XEnglish/C.vue';
// import Bb from '@/English/XEnglish/XXEnglish/Bb.vue';
import Bone from '@/English/XEnglish/XXEnglish/B1.vue';
import Btwo from '@/English/XEnglish/XXEnglish/B2.vue';
import VueRoute from 'vue-router';
Vue.use(VueRoute);
const routes = [
  {
    path: '/',
    component: ULRouter,
  },
  { path: '/ULRouter', component: ULRouter },
  {
    path: '/Contacts',
    component: Contacts,
    children: [
      {
        path: 'a',
        component: A,
      },
      {
        path: 'b',
        component: B,
        children: [
          {
            path: 'B1',
            component: Bone,
          },
          {
            path: 'B2',
            component: Btwo,
          },
        ],
      },
      {
        path: 'c',
        component: C,
      },
    ],
  },
  { path: '/About', component: About },

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
