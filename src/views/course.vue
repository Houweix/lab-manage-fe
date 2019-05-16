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
      <van-collapse-item :title="item.name" :name="idx" v-for="(item,idx) in showCourse" :key="idx">
        <van-cell title="上课日期" style="text-align: left;" :label="item.date"/>
        <van-cell
          title="上课时间"
          style="text-align: left;"
          :label="item.start_time+'-'+item.end_time+'时'"
        />
        <van-cell title="上课周数" style="text-align: left;" :label="item.week+'周'"/>
        <van-cell title="上课地点" style="text-align: left;" :label="item.lab"/>
        <van-cell title="任课教师" style="text-align: left;" :label="item.teacher"/>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import adminModel from "@/api/admin.js";
import { NoticeBar } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import Cookies from "js-cookie";


export default {
  name: 'course',
  data () {
    return {
      post: [],
      nowPost: {},
      //  课程展示当前激活
      activeName: '',

      //  当前班级的课程
      nowCourse: '',
      // 所有的课程信息
      courseData: '',
      //  当前实验室信息
      labData: '',
      //  教师信息
      teacherData: []
    }
  },
  methods: {
    //  教师信息
    getTeacherData () {
      adminModel.getAllData({ role: 'teacher' }).then((res) => {
        if (res.retcode === 0) {
          this.teacherData = res.data;
        }
      });
    },
    getPost () {
      adminModel.getPost().then((res) => {
        if (res.retcode === 0) {
          this.post = res.data;
          this.showPost();
        }
      });
    },
    showPost () {
      // const id = Math.floor((Math.random() * this.post.length));
      this.nowPost = this.post[this.post.length - 1];
    },
    //  点击公告跳转
    handlePost () {
      this.$router.push(`/post/${this.nowPost.id}`)
    },
    //  获取该学生的课程
    getCourseByClass () {
      const user = JSON.parse(Cookies.get('user')).class;
      adminModel.getCourseByClass({ name: user }).then((res) => {
        if (res.retcode === 0) {
          this.nowCourse = res.data;
        }
      });
    },
    //  获取所有的课程
    getCourseData () {
      adminModel.getCourseData().then((res) => {
        if (res.retcode === 0) {
          this.courseData = res.data;
        }
      });
    },
    // 获取所有实验室
    getLab () {
      adminModel.getLab().then((res) => {
        if (res.retcode === 0) {
          this.labData = res.data;
        }
      });
    },
    getFilterCourse (courseName) {
      return this.courseData.find((elem) => elem.name === courseName);
    },
    //  根据courseid获取教师姓名
    getTeacherByCourse(name) {
      return this.teacherData.find(elem => elem.course_id === name);
    }
  },
  mounted () {
    // 获取post
    this.getPost();
    this.getCourseByClass();
    this.getCourseData();
    this.getLab();
    this.getTeacherData();
  },
  computed: {
    //  最终展示给用户的课程list
    showCourse () {
      const arr = [];
      if (this.courseData[0] && this.nowCourse[0] && this.labData[0]  && this.teacherData[0]) {
        this.nowCourse.forEach(elem => {

          const obj = JSON.parse(JSON.stringify(this.getFilterCourse(elem.course)));
          obj.lab = this.labData.find(elem => elem.id === obj.lab_id).name;

          obj.teacher = this.getTeacherByCourse(obj.name).name;

          arr.push(obj);
        })
      }
      return arr;
    }
  },
}
</script>

<style lang="scss" scoped>
.course {
  background-color: #f2f3f5;
  height: 100%;
}
</style>
