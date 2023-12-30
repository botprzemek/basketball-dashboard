class Player {
	element
	number
	stats = {
		points: 0,
		rebounds: 0,
		assists: 0,
		steals: 0,
		fouls: 0,
		turnovers: 0
	}

	constructor(number) {
		this.number = number

		this.element = document.createElement('section')
		this.element.classList.add(`player-${number}`)

		const title = document.createElement('p')
		this.element.innerText = `player no. ${number}`
		this.element.appendChild(title)

		for (let i = 0; i < Object.keys(this.stats).length; i++) {
			const key = Object.keys(this.stats)[i]

			const value = this.stats[key]
			const child = document.createElement('p')

			child.innerText = `${key} - ${value}`

			new Button(
				`+${key}`,
				() => {
					child.innerText = `${key} - ${this.addStat(key)}`
				},
				this.element
			)

			new Button(
				`-`,
				() => {
					child.innerText = `${key} - ${this.removeStat(key)}`
				},
				this.element
			)

			this.element.appendChild(child)
		}

		document.body.appendChild(this.element)
	}

	addStat(key) {
		return ++this.stats[key]
	}

	removeStat(key) {
		if (this.stats[key] >= 1) --this.stats[key]
		return this.stats[key]
	}
}

class Button {
	element
	method

	constructor(className, method, parent) {
		this.method = method

		this.element = document.createElement('button')
		this.element.classList.add(className)
		this.element.innerText = className.replace('-', ' ')
		this.element.addEventListener('click', () => method())

		parent.appendChild(this.element)
	}
}

const buttons = [
	new Button(
		'add-player',
		() => {
			const name = parseInt(prompt('Podaj numer gracza', '0'))
			const lastname = parseInt(prompt('Podaj numer gracza', '0'))
			const height = parseInt(prompt('Podaj numer gracza', '0'))
			const number = parseInt(prompt('Podaj numer gracza', '0'))
			if (!number) return
			if (!players) players = []
			if (players.filter((player) => player.number === number).length > 0) return
			players.push(new Player(number))
		},
		document.body
	),
	new Button(
		'remove-player',
		() => {
			if (!players || players.length === 0) return
			const number = parseInt(prompt('Podaj numer gracza', '0'))
			if (!number) return
			players
				.filter((player) => player.number === number)
				.forEach((player) => {
					player.element.remove()
					delete players.indexOf(number)
				})
		},
		document.body
	),
	new Button(
		'load-player',
		() => {
			fetch('http://localhost:3001/v1/players')
				.then((response) => response.json())
				.then((data) => data.forEach((player) => players.push(new Player(player.number))))
		},
		document.body
	)
]

let players = []
