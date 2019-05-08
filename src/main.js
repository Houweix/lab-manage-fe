import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

import Cookies from 'js-cookie';

Vue.use(Mint);

Vue.config.productionTip = false;

import '@/assets/css/reset.css';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// 路由发生变化修改页面title
router.beforeEach((to, from, next) => {
  const coo = Cookies.get('user');
  if (to.meta.title) {
    document.title = `实验室管理系统 - ${to.meta.title}`;
  }

  if (to.path === '/login') {
    if (coo) {
      next('/');
      return;
    }
  }

  if (!coo) {
    next('/login');
    return;
  }

  //  这里如果检测不到cookie就返回登录
  // if ()
  next();
});
