<script setup lang="ts">
import socials from '~/config/social.config'
import contact from '~/config/contact.config'

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()

useHeadSafe({
	title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})
</script>

<template>
	<section>
		<h1>
			{{ $t('pages.contact.title') }}
		</h1>
		<p>
			{{ $t('pages.contact.description') }}
		</p>
	</section>

	<!--  <a :href="`webcal:${new Date()}`">TEST KALENDARZA</a>-->

	<section>
		<h3>
			{{ $t('pages.contact.post.title') }}
		</h3>
		<ul>
			<li v-for="element in Object.keys(contact)" :key="contact[element].content">
				<a :href="contact[element].link">
					{{ $t(`pages.contact.post.${element}`) }} {{ contact[element].content }}
				</a>
			</li>
		</ul>
	</section>

	<section>
		<h3>
			{{ $t('pages.contact.socials.title') }}
		</h3>
		<p>
			{{ $t('pages.contact.socials.description') }}
		</p>
		<ul>
			<li v-for="social in socials" :key="social.name">
				<a :href="social.link" target="_blank">
					{{ social.name }}
				</a>
			</li>
		</ul>
	</section>

	<section>
		<h3>
			{{ $t('pages.contact.maps') }}
		</h3>
		<!--    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638.1821194752788!2d18.665386400000003!3d50.222294200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369279b4963f%3A0xe67763a72d737fe3!2sSzpitalna%208%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1sen!2spl!4v1697113962476!5m2!1sen!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>-->
	</section>

	<section>
		<h3>
			{{ $t('pages.contact.available.title') }}
		</h3>

		<p>
			{{ $t('pages.contact.available.description') }}
		</p>

		<p>
			{{ $t('pages.contact.available.matches.title') }}
		</p>

		<ul>
			<li>
				<p>
					<NuxtLinkLocale :to="localePath('schedule')">
						{{ $t('pages.contact.available.matches.league') }}
						({{ $t('pages.contact.available.matches.schedule') }})
					</NuxtLinkLocale>
				</p>
			</li>
			<li>
				<p>
					<NuxtLinkLocale :to="localePath('schedule')">
						{{ $t('pages.contact.available.matches.scrimmage') }}
						({{ $t('pages.contact.available.matches.schedule') }})
					</NuxtLinkLocale>
				</p>
			</li>
		</ul>

		<p>
			{{ $t('pages.contact.available.office.title') }}
		</p>

		<ul>
			<li v-for="index in 5" :key="index">
				<p>
					{{ $t(`pages.contact.available.office.days.${index - 1}`) }}
					-
					{{ $t('pages.contact.available.office.hours') }}
				</p>
			</li>
		</ul>
	</section>
</template>
