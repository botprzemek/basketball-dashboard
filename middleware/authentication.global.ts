export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path.includes("/auth")) {
        return;
    }

    if (import.meta.client) {
        return;
    }

    if (useCookie("refresh-token").value) {
        return;
    }

    return navigateTo({ path: "/auth/login" });

    // const tokens = useCookie("access-token").value;
    // console.log(tokens);
});
