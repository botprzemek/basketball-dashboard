export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const { data: auth } = await useFetch('/api/auth', {
        method: 'POST',
        headers: {
            'x-access-token': '' + useCookie('token'),
        },
    })
    if (auth.value === 200) return
    navigateTo('./login')
})
