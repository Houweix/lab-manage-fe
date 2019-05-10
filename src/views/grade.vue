<template>
  <div class="grade">
    <van-search placeholder="请输入课程名称" v-model="searchVal"/>
    <template v-if="filterGradeData.length !== 0">
      <div class="text">课程成绩列表</div>
      <van-cell-group>
        <van-cell
          :title="item.course"
          :name="idx"
          v-for="(item,idx) in filterGradeData"
          :key="idx"
          style="text-align: left;"
          :value="item.grade_val+'分'"
        />
      </van-cell-group>
    </template>
    <div class="text" v-else>暂无相关课程</div>
  </div>
</template>

<script>
import adminModel from "@/api/admin.js";
import { NoticeBar } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Search } from 'vant';
import Cookies from "js-cookie";

export default {
  name: 'grade',

  data () {
    return {
      //  搜索
      searchVal: '',
      // 成绩数据
      gradeData: '',
      filterGradeData: []
    }
  },
  methods: {
    getGrade () {
      const user = JSON.parse(Cookies.get('user')).name;

      adminModel.getGrade({ name: user }).then((res) => {
        if (res.retcode === 0) {
          this.filterGradeData = this.gradeData = res.data;

        }
      });

    },
    deepClone (val) {
      return JSON.parse(JSON.stringify(val));
    }
  },
  watch: {
    searchVal () {
      this.filterGradeData = this.searchVal ? [] : this.deepClone(this.gradeData);
      if (Array.isArray(this.gradeData) && this.gradeData.length && this.searchVal) {
        this.gradeData.forEach(element => {
          if (element.course.indexOf(this.searchVal) !== -1) {
            this.filterGradeData.push(element);
          }
        });
      }
    }
  },
  mounted () {
    this.getGrade();
  },

}
</script>

<style lang="scss" scoped>
.grade {
  background-color: #f2f3f5;
  height: 100%;
}
</style>
