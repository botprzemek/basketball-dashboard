<script setup lang="ts">
import type {Ref} from '@vue/reactivity'
import heightUtil from '~/utils/height.util'

const { t } = useI18n({ useScope: 'global' })

useHead({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})

const { data: cities } = await useFetch(`/api/cities/name/Knurów`)

const { data: teams } = await useFetch(`/api/cities/id/${cities.value[0].id}/teams`)

for (let i = 0; i < teams.value.length; i++) {
  const { data: leagueById } = await useFetch(`/api/leagues/id/${teams.value[i].league_id}`)
  const { data: staffByTeamId } = await useFetch(`/api/teams/id/${teams.value[i].id}/staff`)
  const { data: playersByTeamId } = await useFetch(`/api/teams/id/${teams.value[i].id}/players`)
  teams.value[i].league = (leagueById) ? leagueById.value[0] : { name: 'Blank' }
  teams.value[i].players = (playersByTeamId) ? playersByTeamId.value : []
  teams.value[i].staff = (staffByTeamId) ? staffByTeamId.value : []
}
</script>

<template>
  <h1>{{ $t(`path.${$route.name.split('___')[0]}`) }}</h1>

  Team I
  Team II

  Statystyki średnie
  Statystyki drużynowe

  Trener motoryki
  Hala sportowa

  Zdjęcie
  Imię i nazwisko
  Numer
  Pozycja
  Wzrost
  Wiek

  Statystyki indywidualne

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
      <p>
        League
        {{ team.league.name }}
      </p>
      <p>Staff</p>
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
        <li v-for="player in team.players" :key="player.lastname" class="grid">
          <img :alt="`${player.name} ${player.lastname}`" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3449.png&w=70&h=50">
          <p>{{ player.name }}</p>
          <p>{{ player.lastname }}</p>
          <p>{{ player.number }}</p>
          <p>
            {{ heightUtil(player.height).feet }}'{{ heightUtil(player.height).inch }}"
            ({{ player.height }} cm)
          </p>
          <p>{{ player.position }}</p>
          <p>{{ player.age }}</p>
          <p>{{ player.starter }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>