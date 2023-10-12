<script setup lang="ts">
const input = {
  email: '',
  password: '',
}

async function login () {
  const { data: response } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: input,
  })

  if (!response || !response.value) return

  const email = useCookie('email', {
    secure: true,
    maxAge: 3600,
    sameSite: true,
  })
  const token = useCookie('token', {
    secure: true,
    maxAge: 3600,
    sameSite: true,
  })

  email.value = response.value.email
  token.value = response.value.token

  navigateTo('./match')
}
</script>

<template>
  <h1>Login Page</h1>
  <form @submit.prevent>
    <label>Email</label>
    <input v-model="input.email" type="email">
    <label>Password</label>
    <input v-model="input.password"  type="password">
    <button @click="login">Login</button>
  </form>
</template>