<template>
    <el-row class="login-container">
        <el-col :md="0" :lg="0" :xl="3"></el-col>
        <el-col :md="12" :lg="12" :xl="8" class="left">
            <el-card class="row">
                <div>

                </div>
            </el-card>
        </el-col>
        <el-col :md="9" :lg="8" :xl="8" class="right">
            <h2 class="tltle-h2">Hi, 欢迎回来<br/>今天准备好上课了吗？</h2>
            <el-form :model="form" class="login-form">
                <el-form-item>
                    <el-input class="login-input" v-model="form.username" placeholder="请输入学号">
                        <template #prefix>
                            <el-icon><UserFilled /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input class="login-input" type="password" show-password v-model="form.password" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button color="#CCEABB" class="login-button" type="primary"
                        @click="onSubmit">登录
                    </el-button>
                </el-form-item>
            </el-form>
            <div class="w-[470px] demo-type">
                <el-avatar :size="67" class="cover" @error="errorHandler">
                    <img src="../assets/exp1.png"/>
                </el-avatar>
                <el-avatar :size="67" class="cover" @error="errorHandler">
                    <img src="../assets/exp2.png"/>
                </el-avatar>
                <el-avatar :size="67" class="cover" @error="errorHandler">
                    <img src="../assets/exp3.png"/>
                </el-avatar>
                <el-avatar :size="67" class="cover" @error="errorHandler">
                    <img src="../assets/exp4.png"/>
                </el-avatar>
                <el-avatar :size="67" class="cover" @error="errorHandler">
                    <img src="../assets/exp5.png"/>
                </el-avatar>
                <el-space direction="vertical" class="ml-13">
                    <el-text class="text-xl" tag="b">还没有账号？</el-text>
                    <el-text class="text-base text-gray-500/50"><el-link type="primary" href="https://element-plus.org" target="_blank">点击这里</el-link>联系管理员注册账号</el-text>
                </el-space>
            </div>
        </el-col>
        <el-col :md="3" :lg="4" :xl="2" class="right">
            <el-text class="mb-6 text-zinc-800" tag="b"> 其他方式 </el-text>
            <el-card shadow="hover" class="text-center flex justify-center items-center box-card w-[120px] h-[80px] mb-4 bg-zinc-100 border-0">
                <el-icon style="vertical-align: middle"><Cellphone /></el-icon>
                <br/>
                <el-text class="text-zinc-800" tag="b"> 通过短信 </el-text>
            </el-card>
            <el-card shadow="hover" class="text-center flex justify-center items-center box-card w-[120px] h-[80px] bg-zinc-100 border-0">
                <el-icon style="vertical-align: middle"><ChatSquare /></el-icon>
                <br/>
                <el-text class="text-zinc-800" tag="b"> 联系管理员 </el-text>
            </el-card>
        </el-col>
        <el-col :md="0" :lg="0" :xl="3"></el-col>
    </el-row>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
// do not use same name with ref

const router = useRouter()

const form = reactive({
    username: "",
    password: ""
})

const onSubmit = () => {
    router.push("/")
}
const errorHandler = () => true

</script>

<style scoped> 
.login-container {
    @apply min-h-screen;
}
.left, .right {
    @apply flex justify-center items-center;
}
.right {
    @apply  flex-col;
}
.tltle-h2 {
    font-size: 40px;
    @apply w-[400px] font-bold text-dark-900 mb-12;
}
.login-form {
    @apply w-[400px] mb-14;
}
.login-input {
    font-size: 14px;
    @apply h-[55px];
}
.login-button {
    font-size: 16px;
    font-weight: 800;
    @apply w-[400px] h-[55px] bg-orange-300 border-0 rounded-lg text-dark-600;
}
.row {
    width: 640px;
    height: 854px;
    background-image: url(../assets/Background.png);
    background-size: 100% 100%;
    @apply rounded-2xl border-0;
 }
.cover {
    @apply -mx-3;
}

</style>