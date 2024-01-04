import { H3Event } from 'h3'
import type { RuntimeConfig } from 'nuxt/schema'
import optionsFetch from '~/utils/options.fetch'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<any> => {
	try {
		const body = await readBody(event)

		const params: Record<string, string> | undefined = event.context.params

		if (!params) return []

		const options = {
			method: 'POST',
			body: JSON.stringify(body),
			headers: optionsFetch.headers
		}

		const url: string = `${config.public.url.api}/auth/${params.route}`
		const response: Response = await fetch(url, options)

		return response ? await response.json() : null
	} catch {
		return null
	}
})
