<template>
    <div class="flex justify-center items-center flex-col mb-10 h-[65px]">
        <div class=" w-[60px] h-[5px] bg-color-[#CCEABB]"></div>
        <span class="font-600 text-4xl">WeiJi</span>
    </div>
    <el-row class="tac flex justify-center items-center">
        <el-col :span="16">
            <el-menu default-active="1" class="el-menu-vertical-demo text-dark-900 border-0 ">
                <el-menu-item index="1">
                    <el-icon><icon-menu /></el-icon>
                    <span>仪表盘</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>消息</span>
                    <!-- <el-badge class="mark" :value="3" /> -->
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>我的成绩</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>我的评价</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>我的账户</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
</script>


<style setip>
.el-menu-item.is-active {
    @apply bg-color-[#CCEABB] rounded-xl;
    color: #303133;
}
.el-menu-item:hover {
    background-color: #fff;
}
</style>