import { RuntimeConfig } from 'nuxt/schema'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event): Promise<any>  => {
    // @ts-ignore
    return fetch(`${config.public.apiBase}/files/${event.context.params._}`, {
        headers: {
            secret: config.apiSecret,
        },
    })
})