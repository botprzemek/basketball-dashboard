export default async (input: { email: string, password: string }) => {
    if (!input || !input.email || !input.password) return

    const { data: response } = await useFetch('/api/auth/login', {
        method: 'POST',
        body: input,
    })

    if (!response || !response.value || !response.value.token) {
        console.log('Login failed')
        return
    }

    const token = useCookie('token', {
        secure: true,
        sameSite: true,
        maxAge: 3600,
    })

    token.value = response.value.token

    const localePath = useLocalePath()

    return navigateTo(localePath({ name: 'admin-match' }))
}
