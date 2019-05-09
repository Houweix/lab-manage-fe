<template>
  <div class="course">
    <van-notice-bar
      mode="link"
      @click="handlePost"
      :text="nowPost ? nowPost.content : ''"
      left-icon="volume-o"
    />
  </div>
</template>

<script>
import adminModel from "@/api/admin.js";
import { NoticeBar } from 'vant';


export default {
  name: 'course',
  data () {
    return {
      post: [],
      nowPost: {}
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
    }
  },
  mounted () {
    this.getPost();

  }
}
</script>
