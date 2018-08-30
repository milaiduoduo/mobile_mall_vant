import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '@/components/home';
import footer from '@/components/footer';

Vue.use(VueRouter);
let router = new VueRouter({
  routes: [{
    path: "/",
    name: "home",
    components: {
      footer: footer
    }
  }, {
    path: '*',
    redirect: {
      name: 'home'
    }
  }]
});

export default router;
