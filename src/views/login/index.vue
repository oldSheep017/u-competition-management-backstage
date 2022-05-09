<template>
	<!-- <template v-if="login">
		<section class="login-wrapper shadow-lg rounded-md border border-gray-600">
			<h1 class="text-xl">高校竞赛管理系统后台</h1>
			<a-form
				:model="loginForm"
				:label-col="{ span: 8 }"
				:wrapper-col="{ span: 16 }"
				autocomplete="off"
				@submit="useLogin"
			>
				<a-form-item
					label="Username"
					name="username"
					:rules="rules.username"
				>
					<a-input v-model:value="loginForm.username" />
				</a-form-item>

				<a-form-item
					label="Password"
					name="password"
					:rules="rules.password"
				>
					<a-input-password v-model:value="loginForm.password" />
				</a-form-item>

				<a-form-item :wrapper-col="{ span: 24 }">
					<a-button type="primary" html-type="submit" block
						>进入系统</a-button
					>
				</a-form-item>

				<a-form-item :wrapper-col="{ span: 24 }">
					<a-button type="link" block @click="showRegister"
						>注册账号</a-button
					>
				</a-form-item>
			</a-form>
		</section>
	</template>
	<template v-else>
		<a-form
			:model="registerForm"
			:label-col="{ span: 10 }"
			:wrapper-col="{ span: 24 }"
			autocomplete="off"
			@submit="useRegister"
		>
			<a-form-item label="Username" name="username">
				<a-input v-model:value="registerForm.username" />
			</a-form-item>
			<a-form-item label="Password" name="password">
				<a-input v-model:value="registerForm.password" />
			</a-form-item>
			<a-form-item label="Nickname" name="nickname">
				<a-input v-model:value="registerForm.nickname" />
			</a-form-item>
			<a-form-item label="University" name="university">
				<a-select
					ref="select"
					v-model:value="registerForm.university"
					style="width: 120px"
				>
					<template v-for="u in universities">
						<a-select-option :value="u">{{ u }}</a-select-option>
					</template>
				</a-select>
			</a-form-item>
			<a-form-item label="Organization" name="organization">
				<a-input v-model:value="registerForm.organization" />
			</a-form-item>

			<a-form-item label="Phonenumber" name="phonenumber">
				<a-input v-model:value="registerForm.phonenumber" />
			</a-form-item>

			<a-form-item :wrapper-col="{ span: 24 }">
				<a-button type="primary" block>注册</a-button>
			</a-form-item>

			<a-form-item :wrapper-col="{ span: 24 }">
				<a-button type="link" danger block @click="showLogin"
					>返回</a-button
				>
			</a-form-item>
		</a-form>
	</template> -->
	<div class="w-screen h-screen flex">
		<div class="h-full grow min-w-0 w-3/5 bg-gray-700"></div>
		<div class="grow-0 bg-white px-14 py-40 box-border w-2/5">
			<div class="max-w-md w-full mx-auto space-y-8">
				<div class="text-center">
					<h1 class="text-3xl">高校竞赛管理系统后台</h1>
					<h2 class="text-gray-500 text-sm mt-2">系统登录</h2>
				</div>
				<div class="text-base space-y-8">
					<a-form
						:model="loginForm"
						autocomplete="off"
						@submit="useLogin"
					>
						<a-form-item
							label="账号"
							name="username"
							:rules="rules.username"
						>
							<a-input
								size="large"
								v-model:value="loginForm.username"
							/>
						</a-form-item>

						<a-form-item
							label="密码"
							name="password"
							:rules="rules.password"
						>
							<a-input-password
								size="large"
								v-model:value="loginForm.password"
							/>
						</a-form-item>

						<a-form-item>
							<a-button
								type="primary"
								html-type="submit"
								block
								size="large"
								>进入系统</a-button
							>
						</a-form-item>

						<a-form-item>
							<a-button
								type="link"
								block
								@click="showRegister"
								size="large"
								>注册账号</a-button
							>
						</a-form-item>
					</a-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'

const router = useRouter()

interface LoginState {
	username: string
	password: string
}

interface RegisterState {
	username: string
	password: string
	nickname: string
	university: string
	organization: string
	phonenumber: string
}

const loginForm = reactive<LoginState>({
	username: '',
	password: '',
})

const login = ref(true)

const rules = reactive({
	username: [{ required: true, message: '用户名不可为空' }],
	password: [{ required: true, message: '密码不可为空' }],
})

const useLogin = () => {
	message.error('烫烫烫烫烫烫')
	router.push({ path: '/' })
}

const useRegister = (e: any) => {
	console.log(e)
}

const registerForm = reactive<RegisterState>({
	username: '',
	password: '',
	university: '',
	nickname: '',
	organization: '',
	phonenumber: '',
})

const showRegister = () => {
	login.value = false
}

const showLogin = () => {
	login.value = true
}

const universities = ref(['海南医学院', '海南大学', '海南师范大学', '复旦大学'])
</script>

<style>
.login-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 600px;
	height: 400px;
	/* background-color: #fff; */
}

.right {
	width: 672px;
	height: 100%;
}
</style>
