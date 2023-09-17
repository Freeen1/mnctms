<template>
  <div class="common-layout">
    <el-container class="pt-12 min-h-screen">
      <div class="f-fmenu">
        <el-aside class=""><FMenu /></el-aside>
      </div>
      <el-container class="">
        <el-header class="h-[65px]"><FHeader></FHeader></el-header>
        <el-main><FTagList></FTagList></el-main>
      </el-container>
      <div class="f-user">
        <el-container>
          <el-header ><UHeader></UHeader></el-header >
          <el-main>个人中心</el-main>
        </el-container>
      </div>
    </el-container>
  </div>
</template>


<script setup>
import FMenu from './components/FMenu.vue';
import FHeader from './components/FHeader.vue';
import UHeader from './components/UHeader.vue';
import FTagList from './components/FTagList.vue';
</script>

<style setup>
.f-fmenu {
  border-right: solid 1px var(--el-menu-border-color);
  @apply  w-[280px];
}
.f-user {
  background: linear-gradient(180deg, rgba(247, 247, 247, 0.18) 0%, rgba(247, 247, 247, 0.36) 100%);
  @apply w-[420px];
}
</style>