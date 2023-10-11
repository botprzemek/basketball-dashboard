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
  if (response.value.status !== 200 && response.value.cookies === '') return

  document.cookie = response.value.cookies
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