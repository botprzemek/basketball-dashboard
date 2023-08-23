export default class Player {
    name
    lastname
    number
    height
    position

    constructor(name, lastname, number, height, position) {
        this.name = (name) ? name : 'Imię'
        this.lastname = (lastname) ? lastname : 'Nazwisko'
        this.number = (number) ? number : 99
        this.setHeight(height)
        this.setPosition(position)
    }

    setHeight(height) {
        if (!height) this.height = {
            cm: 180,
            in: 6.0
        }
        const inch = 0.3937
        const feet = 12
        const tempFull = height * inch
        const finalHeight = { feet: 0, inch: 0 }

        finalHeight.feet = Math.floor(tempFull / feet)
        finalHeight.inch = Math.floor(tempFull - (feet * finalHeight.feet))

        this.height = {
            cm: height,
            in: parseFloat(finalHeight.feet + '.' + finalHeight.inch)
        }
    }

    setPosition(position) {
        if (position === undefined) return positionList[0]
        this.position = (positionList[position] === undefined) ? positionList[0] : positionList[position]
    }

    getPlayerData() {
        return {
            name: this.name,
            lastname: this.lastname,
            number: this.number,
            height: this.height,
            position: this.position
        }
    }
}

const positionList = [
    { index: 0, name: 'Rozgrywający', short: 'PG' },
    { index: 1, name: 'Rzucający obrońca', short: 'SG' },
    { index: 2, name: 'Niski Skrzydłowy', short: 'SF' },
    { index: 3, name: 'Silny Skrzydłowy', short: 'PF' },
    { index: 4, name: 'Środkowy', short: 'C' }
]