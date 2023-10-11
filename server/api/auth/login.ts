import {RuntimeConfig} from 'nuxt/schema'
import {H3Event} from 'h3'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<{ status: number, cookies: string }> => {
    const body = await readBody(event)
    if (!(body.email || body.password)) return { status: 401, cookies: '' }
    const options = {
        method: 'POST',
        headers: {
            secret: config.apiSecret,
        },
        body: JSON.stringify(body)
    }
    const data: Response = await fetch(`${config.public.apiBase}/auth/login`, options)
    data.headers.get('set-cookie')

    return (data && data.status && data.headers.get('set-cookie'))
        ? { status: data.status, cookies: data.headers.get('set-cookie') || '' }
        : { status: 401, cookies: '' }
})