<template>
  <div class="personal-container">
    <div class="login_image">
      <img src="@/assets/avatar.png" alt>
    </div>
    <div class="name" v-text="name"></div>

    <van-cell-group style="margin-top: 30px;">
      <van-field
        style="text-align: left;"
        clearable
        v-model="userForm.password1"
        type="password"
        label="原密码"
        placeholder="请输入密码"
      />
      <van-field
        style="text-align: left;"
        clearable
        v-model="userForm.password2"
        type="password"
        label="新密码"
        placeholder="请输入密码"
      />
      <van-field
        style="text-align: left;"
        clearable
        v-model="userForm.password2s"
        @change="handleCheck"
        type="password"
        label="新密码"
        placeholder="请输入密码"
      />
    </van-cell-group>

    <van-button
      type="primary"
      @click.native="changePassword"
      size="large"
      style="margin-top: 30px;font-weight: bold"
    >修改密码</van-button>

    <van-button
      type="danger"
      @click.native="logout"
      size="large"
      style="margin-top: 30px;font-weight: bold"
    >退出登录</van-button>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import adminModel from "@/api/admin.js";
import { Dialog, Notify } from 'vant';

export default {
  data () {
    return {
      name: '',
      userForm: {
        identity: 'student',
        // 用户输入
        password1: '',
        password2: '',
        password2s: ''
      }
    }
  },
  methods: {
    logout () {
      Dialog.confirm({
        title: '注意',
        message: '确定退出登录？'
      }).then(() => {
        // 删除cookies
        if (Cookies.get("user")) {
          Cookies.remove("user");
        }

        Notify({
          message: '退出登录成功',
          duration: 2000,
          background: '#07c160'
        });

        this.$router.push('/login');
      }).catch(() => { });
    },
    //  修改密码
    changePassword () {
      if (this.checkPass) {
        adminModel.editPass({ editForm: this.userForm }).then((res) => {
          if (res.retcode === 2) {
            Notify({
              message: '原始密码不正确，核对重试',
              duration: 2000,
              background: 'rgb(255, 68, 68)'
            });
          } else if (res.retcode === 0) {
            Notify({
              message: '修改成功!',
              duration: 4000,
              background: '#07c160'
            });
            this.userForm.password1 = '';
            this.userForm.password2 = '';
            this.userForm.password2s = '';
          } else {
            Notify({
              message: '修改失败，请稍后重试',
              duration: 2000,
              background: 'rgb(255, 68, 68)'
            });
          }
        });
      } else {
        Notify({
          message: '两次密码输入不一致，请检查后重新输入！',
          duration: 2000,
          background: 'rgb(255, 68, 68)'
        });
      }
    },
    handleCheck () {
      if (!this.checkPass) {
        Notify({
          message: '两次密码输入不一致，请检查后重新输入！',
          duration: 2000,
          background: 'rgb(255, 68, 68)'
        });
      }
    }
  },
  mounted () {
    this.name = `欢迎您，${JSON.parse(Cookies.get('user')).name}`;

    const user = JSON.parse(Cookies.get('user'));
    if (user) {
      this.userForm.user = user.id;
    } else {
      this.$router.push('/login');
    }
  },
  computed: {
    checkPass () {
      return (this.userForm.password2 === this.userForm.password2s) && this.userForm.password1;
    }
  },

}
</script>

<style lang="scss" scoped>
.personal-container {
  background-color: #f2f3f5;
  height: 100%;
}
.login_image {
  max-height: 100%;
  max-width: 100%;
  text-align: center;
  margin: 16px;
  & img {
    height: 150px;
    width: 150px;
    border-radius: 100px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
  }
}
</style>
