import { RuntimeConfig } from 'nuxt/schema'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (): Promise<any> => {
    const options = {
        headers: {
            secret: config.apiSecret
        }
    }
    const data: Response = await fetch(`${config.public.apiBase}/players`, options)
    return (data) ? await data.json() : null
})