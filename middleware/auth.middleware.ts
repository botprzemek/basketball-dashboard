import logout from '~/utils/auth/logout.auth'
import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware(
	async (_to: RouteLocationNormalized, from: RouteLocationNormalized): Promise<any> => {
		try {
			const token: string = `${useCookie('token').value}`

			if (!token) return logout(from.path)

			const { data: response } = await useFetch('/api/auth', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})

			if (!response || !response.value || response.value !== 200) return logout(from.path)
		} catch {
			return logout(from.path)
		}
	}
)
