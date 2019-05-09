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

  //  !! 公告------------------------
  getPost: () => {
    return axios.request({
      url: '/post/getData',
      method: 'get'
    });
  },

};
