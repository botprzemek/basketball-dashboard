import { H3Event } from 'h3'
import type { RuntimeConfig } from 'nuxt/schema'
import optionsAuth from '~/utils/auth/options.auth'

const config: RuntimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event): Promise<number> => {
	try {
		const token: string = `${event.headers.get('x-access-token')}`
		const response: Response = await fetch(`${config.public.apiBase}/auth`, {
			headers: {
				Authorization: optionsAuth.headers.Authorization,
				'x-access-token': token
			}
		})
		return response.status
	} catch (error) {
		return 401
	}
})
