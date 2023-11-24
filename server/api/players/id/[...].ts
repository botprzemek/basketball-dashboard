import { type RuntimeConfig } from 'nuxt/schema'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event): Promise<any>  => {
  const options = {
    headers: {
      secret: config.apiSecret
    }
  }
  // @ts-ignore
  const data: Response = await fetch(`${config.public.apiBase}/players/id/${event.context.params._}`, options)
  return (data.status === 200) ? await data.json() : []
})