import type { H3Event } from 'h3'

const {
	apiSecret,
	public: { apiBase }
} = useRuntimeConfig()

const options = {
	headers: {
		secret: apiSecret
	}
}

export default defineEventHandler(async (event: H3Event): Promise<any[]> => {
	if (!event.context.params) return []
	const [id, parameter] = event.context.params.slug.split('/')
	if (!id) return []
	const url: string = parameter
		? `${apiBase}/players/id/${id}/${parameter}`
		: `${apiBase}/players/id/${id}`
	const data: Response = await fetch(url, options)
	if (data.status !== 200) return []
	return data ? await data.json() : []
})
