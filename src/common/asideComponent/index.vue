<template>
  <div class="aside-wrap" :style="isCollapse ? 'width:65px' : 'width:200px'">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="project-title">市场化项目</div>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><User /></el-icon>
          <span>用户管理</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Discount /></el-icon>
          <span>组织机构管理</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Star /></el-icon>
          <span>积分管理</span>
        </template>
        <el-menu-item index="3-1">积分兑换记录</el-menu-item>
        <el-menu-item index="3-2">积分设置</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true,
  },
})

const handleOpen = () => {}
const handleClose = () => {}
</script>

<style lang="scss" scoped>
.project-title {
  line-height: 60px;
  height: 60px;
  color: #fff;
  background-color: #2194ff;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
}
.aside-wrap {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transition: all 1s;
}
.el-menu-vertical-demo {
  border-right: none !important;
  background-color: #fff;
  height: 100vh;
}
</style>
