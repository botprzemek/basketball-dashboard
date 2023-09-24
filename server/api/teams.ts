const config = useRuntimeConfig()

export default defineEventHandler(async (): Promise<any[]> => {
    const options = {
        headers: {
            secret: config.apiSecret
        }
    }
    const data: Response = await fetch(`${config.public.apiBase}/teams/${config.public.websiteName}`, options)
    return await data.json()
})