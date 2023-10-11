import {RuntimeConfig} from 'nuxt/schema'
import {H3Event} from 'h3'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<number> => {
    const token: string | null = event.headers.get('x-access-token')
    console.log(token)
    if (!token) return 404
    const options = {
        method: 'POST',
        headers: {
            secret: config.apiSecret,
            'x-access-token': token,
        },
    }
    const data: Response = await fetch(`${config.public.apiBase}/auth`, options)
    return (data && data.status) ? data.status : 404
})