import type { H3Event } from 'h3'
import optionsAuth from "~/utils/auth/options.auth";

const {
	apiSecret,
	public: { apiBase }
} = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<any[]> => {
	if (!event.context.params) return []
	const [id, parameter] = event.context.params.slug.split('/')
	if (!id) return []
	const url: string = parameter
		? `${apiBase}/arenas/id/${id}/${parameter}`
		: `${apiBase}/arenas/id/${id}`
	const data: Response = await fetch(url, optionsAuth)
	if (data.status !== 200) return []
	return data ? await data.json() : []
})
