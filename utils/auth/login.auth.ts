export default async (input: { email: string, password: string }) => {
    if (!input || !input.email || !input.password) return

    const { data: response } = await useFetch('/api/auth/login', {
        method: 'POST',
        body: input,
    })

    console.log(response)

    if (!response|| !response.value || response.value.status !== 200) {
        return
    }

    const token = useCookie('token', {
        secure: true,
        sameSite: 'strict',
        maxAge: 3600,
    })

    token.value = response.value.json().token

    const { $localePath } = useNuxtApp()

    return navigateTo($localePath('admin-match'))
}
