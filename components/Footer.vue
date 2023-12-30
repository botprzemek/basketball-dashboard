<script setup lang="ts">
import links from '~/config/links'

const localePath = useLocalePath()
</script>

<template>
	<footer class="mt-auto">
		<nav class="w-screen grid place-content-center">
			<h1>Knury Knurów - Młodzież idzie po swoje!</h1>
			<p>{{ $t('static.copyright') }} © {{ new Date().getFullYear() }} - Knury Knurów</p>
			<NuxtLink :to="localePath('sitemap')">
				{{ $t('static.sitemap') }}
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
