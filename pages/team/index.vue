<script async setup lang="ts">
import Teams from '~/components/Teams.vue'

const { t } = useI18n({ useScope: 'global' })

useHead({
	title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})

let { data: cities } = await useFetch(`/api/basketball/cities?name=Knurów`)
</script>

<template>
	<section v-for="city in cities" :key="city.name">
		<Teams :city="city" />
	</section>
</template>
