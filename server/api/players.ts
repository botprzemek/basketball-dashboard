import {Player,_Player} from '~/model/Player'

const config = useRuntimeConfig()

export default defineEventHandler(async (): Promise<_Player> => {
    const response = await fetch(`${config.public.apiBase}/players`, {
        headers: {
            secret: config.apiSecret,
            'Content-Type': 'application/json'
        },
    })
    return (await response.json()).map((player: _Player) => new Player(player))
})