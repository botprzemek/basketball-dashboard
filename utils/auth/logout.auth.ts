export default (path: string) => {
    const { $localePath } = useNuxtApp()
    const token = useCookie('token')
    token.value = null

    if (path.includes('log')) return

    return navigateTo($localePath('admin-login'))
}