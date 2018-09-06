import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import '@/assets/scss/iconfont/iconfont.css';
import './assets/scss/global.scss';

import {
  Waterfall,
  Lazyload,
  Toast,
  Tag,
  Dialog,
  Cell,
  CellGroup,
  Field,
  Icon,
  Button
} from 'vant';

Vue.use(Waterfall);
Vue.use(Lazyload);
Vue.use(Toast);
Vue.use(Tag);
Vue.use(Dialog);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Button);

Toast.setDefaultOptions({
  duration: 1000
})

router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  Toast.loading({
    mask: true
  });
  next();
})

router.afterEach((to, from) => {
  Toast.clear(clearAll);
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
