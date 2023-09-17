<template>
    <el-header>
        <div class="h-[65px] flex items-center mb-10">
            <span class="font-600 text-xl"> 早上好，吕国安 </span>
            <div class="ml-auto">
                <el-button type="primary" :icon="Management" color="#CCEABB"
                    class="w-[168px] h-[48px] text-base font-600 rounded-lg bg-[#FDCB9E] border-0 text-dark-600">进入课堂
                </el-button>
            </div>
        </div>
    </el-header>
</template>

<script setup>
import { Management } from '@element-plus/icons-vue'
</script>

<style setup>

</style>