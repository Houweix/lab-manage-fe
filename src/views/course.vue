<template>
  <div class="course">
    这里是course
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import adminModel from "@/api/admin.js";

export default {
  name: 'home',
  data() {
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
  mounted() {
    this.getCourse();
  }
}
</script>
