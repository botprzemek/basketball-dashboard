import {Player,_Player} from '~/utils/model/Player'

const config = useRuntimeConfig()

export default defineEventHandler(async (): Promise<_Player> => {
    const response = await fetch(`${config.public.apiBase}/players`, {
        headers: {
            secret: config.apiSecret,
        },
    })
    return (await response.json()).map((player: _Player) => new Player(player))
})