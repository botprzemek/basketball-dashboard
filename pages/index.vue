<script async lang="ts" setup>
const players = ref([]);

onMounted(async () => {
    players.value = await $fetch("/api/players", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    });
});
</script>

<template>
    <NuxtLink to="/auth/register">Register</NuxtLink>
    <NuxtLink to="/auth/login">Login</NuxtLink>
    {{ players }}
</template>