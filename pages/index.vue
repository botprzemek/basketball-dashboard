<script async lang="ts" setup>
const cookies = useRequestHeaders(["cookie"]);

const {data} = await useFetch("/api/players", {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        ...cookies
    }
});
</script>

<template>
    <NuxtLink to="/auth/register">Register</NuxtLink>
    <NuxtLink to="/auth/login">Login</NuxtLink>
    {{ data }}
</template>