import Vue from 'vue';
import VueRouter from 'vue-router';

import footer from '@/components/footer';
import homePage from '@/views/homePage';

Vue.use(VueRouter);
let router = new VueRouter({
  routes: [{
    path: "/",
    name: "home",
    components: {
      default: homePage,
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
