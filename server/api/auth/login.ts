import {RuntimeConfig} from 'nuxt/schema'
import {H3Event} from 'h3'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<{ token: string }> => {
    try {
        const body = await readBody(event)
        const options = {
            method: 'POST',
            headers: {
                secret: config.apiSecret,
            },
            body: JSON.stringify(body)
        }
        return (await fetch(`${config.public.apiBase}/auth/login`, options)).json()
    } catch (error) {
        return { token: '' }
    }
})