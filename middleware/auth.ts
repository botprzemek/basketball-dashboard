import logout from '~/utils/auth/logout.auth'
import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware(
	async (_to: RouteLocationNormalized, from: RouteLocationNormalized) => {
		try {
			if (!useCookie('token').value) return logout(from.path)
			const { data: auth } = await useFetch('/api/auth/auth', {
				headers: {
					'x-access-token': `${useCookie('token').value}`
				}
			})
			if (!auth || !auth.value) return logout(from.path)
			if (auth.value !== 200) return logout(from.path)
		} catch (error) {
			return logout(from.path)
		}
	}
)
