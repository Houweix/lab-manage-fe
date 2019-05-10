import axios from '@/libs/api.request';

/**
 * 这里是后台的接口管理
 */

export default {
  // 用户管理--------------------
  //  登录
  login: ({ username, password, identity }) => {
    const data = {
      username,
      password,
      identity
    };
    return axios.request({
      url: '/admin/login',
      data,
      method: 'post'
    });
  },
  // 修改个人密码-------------
  editPass: ({ editForm }) => {
    const data = {
      editData: editForm
    };

    return axios.request({
      url: '/admin/editPass',
      data,
      method: 'post'
    });
  },

  //  根据班级名称查询该班级的课程
  getCourseByClass: ({
    name
  }) => {
    const data = {
      className: name
    };

    return axios.request({
      url: '/class/getCourseByClass',
      data,
      method: 'post'
    })
  },
  // 获取所有课程
  getCourseData: () => {
    const data = {};

    return axios.request({
      url: '/course/getAllData',
      data,
      method: 'get'
    })
  },
  // 获取全部实验室
  getLab: () => {
    return axios.request({
      url: '/lab/getLabData',
      method: 'get'
    })
  },
  // 获取成绩
  getGrade: ({ name }) => {
    const data = {
      studentName: name
    };

    return axios.request({
      url: '/grade/getGradeByName',
      data,
      method: 'post'
    })
  },

  //  !! 公告------------------------
  getPost: () => {
    return axios.request({
      url: '/post/getData',
      method: 'get'
    });
  },

};
