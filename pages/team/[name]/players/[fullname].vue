<script async setup lang="ts">
const route = useRoute()

const { t } = useI18n({ useScope: 'global' })
const { data: players } = await useFetch(`/api/basketball/players?name=${route.params.fullname}`)

useHead({
	title: `${route.params.fullname}`
})
</script>

<template>
	<section v-for="player in players" :key="player.lastname">
		<Player :player="player" />
	</section>
</template>
