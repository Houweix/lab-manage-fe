<template>
  <div class="grade">
    <van-search placeholder="请输入课程名称" v-model="searchVal"/>
    <div class="text">课程成绩列表</div>
    <van-cell-group>
      <van-cell
        :title="item.course"
        :name="idx"
        v-for="(item,idx) in gradeData"
        :key="idx"
        style="text-align: left;"
        :value="item.grade_val+'分'"
      />
    </van-cell-group>
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
      gradeData: ''
    }
  },
  methods: {
    getGrade () {
      const user = JSON.parse(Cookies.get('user')).name;

      adminModel.getGrade({ name: user }).then((res) => {
        if (res.retcode === 0) {
          this.gradeData = res.data;
        }
      });

    }
  },
  // todo 筛选
  computed: {

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
