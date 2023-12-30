<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' })

useHeadSafe({
	title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})
</script>

<template>
	<h1>{{ $t(`path.${$route.name.split('___')[0]}`) }}</h1>
	Road mapa z osiągnięciami Stworzenie Aktualny stan ŚLK Sparingi Knury Knurów to zespół, który
	powstał z inicjatywy kilku młodych ludzi zakochanych w koszykówce. Spotykali się na boiskach
	szkolnych, a część z nich trenowała pod okiem trenera młodzieży Janusza Klofa. Wraz z
	ukończeniem szkoły podstawowej pojawił się problem, który postawił potężny znak zapytania na ich
	koszykarskim szlaku. Na terenie Knurowa nie ma klubu, który zajmuje się szkoleniem koszykówki na
	poziomie juniorskim w wieku 16 lat i powyżej. Młodzi koszykarze stanęli przed nie lada
	wyzwaniem: porzucić wszelkie marzenia o karierze koszykarza lub podjąć treningi w obcym
	otoczeniu w innym klubie. Jedni próbowali swych sił w szkółce GTK Gliwice, drudzy podjęli
	treningi w Knurowskim Towarzystwie Koszykówki JS Invest. Przeskok w poziomie umiejętności oraz
	trudność w adaptacji spowodowała, że nastolatkowie postanowili wziąć sprawy w swoje ręce i
	powołali do życia własną drużynę. Młodzież zwróciła się do Stowarzyszenia „Cała Naprzód”
	szukając wsparcia (m.in. finansowego). Stowarzyszenie zdecydowało się włączyć w projekt i
	realizować go w ramach nieodpłatnej działalności pożytku publicznego.
</template>
