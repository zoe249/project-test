<template>
  <div class="nav" :style="isCollapse ? 'left:65px' : 'left:200px'">
    <div class="collapse">
      <el-icon><Operation /></el-icon>
    </div>
    <div class="c-flex">
      <el-avatar class="avator-box" />
      <el-dropdown style="cursor: pointer">
        <span class="el-dropdown-link items-center text-white">
          菠萝吹雪
          <i class="iconfont icon-jiantoudown ml5"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu :hide-on-click="false">
            <el-dropdown-item command="logout">
              <i class="iconfont icon-infofill"></i>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emits = defineEmits(['collapse'])
const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true,
  },
})
/**
 * 侧边栏折叠
 */
const collapseAside = () => emits('collapse')
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  right: 0;
  // left: 200px;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  transition: all 0.5s;
}
.collapse {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.c-flex {
  display: flex;
  align-items: center;
  .avator-box {
    margin-right: 10px;
  }
}
</style>
