<template>
  <!-- <div class="main"></div> -->

  <div class="common-layout">
    <el-container>
      <el-header>
        <NavComponent :isCollapse="isCollapse" @collapse="collapse" />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <AsideComponent :isCollapse="isCollapse" />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AsideComponent from './asideComponent/index.vue'
import NavComponent from './navComponent/index.vue'
const isCollapse = ref(false)
const collapse = (val: boolean) => (isCollapse.value = !isCollapse.value)
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
  position: relative;
  box-sizing: border-box;
}
.app-main {
  margin: 60px;
  height: 100%;
  width: 100%;
  transition: all 0.5s;
  // margin-left: 200px;
  // width: 100%;
}
</style>
