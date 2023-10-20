<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' })

useHeadSafe({
  title: t(`path.${useRouter().currentRoute.value.name.split('___')[0]}`)
})
</script>

<template>
  <h1>Kontakt</h1>

  <h2>Knury Knurów - Stowarzyszenie "Cała Naprzód"</h2>

  <h3>Korespondecja</h3>
  <ul>
    <li>Adres	ul. Szpitalna 8/414, 44-190 Knurów</li>
    <li>Biuro	48 502 320 658 (Angelika Suchocka)</li>
    <a href="tel:+48502320658">Link</a>
    <li>Treningi 48 729 319 171 (Przemysław Szymański)</li>
    <a href="tel:+48729319171">Link</a>
    <li>Email	info@knuryknurow.pl</li>
    <a href="mailto:info@knuryknurow.pl">Link</a>
    <li>Hala al. Lipowa 12A, 44-194 Knurów</li>
    <a href="https://maps.app.goo.gl/AGNb9PufTWq9uMgL8">Link</a>
  </ul>

  <h3>Social Media</h3>
  <ul>
    <li>Facebook fb.knuryknurow.pl</li>
    <a href="https://fb.me/knury.knurow" target="_blank">Link</a>
    <li>Instagram	ig.knuryknurow.pl</li>
    <a href="https://www.instagram.com/knury.knurow" target="_blank">Link</a>
    <li>Tiktok tt.knuryknurow.pl</li>
    <a href="https://tiktok.com/@knury.knurow" target="_blank">Link</a>
    <li>Youtube yt.knuryknurow.pl</li>
    <a href="https://www.youtube.com/@knury.knurow" target="_blank">Link</a>
  </ul>

  <h3>Mapa</h3>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638.1821194752788!2d18.665386400000003!3d50.222294200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711369279b4963f%3A0xe67763a72d737fe3!2sSzpitalna%208%2C%2044-190%20Knur%C3%B3w!5e0!3m2!1sen!2spl!4v1697113962476!5m2!1sen!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  <p>Masz pytanie? Zadzwoń do nas!
  Lub napisz do nas maila!
    Konieczne wcześniejsze umówienie spotkania telefonicznie!</p>

  <h3>Dni i godziny otwarcia</h3>
  <p>Rozgrywki</p>
  <ul>
    <li>ŚLK - Niedziele (<NuxtLinkLocale to="/schedule">Terminarz</NuxtLinkLocale>)</li>
    <li>Sparingi - Soboty (<NuxtLinkLocale to="/schedule">Terminarz</NuxtLinkLocale>)</li>
  </ul>
  <p>Biuro</p>
  <ul>
    <li>Poniedziałek - 8:00 - 13:00</li>
    <li>Wtorek - 8:00 - 13:00</li>
    <li>Środa - 8:00 - 13:00</li>
    <li>Czwartek - 8:00 - 13:00</li>
    <li>Piątek - 8:00 - 13:00</li>
  </ul>
</template>