<template>
  <div>
    <table class="data-table">
      <thead>
        <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <th v-for="header in headerGroup.headers" :key="header.id">
            <div v-if="!header.isPlaceholder">
              <button
                @click="header.column.getToggleSortingHandler()?.($event)"
                :class="{
                  'is-sorted-asc': header.column.getIsSorted() === 'asc',
                  'is-sorted-desc': header.column.getIsSorted() === 'desc',
                }"
              >
                {{ header.column.columnDef.header }}
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td v-for="cell in row.getVisibleCells()" :key="cell.id">
            <div v-if="cell.getIsPlaceholder()"></div>
            <div v-else>
              <input
                v-if="cell.column.id === 'name' || cell.column.id === 'age'"
                :value="cell.getValue()"
                @blur="(e) => handleEdit(e, row.id, cell.column.id)"
                @keyup.enter="(e) => handleEdit(e, row.id, cell.column.id)"
              />
              <span v-else>{{ cell.getValue() }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="table.setPageIndex(0)" :disabled="!table.getCanPreviousPage()">首页</button>
      <button @click="table.previousPage()" :disabled="!table.getCanPreviousPage()">上一页</button>
      <button @click="table.nextPage()" :disabled="!table.getCanNextPage()">下一页</button>
      <button
        @click="table.setPageIndex(table.getPageCount() - 1)"
        :disabled="!table.getCanNextPage()"
      >
        尾页
      </button>
      <span>
        第 <strong>{{ table.getState().pagination.pageIndex + 1 }}</strong> /
        <strong>{{ table.getPageCount() }}</strong> 页
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useVueTable,
} from '@tanstack/vue-table'

// 模拟数据
const mockData = ref([
  { id: 1, name: '张三', age: 25, city: '北京' },
  { id: 2, name: '李四', age: 30, city: '上海' },
  { id: 3, name: '王五', age: 22, city: '广州' },
  { id: 4, name: '赵六', age: 28, city: '深圳' },
  { id: 5, name: '钱七', age: 35, city: '杭州' },
  { id: 6, name: '孙八', age: 29, city: '成都' },
  { id: 7, name: '周九', age: 24, city: '重庆' },
  { id: 8, name: '吴十', age: 32, city: '天津' },
  { id: 9, name: '郑十一', age: 27, city: '南京' },
  { id: 10, name: '刘十二', age: 26, city: '武汉' },
])

// 列定义
const columns = ref([
  {
    accessorKey: 'name',
    header: '姓名',
  },
  {
    accessorKey: 'age',
    header: '年龄',
  },
  {
    accessorKey: 'city',
    header: '城市',
  },
])

// 创建表格实例
const table = useVueTable({
  data: mockData.value,
  columns: columns.value,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(), // 启用排序
  getPaginationRowModel: getPaginationRowModel(), // 启用分页
  initialState: {
    pagination: {
      pageSize: 5, // 每页显示5条数据
    },
  },
})

// 处理单元格编辑
const handleEdit = (event, rowId, columnId) => {
  const newValue = event.target.value
  mockData.value = mockData.value.map((row) => {
    if (row.id === rowId) {
      return { ...row, [columnId]: newValue }
    }
    return row
  })
}

// 监听数据变化，并更新表格实例
watchEffect(() => {
  table.setOptions((prev) => ({
    ...prev,
    data: mockData.value,
  }))
})
</script>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.data-table th {
  background-color: #f4f4f4;
}
.data-table th button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.data-table th button.is-sorted-asc::after {
  content: ' ▲';
}
.data-table th button.is-sorted-desc::after {
  content: ' ▼';
}
.data-table td input {
  width: 100%;
  box-sizing: border-box;
}
.pagination {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
