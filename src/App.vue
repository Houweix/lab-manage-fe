<template>
  <!-- <div id="app" style="border: 1px solid;"> -->
  <div id="app">
    <router-view v-transition/>
    <van-tabbar v-model="active" v-if="this.$route.name !== 'login' && this.$route.name !== 'post'">
      <van-tabbar-item icon="home-o" to="/course">课表查询</van-tabbar-item>
      <van-tabbar-item icon="search" to="/grade">成绩查询</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/personal">个人中心</van-tabbar-item>
    </van-tabbar>
    <img src="@/assets/icon.png" alt style="display: none;">
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data () {
    return {
      active: 0,
      map: ['course', 'grade', 'personal']
    }
  },
  beforeCreate () {
    const user = Cookies.get('user');
    if (!user) {
      this.$router.push('/login');
    }
  },
  methods: {
    handleSwitch (val) {
      this.$router.push(`/${this.map[val]}`);
    },
    //  重置tab
    reset () {
      this.active = 0;
    }
  },
  mounted () {

    //  重置tab
    this.$bus.on('reset', this.reset);

    if (this.$route.name === 'course') {
      this.active = 0;
    } else if (this.$route.name === 'grade') {
      this.active = 1;
    } else if (this.$route.name === 'personal') {
      this.active = 2;
    } else {
      this.active = 0;
    }
  }

}
</script>

<style lang="scss">
body,
html {
  height: 100%;
}
#app {
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 24px;
}
</style>
