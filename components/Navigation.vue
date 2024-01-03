<script setup lang="ts">
import paths from '~/config/path.config'
import logout from '~/utils/auth/logout.auth'

const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const token = useCookie('token')
const route = useRoute()

useHead({
	htmlAttrs: {
		lang: locale.value
	}
})
</script>

<template>
	<header class="fixed z-50 sm:h-16 md:h-12 lg:h-12">
		<nav class="w-screen grid place-content-center">
			<ul class="w-full flex gap-4">
				<li v-for="path in paths" :key="path">
					<NuxtLink :to="localePath(path)" style="text-decoration: none; color: white">
						{{ $t(`path.${path}`).replaceAll('Strona g', 'G') }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<NuxtLink
			:to="switchLocalePath(locale.code)"
			v-for="locale in locales"
			:key="locale"
			style="text-decoration: none; color: white"
		>
			{{ locale.name }}
		</NuxtLink>
		<button v-if="token" @click="logout(route.path)">Logout</button>
		<NuxtLink v-else :to="localePath('admin-login')"> Login </NuxtLink>
	</header>
</template>
