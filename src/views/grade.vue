<template>
  <div class="grade">
    <van-search placeholder="请输入课程名称" v-model="value"/>
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
    return {}
  },
  methods: {
    name () {

    }
  },
  computed: {

  },
  mounted () {
    ;
  },

}
</script>

<style lang="scss" scoped>
.grade {
  background-color: #f2f3f5;
  height: 100%;
}
</style>
