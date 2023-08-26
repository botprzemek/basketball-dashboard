const config = useRuntimeConfig()

export default defineEventHandler(async (event): Promise<Response>  => {
    return fetch(`${config.public.apiBase}/files/${event.context.params._}`, {
        headers: {
            secret: config.apiSecret,
        },
    })
})