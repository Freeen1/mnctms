<template>
    <el-header>
        <div class="h-[65px] flex items-center mb-10">
            <div class="flex items-center w-[345px] h-[65px]">
                <el-avatar :size="67" class="cover">
                    <img src="http://localhost:5173/src/assets/exp5.png"/>
                </el-avatar>
                <el-space direction="vertical" class="username">
                    <el-text class="text-lg" tag="b">吕国安</el-text>
                    <el-text class="text-sm">2021计算机网络技术</el-text>
                </el-space>
                <div class="flex items-center ml-auto">
                    <el-badge :value="10" >
                        <el-icon size="24px"><ChatDotRound /></el-icon>
                    </el-badge>
                    <el-badge :value="1"  type="primary">
                        <el-icon size="24px" class="ml-5"><Bell /></el-icon>
                    </el-badge>
                </div>
            </div>
        </div>
    </el-header>
</template>
<script setup>

</script>

<style>
    .username {
        text-align: left;
        @apply ml-4 ;
    }

</style>