<script setup lang="ts">
const input = {
  email: '',
  password: '',
}

const email = useCookie('email', {
  httpOnly: true,
})
const token = useCookie('token', {
  httpOnly: true,
})

async function login () {
  const { data: response } = await useFetch('/api/auth/login', {
    method: 'POST',
    body: input,
  })

  console.log(response.value)

  if (!response || !response.value) return

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