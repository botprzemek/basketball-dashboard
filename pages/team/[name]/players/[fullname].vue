<script setup lang="ts">
const route = useRoute()

const { t } = useI18n({ useScope: 'global' })

useHead({
	title: `${route.params.fullname}`
})

const { data: players } = await useFetch(`/api/players/name/${route.params.fullname}`)

for (let i = 0; i < players.value.length; i++) {
	const { data: statistics } = await useFetch(`/api/players/id/${players.value[i].id}/statistics`)
	const { data: statisticsAvg } = await useFetch(
		`/api/players/id/${players.value[i].id}/statistics/avg`
	)
	players.value[i].statistics = {
		matches: statistics ? statistics.value : [],
		avg: statisticsAvg ? statisticsAvg.value[0] : {}
	}
}
</script>

<template>
	<ul>
		<li v-if="players" v-for="player in players" :key="player.lastname" class="grid">
			<Player :player="player" />
		</li>
	</ul>
</template>
