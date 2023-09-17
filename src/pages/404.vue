<template>
    <el-result
        icon="error"
        title="404"
        sub-title="你的页面被外星人抓走了~"
      >
        <template #extra>
          <el-button type="primary" @click="this.$router.push('/')">返回</el-button>
        </template>
      </el-result>
</template>