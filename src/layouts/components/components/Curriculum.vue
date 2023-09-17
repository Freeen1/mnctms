<template>
    <el-table :data="timetableData" border style="width: 100%" :span-method="cellMerge">
      <el-table-column label="Time" align="center">
        <template #header="{ columnIndex }">
          <div v-if="columnIndex === 0">时间</div>
        </template>
        <template #default="{ row }">
          <div>{{`第${row.index}节课`}}</div>
        </template>
      </el-table-column>
      <el-table-column v-for="day in days" :key="day" :label="day" />
    </el-table>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      const timetableData = ref([]);
  
      for (let i = 1; i <= 8; i++) {
        let rowData = { index: i };
        days.forEach((day) => {
          rowData[day] = ""; // Replace with your subject data
        });
        timetableData.value.push(rowData);
      }
  
      function cellMerge({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          return { rowspan: 1, colspan: 1 };
        }
  
        const currentSubject = row[column.property];
        const prevSubject = rowIndex === 0 ? null : timetableData.value[rowIndex - 1][column.property];
  
        if (currentSubject === prevSubject && prevSubject !== "") {
          return { rowspan: 0, colspan: 0 };
        }
  
        let rowspan = 1;
        for (let i = rowIndex + 1; i < timetableData.value.length; i++) {
          const nextSubject = timetableData.value[i][column.property];
          if (currentSubject === nextSubject && currentSubject !== "") {
            rowspan++;
          } else {
            break;
          }
        }
  
        return { rowspan, colspan: 1 };
      }
  
      return { days, timetableData, cellMerge };
    },
  };
  </script>