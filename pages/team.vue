<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' })

useHead({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})

const getHeight = (height: number) => {
  const inch: number = 0.3937
  const temp: number = height * inch
  const final = { feet: 0, inch: 0 }

  final.feet = Math.floor(temp/12)
  final.inch = Math.floor(temp - (12 * final.feet))

  return `${final.feet}'${final.inch}"`
}

let { data: teams } = await useFetch('/api/team/name/Knury Knurów')
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

  <ul>
    <li v-for="team in teams" :key="team.name">
      <p>{{ team.name }}</p>
      <p>League</p>
      <p>{{ team.league.name }}</p>
      <p>City</p>
      <p>{{ team.city.name }}</p>
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
          <p>{{ getHeight(player.height) }} ({{ player.height }} cm)</p>
          <p>{{ player.position }}</p>
          <p>{{ player.age }}</p>
          <p>{{ player.starter }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>