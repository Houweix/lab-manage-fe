import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

import '@/assets/css/reset.css';
import '@/assets/js/rem.js';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// 路由发生变化修改页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `实验室管理系统 - ${to.meta.title}`;
  }
  next();
});
