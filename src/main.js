import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Vant from 'vant';
import 'vant/lib/index.css';
import Cookies from 'js-cookie';
import VueBus from 'vue-bus';

Vue.use(Vant);
Vue.use(VueBus);

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

  if (coo) {
    //如果有就直接到首页咯
    next();
  } else {
    if (to.path === '/login') {
      //如果是登录页面路径，就直接next()
      next();
    } else {
      //不然就跳转到登录；
      next('/login');
    }
  }

  // next();
});
