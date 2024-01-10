<script async setup lang="ts">
import Player from '~/components/Player.vue'

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()
const props = defineProps<{
	team: {
		id: bigint
		name: string
	}
}>()

const { data: players } = await useFetch(`/api/basketball/players?team_id=${props.team.id}`)
</script>

<template>
	<h4>Players</h4>
	<ul>
		<li>
			<ul class="grid grid-flow-col">
				<li>
          <p>first_name</p>
        </li>
				<li>
          <p>last_name</p>
        </li>
				<li>
          <p>number</p>
        </li>
				<li>
          <p>height</p>
        </li>
				<li>
          <p>position</p>
        </li>
				<li>
          <p>age</p>
        </li>
				<li>
          <p>starter</p>
        </li>
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
