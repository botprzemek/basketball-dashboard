import { H3Event } from 'h3'
import type { RuntimeConfig } from 'nuxt/schema'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<any> => {
    try {
        const body = await readBody(event)
        const options = {
            method: 'POST',
            headers: {
                secret: config.apiSecret,
            },
            body: JSON.stringify(body)
        }

        const response: Response = await fetch(`${config.public.apiBase}/auth/login`, options)

        return response.body
    } catch (error) {
        return null
    }
})