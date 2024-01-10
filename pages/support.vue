<script async setup lang="ts">
const { t } = useI18n({ useScope: 'global' })

useHeadSafe({
	title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})

const data = await fetch('https://zrzutka.pl/sm74bt/data.json')
const response = await data.json()
</script>

<template>
	<h1>{{ $t(`path.${$route.name.split('___')[0]}`) }}</h1>
	Zrzutka Link Partnerstwo Nasi partnerzy
	<aside>
    Wpłacono - {{ (response.balance / 5000).toFixed(2) * 100 }}%
  </aside>
</template>
