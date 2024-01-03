import { H3Event } from 'h3'
import type { RuntimeConfig } from 'nuxt/schema'
import optionsAuth from '~/utils/options.fetch'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<number> => {
	try {
		const token: string = `${event.headers.get('Authorization')}`

		if (!token || token === '') return 401

		const options = {
			method: 'GET',
			headers: {
				Authorization: token.includes('Bearer') ? token : `Bearer ${token}`,
				'x-api-key': optionsAuth.headers['x-api-key']
			}
		}

		const response: Response = await fetch(`${config.public.url.api}/auth`, options)

		return response.status
	} catch {
		return 401
	}
})
