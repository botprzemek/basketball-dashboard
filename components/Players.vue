<script async setup lang="ts">
import Player from '~/components/Player.vue'

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()
const props = defineProps<{
	team: {
		id: bigint
		name: string
		players: any[]
	}
}>()

const { data: players } = await useFetch(`/api/basketball/players?team_id=${props.team.id}`)
</script>

<template>
	<h4>Players</h4>
	<ul>
		<li>
			<ul class="grid">
				<li>Name</li>
				<li>Lastname</li>
				<li>Number</li>
				<li>Height</li>
				<li>Pos</li>
				<li>Age</li>
				<li>Starter</li>
			</ul>
		</li>
		<li v-for="player in players" :key="player.lastname" class="grid">
			<NuxtLink
				:to="
					localePath({
						name: 'team-name-players-fullname',
						params: { name: team.name, fullname: `${player.name} ${player.lastname}` }
					})
				"
			>
				<Player :player="player" />
			</NuxtLink>
		</li>
	</ul>
</template>
