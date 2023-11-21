<script setup lang="ts">
import {io, Socket} from 'socket.io-client'
import timeUtil from '../../utils/time.util'

definePageMeta({
  middleware: [
    'auth',
  ],
})

const { t } = useI18n({ useScope: 'global' })
const token = useCookie('token').value

let admin: Socket

let loaded = ref(false)
let state = ref('NOT_FOUND')
let quarter = ref(0)
let time = ref(0)
let teams = ref([])
let substitution = ref({
  team: -1,
  substitute: -1,
  changer: -1
})

useHeadSafe({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0].replaceAll('-', '.')}`)
})

onMounted(() => {
  admin = io(`${useRuntimeConfig().public.websocketBase}/admin`, {
    secure: true,
    rejectUnauthorized: true,
    auth: {
      token: token,
    },
  })

  // let disconnected: boolean = false
  //
  // admin.on('connect_error', (error: any): void => {
  //   if (disconnected) {
  //     admin.disconnect()
  //     return
  //   }
  //   disconnected = true
  // })
  //
  // if (disconnected) return

  admin.emit('initialize_game')

  admin.on('update_state', (data) => state.value = data)

  admin.on('update_quarter', (data) => quarter.value = data)

  admin.on('update_time', (data) => time.value = data)

  admin.on('update_team', (data) => {
    teams.value.push(data)
    loaded.value = true
  })

  admin.on('update_player_state', (data) => {
    teams.value
        .filter((team): boolean => team.name === data.team)[0].players
        .filter((player): boolean => player.number === data.number)
        [0].state = data.state
  })

  admin.on('update_player_statistics_seconds', (data) => {
    teams.value
        .filter((team) => team.name === data.team)[0].players
        .filter((player) => player.number === data.number)
        [0].statistics.seconds = data.seconds
  })
})

const getActivePlayers = (): any[] => {
  if (substitution.value.team === -1) return []
  return teams.value
      .filter((team, index) => index === substitution.value.team)[0].players
      .filter((player) => player.state === 'PLAYING')
}

const getBenchedPlayers = (): any[] => {
  if (substitution.value.team === -1) return []
  return teams.value
      .filter((team, index) => index === substitution.value.team)[0].players
      .filter((player) => player.state === 'BENCHED')
}

const startGame = (): void => {
  admin.emit('start_game')
}

const pauseGame = (): void => {
  admin.emit('pause_game')
}

const substitutePlayers = () => {
  admin.emit('substitution_team', {
    team: substitution.value.team,
    substitute: 1 * substitution.value.substitute,
    changer: 1 * substitution.value.changer,
  })
}
</script>

<template>
  <h1>Game</h1>
  <button @click="startGame()">Start</button>
  <br>
  <button @click="pauseGame()">Pause</button>
  <p>{{ state }}</p>
  <p>{{ quarter }}</p>
  <p>{{ timeUtil(time) }}</p>
  <br>
  <ul v-for="team in teams">
    <li>
      <h2>{{ team.name }}</h2>
      <br>
      <h3>Players</h3>
      <ul class="grid">
        <li v-for="player in team.players" class="grid grid-flow-row outline outline-1">
          <section class="grid grid-cols-6">
            <p>no. {{ player.number }}</p>
            <p>{{ player.position }}</p>
            <p>{{ player.name }}</p>
            <p>{{ player.lastname }}</p>
            <p>{{ player.state }}</p>
            <p>{{ Math.ceil(player.statistics.seconds / 60) }} min</p>
          </section>
        </li>
      </ul>
      <br>
    </li>
  </ul>
  <section v-if="loaded">
    <h3>Substitution</h3>
    <label>Team</label>
    <select v-model="substitution.team">
      <option v-for="team in teams" :value="teams.indexOf(team)">
        {{ team.name }}
      </option>
    </select>
    <section v-if="substitution.team !== -1">
      <label>Substitute</label>
      <select v-model="substitution.substitute">
        <option v-for="(player, index) in getActivePlayers()" :value="player.number" v-bind:selected="index === 0">
          {{ player.name }} {{ player.lastname }}
        </option>
      </select>
      <br>
      <label>Changer</label>
      <select v-model="substitution.changer">
        <option v-for="(player, index) in getBenchedPlayers()" :value="player.number" v-bind:selected="index === 0">
          {{ player.name }} {{ player.lastname }}
        </option>
      </select>
    </section>
    <br>
    <button @click="substitutePlayers()">Click to substitute</button>
  </section>
</template>