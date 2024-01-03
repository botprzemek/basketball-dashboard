import type { CookieRef } from '#app'

export default async (input: { email: string; password: string }): Promise<any> => {
	if (!input || !input.email || !input.password) return

	const { data: response, status } = await useFetch('/api/auth/login', {
		method: 'POST',
		body: input
	})

	if (!response || !response.value) return

	const cookieRef: CookieRef<string> = useCookie('token', {
		sameSite: 'strict',
		secure: true,
		httpOnly: false,
		maxAge: 3600
	})

	const { $localePath } = useNuxtApp()

	// @ts-ignore
	cookieRef.value = response.value.token

	return navigateTo($localePath('admin-dashboard'))
}
