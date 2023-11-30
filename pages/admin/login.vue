<script setup lang="ts">
import login from '~/utils/auth/login.auth'

const { t } = useI18n({ useScope: 'global' })
const input = {
	email: '',
	password: ''
}

useSeoMeta({
	title: t(`path.${useRouter().currentRoute.value.name.split('___')[0].replaceAll('-', '.')}`)
})
</script>

<template>
	<h1>Login Page</h1>
	<form @submit.prevent>
		<label>Email</label>
		<input v-model="input.email" type="email" />
		<label>Password</label>
		<input v-model="input.password" type="password" />
		<button @click="login(input)">Login</button>
	</form>
</template>
