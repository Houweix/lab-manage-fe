<template>
  <!-- <div id="app" style="border: 1px solid;"> -->
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="nowSelected" v-if="this.$route.name !== 'login'">
      <mt-tab-item id="course">
        <img slot="icon" src="@/assets/icon-course.png">
        课表查询
      </mt-tab-item>

      <mt-tab-item id="grade">
        <img slot="icon" src="@/assets/icon-grade.png">
        成绩查询
      </mt-tab-item>

      <mt-tab-item id="personal">
        <img slot="icon" src="@/assets/icon-personal.png">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data () {
    return {
      nowSelected: 'course'
    }
  },
  beforeCreate () {
    const user = Cookies.get('user');
    if (!user) {
      this.$router.push('/login');
    }
  },
  watch: {
    nowSelected (val) {
      this.$router.push(`/${val}`);
    }
  },

}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  font-size: 24px;
}
</style>
