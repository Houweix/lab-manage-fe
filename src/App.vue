<template>
  <!-- <div id="app" style="border: 1px solid;"> -->
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active" v-if="this.$route.name !== 'login'">
      <van-tabbar-item icon="home-o" to="/course">课表查询</van-tabbar-item>
      <van-tabbar-item icon="search" to="/grade">成绩查询</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/personal">个人中心</van-tabbar-item>
    </van-tabbar>
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
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 24px;
}

</style>
