const config = useRuntimeConfig()

export default defineEventHandler(async (event): Promise<Response>  => {
    // @ts-ignore
    return fetch(`${config.public.apiBase}/files/${event.context.params._}`, {
        headers: {
            secret: config.apiSecret,
        },
    })
})