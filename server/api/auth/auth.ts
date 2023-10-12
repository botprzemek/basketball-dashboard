import {RuntimeConfig} from 'nuxt/schema'
import {H3Event} from 'h3'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<any> => {
    const token: string = `${event.headers.get('x-access-token')}`
    const options = {
        headers: {
            secret: config.apiSecret,
            'x-access-token': token,
        },
    }
    const response: Response = await fetch(`${config.public.apiBase}/auth`, options)
    return (response.status === 200) ? response.json() : response.status
})