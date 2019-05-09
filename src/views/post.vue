<template>
  <div class="post">
    <van-nav-bar title="公告详情" left-text="返回" left-arrow @click-left="goBack"/>
    <van-cell-group>
      <van-cell title="公告标题" style="text-align: left;" :label="nowPost ? nowPost.title: ''"/>
      <van-cell title="公告时间" style="text-align: left;" :label="nowPost ? nowPost.time: ''"/>
      <van-cell title="公告内容" style="text-align: left;" :label="nowPost ? nowPost.content: ''"/>
      <van-cell title="发布人" style="text-align: left;" :label="nowPost ? nowPost.user: ''"/>
    </van-cell-group>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { Panel } from 'vant';
import { Cell, CellGroup } from 'vant';

import adminModel from "@/api/admin.js";

export default {
  data () {
    return {
      post: [],
      nowPost: {}
    }
  },
  mounted () {
    this.getPost();

  },
  methods: {
    goBack () {
      this.$router.push('/course');
    },
    getPost () {
      adminModel.getPost().then((res) => {
        if (res.retcode === 0) {
          this.post = res.data;
          this.nowPost = this.post.find((elem) => Number(elem.id) === Number(this.$route.params.id));
        }
      });
    },

  },

}
</script>

<style lang="scss" scoped>
.post {
  background-color: #f2f3f5;
  height: 100%;
}
</style>
