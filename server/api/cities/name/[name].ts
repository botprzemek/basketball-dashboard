import type {H3Event} from 'h3'

const { apiSecret, public: { apiBase}} = useRuntimeConfig()

const options = {
  headers: {
    secret: apiSecret
  }
}

export default defineEventHandler(async (event: H3Event): Promise<any[]> => {
  const name: string | undefined = getRouterParam(event, 'name')
  if (!name) return []
  const url: string = `${apiBase}/cities/name/${name}`
  const data: Response = await fetch(url, options)
  if (data.status !== 200) return []
  return (data) ? await data.json() : []
})