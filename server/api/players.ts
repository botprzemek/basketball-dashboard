import {Player,PlayerType} from '~/utils/model/Player'

const config = useRuntimeConfig()

export default defineEventHandler(async (): Promise<PlayerType> => {
    const response = await fetch(`${config.public.apiBase}/players`, {
        headers: {
            secret: config.apiSecret,
        },
    })
    return (await response.json()).map((player: PlayerType) => new Player(player))
})