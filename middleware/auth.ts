export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const { data: auth } = await useFetch('/api/auth/auth', {
        method: 'POST',
        headers: {
            'x-access-token': '' + useCookie('token').value,
        },
    })
    if (auth.value === 200) return
    navigateTo('./login')
})
