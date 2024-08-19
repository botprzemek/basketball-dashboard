import type { H3Event } from 'h3'
import optionsAuth from '~/utils/auth/options.auth'

const {
	apiSecret,
	public: { apiBase }
} = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<any[]> => {
	const name: string | undefined = getRouterParam(event, 'name')
	if (!name) return []
	const url: string = `${apiBase}/cities/name/${name}`
	const data: Response = await fetch(url, optionsAuth)
	if (data.status !== 200) return []
	return data ? await data.json() : []
})
