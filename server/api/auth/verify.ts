import {H3Event} from 'h3'
import type { RuntimeConfig } from 'nuxt/schema'
import type { QueryValue } from 'ufo'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<number> => {
    try {
        const verificationCode: QueryValue = getQuery(event)['verification-code']
        const options: { headers: { secret: string } } = {
            headers: {
                secret: config.apiSecret,
            },
        }
        const data: Response = await fetch(`${config.public.apiBase}/auth/verify?verification-code=${verificationCode}`, options)
        return (data && data.status) ? data.status : 404
    } catch (error) {
        return 404
    }
})