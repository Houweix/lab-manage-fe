<template>
  <div class="login">
    <div class="login_image">
      <img src="@/assets/icon.png" alt>
    </div>
    <div class="title">欢迎登录黑大实验室管理系统</div>

    <div class="login_content">
      <div class="login_content_form">
        <input v-model="username" type="text" placeholder="请输入用户名">
      </div>
      <div class="login_content_form">
        <input v-model="password" type="password" placeholder="请输入密码">
      </div>
      <button @click="handleLogin" class="login_btn">Login</button>
    </div>
  </div>
</template>

<script>
import adminModel from "@/api/admin.js";
import { Toast } from 'mint-ui';
import Cookies from "js-cookie";

export default {
  data () {
    return {
      identity: 'student',
      username: '100002',
      password: '123123'
    }
  },
  methods: {
    handleLogin () {
      if (this.username && this.password) {
        adminModel
          .login({ username: this.username, password: this.password, identity: this.identity })
          .then(res => {
            console.log(res);

            if (res.retcode === 0) {
              if (!Cookies.get("user")) {
                // 登录成功，设置cookie
                Cookies.set(
                  "user",
                  res.data, { expires: 1 / 6 }
                );
              }

              Toast({
                message: '登录成功！'
              });

              setTimeout(() => {
                this.$router.push('/');
              }, 1000);
            } else {

              Toast({
                message: '登录失败，检查后重试！'
              });
            }
          })
      } else {
        Toast({
          message: '请检查后重试！'
        });
      }
    }

  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: #fff;
  border-radius: 2px;
  max-width: 100%;
  width: 22rem;
  margin: 20px auto;
  padding: 16px;
  &_image {
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

  &_content {
    text-align: center;
    // padding: 25px 45px;
    margin: 20px auto;

    &_form {
      margin: 10px;
      display: grid;

      & input {
        padding: 8px;
        border: none;
        border-bottom: 2px solid #694ed6;
        margin: 10px 0;
        transition: 0.25s all;
        &:focus {
          border-bottom: 2px solid #e75441;
          outline: none;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.125);

          transition: 0.25s all;
        }
      }
    }
  }

  &_btn {
    border: none;
    background: #694ed6;

    cursor: pointer;
    border-radius: 3px;
    padding: 16px;
    width: 200px;
    color: white;

    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  }
}

@media only screen and (max-width: 390px) {
  .login {
    width: 100%;
    padding: 16px 0;
  }

  .login_btn {
    margin-top: 50px;
    width: 100%;
  }
}
</style>
