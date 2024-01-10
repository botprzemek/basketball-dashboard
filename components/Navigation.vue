<script setup lang="ts">
import paths from '~/config/path.config'

const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

useHead({
	htmlAttrs: {
		lang: locale.value
	}
})
</script>

<template>
	<header
		class="z-50 fixed w-screen sm:h-16 md:h-12 lg:h-12 px-[15vw] grid place-content-center bg-red"
	>
		<nav class="w-full h-full">
			<ul class="w-full flex gap-4">
				<li v-for="path in paths" :key="path">
					<NuxtLink :to="localePath(path)" class="decoration-0">
						{{ $t(`path.${path}`).replaceAll('Strona g', 'G') }}
					</NuxtLink>
				</li>
				<li v-for="local in locales" :key="locale">
					<NuxtLink :to="switchLocalePath(local.code)" class="decoration-0">
						<span>
							{{ local.code.toUpperCase() }}
						</span>
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>
