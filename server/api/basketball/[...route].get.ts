import type { H3Event } from 'h3'
import type { QueryObject } from 'ufo'
import type { RuntimeConfig } from 'nuxt/schema'
import optionsFetch from '~/utils/options.fetch'
import queryUtil from '~/utils/data/query.util'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<any[]> => {
	try {
		const query: QueryObject = getQuery(event)

		if (!query) return []

		const params: Record<string, string> | undefined = event.context.params

		if (!params) return []

		const url: string = `${config.public.url.api}/${params.route}?${queryUtil(query)}`
		const response: Response = await fetch(url, optionsFetch)

		if (response.status !== 200) return []

		return response ? await response.json() : []
	} catch {
		return []
	}
})
