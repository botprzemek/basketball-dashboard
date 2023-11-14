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

let status = ref('NOT_FOUND')
let quarter = ref(0)
let time = ref(0)
let teams = ref([])
let substitution = ref({
  team: 0,
  substitute: 0,
  changer: 0
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

  admin.on('update_status', (data) => status.value = data)

  admin.on('update_quarter', (data) => quarter.value = data)

  admin.on('update_time', (data) => time.value = data)

  admin.on('update_team', (data) => teams.value.push(data))

  admin.on('update_player', (data) => {
    console.table(
        teams.value
            .filter((team): boolean => team.name === data.team)[0]
            .players
            .filter((player): boolean => player.number === data.player.number)
            [0]'\'
    )
    teams.value
        .filter((team): boolean => team.name === data.team)[0]
        .players
        .filter((player): boolean => player.number === data.player.number)
        [0] = data.player
  })

  admin.on('update_player_state', (data) => {
    teams.value
        .filter((team): boolean => team.name === data.team)[0]
        .players
        .filter((player): boolean => player.number === data.number)
        [0].state = data.state
  })

  admin.on('update_player_statistics_seconds', (data) => {
    teams.value
        .filter((team) => team.name === data.team)[0]
        .players.filter((player) => player.number === data.number)
        [0].statistics.seconds = data.seconds
  })

  // admin.on('update_player', (data: any) => {
  //   players.value[data.id] = data
  // })
  //
  // admin.on('update_player_state', (data: any) => {
  //   players.value[data.id].state = data.state
  // })

  // admin.on('update_player_statistics_seconds', (data) => {})

  // admin.on('update_substitution', (data: any) => {
  //   players.value[data.old.id] = data.old
  //   players.value[data.new.id] = data.new
  // })
})

const startGame = () => {
  admin.emit('start_game')
}
const pauseGame = () => {
  admin.emit('pause_game')
}
const substitutePlayers = () => {
  console.table({
    team: 1 * substitution.value.team,
    substitute: 1 * substitution.value.substitute,
    changer: 1 * substitution.value.changer,
  })
  admin.emit('substitution_team', {
    team: 1 * substitution.value.team,
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
  <p>{{ status }}</p>
  <p>{{ quarter }}</p>
  <p>{{ timeUtil(time) }}</p>
  <br>
  <ul v-for="team in teams">
    <li>
      <h2>{{ team.name }}</h2>
      <br>
      <h3>Players</h3>
      <ul v-for="player in team.players">
        <li>
          <p>
            {{ player.name }}
            {{ player.lastname }}
            no. {{ player.number }}
          </p>
          <p>
            {{ player.position }}
            {{ player.state }}
          </p>
          <p>
            [[ MINUTES - {{ Math.ceil(player.statistics.seconds / 60) }} ]]
          </p>
        </li>
      </ul>
      <br>
    </li>
  </ul>
  <label>Team</label>
  <input v-model="substitution.team">
  <br>
  <label>Substitute</label>
  <input v-model="substitution.substitute">
  <br>
  <label>Changer</label>
  <input v-model="substitution.changer">
  <br>
  <button @click="substitutePlayers()">Substitution</button>
</template>