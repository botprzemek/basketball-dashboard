<script setup lang="ts">
import links from '~/config/link.config'

const localePath = useLocalePath()
const config = useRuntimeConfig()
</script>

<template>
	<footer class="z-50 relative w-screen mt-auto px-[15vw]">
		<nav class="w-full grid">
			<h1>{{ config.public.name }} - {{ $t('footer.catchphrase') }}</h1>
			<p>
				{{ $t('footer.copyright') }} © {{ new Date().getFullYear() }} -
				{{ config.public.name }}
			</p>
			<NuxtLink :to="localePath('sitemap')">
				{{ $t('footer.sitemap') }}
			</NuxtLink>
			<ul class="w-full flex gap-4">
				<li v-for="title in Object.keys(links)" :key="title">
					<h2>
						{{ $t(`links.title.${title}`) }}
					</h2>
					<ul>
						<li v-for="link in links[title]" :key="link">
							<!--              <NuxtLink :to="{ name: `/${title}`, params: { id: link } }">-->
							{{ $t(`links.child.${title}.${link}`) }}
							<!--              </NuxtLink>-->
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</footer>
</template>
