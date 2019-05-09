<template>
  <div class="course">
    <!-- post -->
    <van-notice-bar
      mode="link"
      @click="handlePost"
      :text="nowPost ? nowPost.content : ''"
      left-icon="volume-o"
    />

    <div class="text">课程列表</div>
    <van-collapse v-model="activeName" accordion style="text-align: left;">
      <van-collapse-item title="有赞微商城" name="1">提供多样店铺模板，快速搭建网上商城</van-collapse-item>
      <van-collapse-item title="有赞零售" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item>
      <van-collapse-item title="有赞美业" name="3">线上拓客，随时预约，贴心顺手的开单收银</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import adminModel from "@/api/admin.js";
import { NoticeBar } from 'vant';
import { Collapse, CollapseItem } from 'vant';

export default {
  name: 'course',
  data () {
    return {
      post: [],
      nowPost: {},
      //  课程展示当前激活
      activeName: ''
    }
  },
  methods: {
    getPost () {
      adminModel.getPost().then((res) => {
        if (res.retcode === 0) {
          this.post = res.data;
          this.showPost();
        }
      });
    },
    showPost () {
      const id = Math.floor((Math.random() * this.post.length));
      this.nowPost = this.post[id];
    },
    //  点击公告跳转
    handlePost () {
      this.$router.push(`/post/${this.nowPost.id}`)
    },
    //  获取该学生的课程
    getCourseByStudent () {

    }
  },
  mounted () {
    // 获取post
    this.getPost();
    this.getCourseByStudent();

  }
}
</script>

<style lang="scss" scoped>
.course {
  background-color: #f2f3f5;
  height: 100%;
}
</style>
