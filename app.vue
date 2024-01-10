<script setup lang="ts">
const config = useRuntimeConfig()
const { t, locale } = useI18n({ useScope: 'global' })

useHeadSafe({
	htmlAttrs: {
		lang: locale.value
	},
	bodyAttrs: {
		class: 'min-h-screen max-h-max min-w-screen max-w-screen'
	},
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} · ${config.public.name}` : `${config.public.websiteName}`
	}
})

useSeoMeta({
	ogTitle: `${t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)} · ${config.public.name}`,
	// ogDescription: `${t(`pages.${useRouter().currentRoute.value.name.split('___')[0]}.description`)}`
	// ogImage: '[og:image]',
	// ogUrl: '[og:url]',
	// twitterTitle: '[twitter:title]',
	// twitterDescription: '[twitter:description]',
	// twitterImage: '[twitter:image]',
	// twitterCard: 'summary'
})
</script>

<template>
	<main
		class="min-h-screen max-h-max min-w-screen max-w-screen flex flex-col bg-black text-white"
	>
		<NuxtLayout>
			<NuxtPage />
			<VitePwaManifest />
		</NuxtLayout>
	</main>
</template>
