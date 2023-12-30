<script setup lang="ts">
let players = [
	{
		player: 'Kornel Suchocki',
		value: 21.3
	},
	{
		player: 'Igor Szkodny',
		value: 14
	},
	{
		player: 'Tomasz Gontarewicz',
		value: 11.7
	}
]
</script>

<template>
	<ul>
		<li v-for="player in players" :key="player.player">
			{{ player.player }}
			{{ player.value }}
		</li>
	</ul>
</template>
