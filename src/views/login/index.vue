<template>
	<div class="w-10 h-10 bg-slate-500"></div>
	<a-form
		:model="loginForm"
		name="basic"
		:label-col="{ span: 8 }"
		:wrapper-col="{ span: 16 }"
		autocomplete="off"
	>
		<a-form-item label="Username" name="username" :rules="rules.username">
			<a-input v-model:value="loginForm.username" />
		</a-form-item>

		<a-form-item  label="Password" name="password" :rules="rules.password">
			<a-input-password v-model:value="loginForm.password" />
		</a-form-item>

		<a-form-item :wrapper-col="{ offset: 8, span: 16 }">
			<a-button type="primary" html-type="submit">进入系统</a-button>
		</a-form-item>
	</a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

interface LoginState {
	username: string
	password: string
}
const loginForm = reactive<LoginState>({
	username: '',
	password: '',
})

const rules = reactive({
	username: [{ required: true, message: '用户名不可为空' }],
	password: [{ required: true, message: '密码不可为空' }],
})
</script>

<style scoped></style>
