import type {RuntimeConfig} from 'nuxt/schema'
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
        const data: Response = await fetch(`${config.public.apiBase}/auth/login`, options)
        if (data.status !== 200) return { token: '' }
        return data.json()
    } catch (error) {
        return { token: '' }
    }
})