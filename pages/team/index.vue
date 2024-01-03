<script async setup lang="ts">
import Teams from '~/components/Teams.vue'

const { t } = useI18n({ useScope: 'global' })

useHead({
	title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})

let { data: cities } = await useFetch(`/api/basketball/cities?name=Knurów`)
</script>

<template>
	<h1>{{ $t(`path.${$route.name.split('___')[0]}`) }}</h1>

	Team I Team II Statystyki średnie Statystyki drużynowe Trener motoryki Hala sportowa Zdjęcie
	Imię i nazwisko Numer Pozycja Wzrost Wiek Statystyki indywidualne

	<section v-for="city in cities" :key="city.name">
		<h3>
			{{ city.name }},
			{{ city.state }}
		</h3>
		<Teams :city="city" />
	</section>
	<!--			<p v-if="team.league">-->
	<!--				League-->
	<!--				{{ team.league.name }}-->
	<!--			</p>-->
	<!--			<p v-if="team.arena">-->
	<!--				Arena-->
	<!--				{{ team.arena.name }}-->
	<!--				{{ team.arena.location }}-->
	<!--			</p>-->
	<!--			<p v-if="team.staff">Staff</p>-->
	<!--			<ul>-->
	<!--				<li v-for="staff in team.staff" :key="staff.lastname" class="grid">-->
	<!--					<p>{{ staff.name }}</p>-->
	<!--					<p>{{ staff.lastname }}</p>-->
	<!--					<p>{{ staff.role }}</p>-->
	<!--				</li>-->
	<!--			</ul>-->
	<!--			<AverageStatistics />-->
</template>
