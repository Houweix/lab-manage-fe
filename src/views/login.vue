<template>
  <div>这里是登录页</div>
</template>

<script>
import adminModel from "@/api/admin.js";


export default {
  data () {
    return {

    }
  },
  methods: {
    getCourse () {
      adminModel.getCourseData().then((res) => {
        if (res.retcode === 0) {
          // console.log(res);
          this.courseData = res.data;
        }
      });
    },
  },
  mounted () {
    this.getCourse();
  }
}
</script>

<style lang="scss" scoped>
</style>
