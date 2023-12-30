export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'pl',
	messages: {
		pl: {
			static: {
				copyright: 'Wszelkie prawa zastrzeżone',
				sitemap: 'Mapa strony'
			},
			pages: {
				match: {
					team: {
						name: ''
					},
					players: {
						name: 'Imię',
						lastname: 'Nazwisko',
						number: 'Nr',
						position: 'Pozycja',
						height: 'Wzrost',
						age: 'Wiek'
					},
					position: {
						PG: 'Rozgrywający obrońca',
						SG: 'Rzucający obrońca',
						SF: 'Niski Skrzydłowy',
						PF: 'Silny skrzydłowy',
						C: 'Środkowy'
					}
				},
				contact: {
					title: 'Kontakt',
					description:
						'Knury Knurów to projekt Stowarzyszenia "Cała Naprzód" z siedzibą ul. Zwycięstwa 1/1, 44-100 Gliwice, realizowany w ramach nieodpłatnej działalności pożytku publicznego',
					post: {
						title: 'Korespondencja',
						address: 'Adres',
						office: 'Biuro',
						training: 'Treningi',
						email: 'E-mail',
						arena: 'Obiekt sportowy'
					},
					socials: {
						title: 'Social Media',
						description:
							'Dołączcie do nas, na waszych ulubionych platformach społecznościowych!'
					},
					maps: 'Mapa',
					available: {
						title: 'Dni i godziny otwarcia',
						description:
							'Masz pytanie? Zadzwoń do nas! Lub napisz do nas maila! Konieczne wcześniejsze umówienie spotkania telefonicznie!',
						matches: {
							title: 'Rozgrywki',
							league: 'ŚLK - Niedziele',
							scrimmage: 'Sparingi - Soboty',
							schedule: 'Terminarz'
						},
						office: {
							title: 'Biuro',
							days: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'],
							hours: '08:00 - 13:00'
						}
					}
				}
			},
			path: {
				about: 'O nas',
				admin: {
					login: 'Logowanie',
					match: 'Zarządzanie Meczem'
				},
				contact: 'Kontakt',
				index: 'Strona główna',
				media: 'Media',
				merch: 'Merch',
				match: 'Mecz',
				news: 'Aktualności',
				partnership: 'Partnerstwo',
				schedule: 'Terminarz',
				sitemap: 'Mapa Strony',
				support: 'Wsparcie',
				team: 'Zespół'
			},
			links: {
				title: {
					contact: 'Kontakt',
					about: 'Knury',
					social: 'Sociale'
				},
				child: {
					contact: {
						reach: 'Dane kontaktowe',
						form: 'Formularz',
						join: 'Dołącz do nas',
						partnership: 'Partnerstwo'
					},
					about: {
						about: 'O nas',
						privacy: 'Prywatność',
						team: 'Nasz zespół',
						support: 'Wsparcie'
					},
					social: {
						facebook: 'Facebook',
						instagram: 'Instagram',
						tiktok: 'TikTok',
						youtube: 'Youtube'
					}
				}
			}
		},
		en: {
			static: {
				copyright: 'All rights reserved',
				sitemap: 'Site map'
			},
			pages: {
				contact: {
					title: 'Contact',
					description:
						'Knury Knurów is a project maintained by Non-profit organization named "Cała Naprzód" based in ul. Zwycięstwa 1/1 44-100 Gliwice, accomplished as part of unpaid public benefit activities.',
					post: {
						title: 'Post',
						address: 'Address',
						office: 'Office',
						training: 'Training',
						email: 'E-mail',
						arena: 'Arena'
					},
					socials: {
						title: 'Social Media',
						description: 'Join us, on your favorite social media app!'
					},
					maps: 'Maps',
					available: {
						title: 'Days schedule and opening hours',
						description:
							'Do you have a question? Call us! Or send us an email! Prior phone appointment is necessary!',
						matches: {
							title: 'Matches',
							league: 'League - Sunday',
							scrimmage: 'Scrimmages - Saturday',
							schedule: 'Schedule'
						},
						office: {
							title: 'Office',
							days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
							hours: '8 AM - 1 PM'
						}
					}
				}
			},
			path: {
				about: 'About',
				admin: {
					login: 'Login',
					match: 'Match Dashboard'
				},
				contact: 'Contact',
				index: 'Home',
				media: 'Media',
				merch: 'Merch',
				match: 'Match',
				news: 'News',
				partnership: 'Partnership',
				schedule: 'Schedule',
				sitemap: 'Site Map',
				support: 'Support',
				team: 'Team'
			},
			links: {
				title: {
					contact: 'Contact',
					about: 'Knury',
					social: 'Socials'
				},
				child: {
					contact: {
						reach: 'Reach us',
						form: 'Form',
						join: 'Join us',
						partnership: 'Partnership'
					},
					about: {
						about: 'About us',
						privacy: 'Privacy',
						team: 'Our team',
						support: 'Support'
					},
					social: {
						facebook: 'Facebook',
						instagram: 'Instagram',
						tiktok: 'TikTok',
						youtube: 'Youtube'
					}
				}
			}
		}
	}
}))
