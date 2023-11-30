export default async (input: { email: string; password: string }) => {
	if (!input || !input.email || !input.password) return

	const { data: response, status } = await useFetch('/api/auth/login', {
		method: 'POST',
		body: input
	})

	if (!response || !response.value || !response.value.token || status.value !== 'success') return

	const token = useCookie('token', {
		secure: true,
		sameSite: 'strict',
		maxAge: 3600
	})

	token.value = response.value.token

	const { $localePath } = useNuxtApp()

	return navigateTo($localePath('admin-match'))
}
