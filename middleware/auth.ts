export default defineNuxtRouteMiddleware(async (_to, _from) => {
    try {
        if (!useCookie('email').value && !useCookie('token').value) return navigateTo('/admin/login')
        const { data: auth } = await useFetch('/api/auth/auth', {
            headers: {
                'x-access-token': `${useCookie('token').value}`,
            },
        })
        if (!auth.value || !auth.value.email || useCookie('email').value !== auth.value.email) {
            useCookie('email').value = null
            useCookie('token').value = null
            return navigateTo('/admin/login')
        }
    }
    catch (error) {
        useCookie('email').value = null
        useCookie('token').value = null
        return navigateTo('/admin/login')
    }
})
