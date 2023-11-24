import { type RuntimeConfig } from 'nuxt/schema'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (): Promise<any> => {
    const options = {
        headers: {
            secret: config.apiSecret
        }
    }
    const response: Response = await fetch(`${config.public.apiBase}/players`, options)
    return response.body
})