<template>
  <div class="container">
    <div class="search-box">
      <el-form class="search-form" inline>
        <el-form-item label="物品名称">
          <el-input placeholder="请输入" v-model="searchForm.name"></el-input>
        </el-form-item>
        <el-form-item label="所需积分(分)">
          <el-input placeholder="请输入" v-model="searchForm.point"></el-input>
        </el-form-item>
        <el-form-item label="余额(个)">
          <el-input
            placeholder="请输入"
            v-model="searchForm.residue"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="search-btn">
        <el-button type="primary" @click="handleSearch">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
      </div>
    </div>

    <div class="table-box">
      <el-table
        :header-cell-style="EltableHeaderStyle"
        :data="tableObj.tableData"
        height="720"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="序号" type="index" align="center" width="70" />
        <el-table-column
          v-for="item in tableHeaders"
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" align="center">
          <div class="table-btn-box">
            <el-button link type="primary">编辑</el-button>
            <el-button link>下架</el-button>
          </div>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination-box">
      <el-pagination
        small
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="50"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElMessage,
  ElTable,
  ElTableColumn,
} from 'element-plus'
import { reactive } from 'vue'
import { tableHeaders } from './config'

// 表头样式
const EltableHeaderStyle = {
  backgroundColor: '#2194FF',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 500,
}

const searchForm = reactive({
  name: null,
  point: null,
  residue: null,
})

const tableObj = reactive({
  tableData: [{ name: '牙膏' }],
})

const handleSearch = () => {
  ElMessage.success('请求成功')
}
const handleReset = () => {
  Object.keys(searchForm).forEach(
    (key: string) => (searchForm[key as keyof typeof searchForm] = null)
  )
}

/**
 * 页面初始化
 */
const init = () => {
  for (let i = 0; i < 100; i++) {
    tableObj.tableData.push({ name: '牙膏' + i })
  }
}
init()
</script>

<style lang="scss" scoped>
.search-box {
  display: flex;
}
.pagination-box {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
