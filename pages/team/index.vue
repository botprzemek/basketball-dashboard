<script async setup lang="ts">
import teamData from '~/composables/data/team.data'

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()

useHead({
	title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})

const { cities, teams } = await teamData()
</script>

<template>
	<h1>{{ $t(`path.${$route.name.split('___')[0]}`) }}</h1>

	Team I Team II Statystyki średnie Statystyki drużynowe Trener motoryki Hala sportowa Zdjęcie
	Imię i nazwisko Numer Pozycja Wzrost Wiek Statystyki indywidualne

	<p v-for="city in cities" :key="city.name">
		City
		{{ city.name }},
		{{ city.state }}
	</p>
	<ul>
		<li v-for="team in teams" :key="team.name">
			<p>
				Team
				{{ team.name }}
			</p>
			<p v-if="team.league">
				League
				{{ team.league.name }}
			</p>
			<p v-if="team.arena">
				Arena
				{{ team.arena.name }}
				{{ team.arena.location }}
			</p>
			<p v-if="team.staff">Staff</p>
			<ul>
				<li v-for="staff in team.staff" :key="staff.lastname" class="grid">
					<p>{{ staff.name }}</p>
					<p>{{ staff.lastname }}</p>
					<p>{{ staff.role }}</p>
				</li>
			</ul>
			<p>Players</p>
			<ul>
				<li class="grid">
					<p>Name</p>
					<p>Lastname</p>
					<p>Number</p>
					<p>Height</p>
					<p>Pos</p>
					<p>Age</p>
					<p>Starter</p>
				</li>
				<li
					v-if="team.players"
					v-for="player in team.players"
					:key="player.lastname"
					class="grid"
				>
					<NuxtLink
						:to="
							localePath({
								name: 'team-name-players-fullname',
								params: {
									name: team.name,
									fullname: `${player.name} ${player.lastname}`
								}
							})
						"
					>
						<Player :player="player" />
					</NuxtLink>
				</li>
			</ul>
		</li>
	</ul>
</template>
