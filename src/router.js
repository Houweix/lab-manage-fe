import Vue from 'vue'
import Router from 'vue-router'
import course from './views/course.vue'
import login from './views/login.vue'
import personal from './views/personal.vue'
import grade from './views/grade.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/course'
    },
    {
      path: '/course',
      name: 'course',
      component: course,
      meta: {
        title: '课程查询'
      }
    },
    {
      path: '/grade',
      name: 'grade',
      component: grade,
      meta: {
        title: '成绩查询'
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    }
  ]
})
