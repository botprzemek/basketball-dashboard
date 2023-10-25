import { H3Event } from 'h3'
import type { RuntimeConfig } from 'nuxt/schema'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<number> => {
    try {
        const token: string = `${event.headers.get('x-access-token')}`
        const options = {
            headers: {
                secret: config.apiSecret,
                'x-access-token': token,
            },
        }
        const response: Response = await fetch(`${config.public.apiBase}/auth`, options)
        return response.status
    } catch (error) {
        return 401
    }
})