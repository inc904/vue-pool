<template>
    <div style="width: 500px; border: 1px solid #ccc; padding: 20px;">
        <h1>Child Props 1</h1>
        <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
            @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="Username" name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item label="Password" name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password" />
            </a-form-item>

            <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
        </a-form>
        <input type="text" v-model="formState.username" />
    </div>
</template>

<script setup lang="ts">
import type { FormState } from './types'
import { computed } from 'vue';


let props = defineProps<{
    formState: FormState
}>()

const onFinish = (values: any) => {
    console.log(values)
}

const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo)
}

</script>

<style scoped></style>