<script setup lang="ts">
import heightUtil from '~/utils/data/height.util'

const props = defineProps<{
	player: {
		name: string
		lastname: string
		teamName?: string
		number: number
		position: string
		height: number
		age: string
	}
}>()

toRefs(props)
</script>

<template>
	<section>
		<img
			:alt="`${player.name} ${player.lastname}`"
			src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3449.png&w=70&h=50"
		/>
		<h1>{{ player.lastname }}</h1>
		<p>{{ player.name }}</p>
		<p v-if="player.teamName">{{ player.teamName }}</p>
		<p>{{ player.number }}</p>
		<p>{{ player.position }}</p>
		<p>
			{{ heightUtil(player.height).feet }}'{{ heightUtil(player.height).inch }}" ({{
				player.height
			}}
			cm)
		</p>
		<p>{{ player.age }}</p>
	</section>
</template>
