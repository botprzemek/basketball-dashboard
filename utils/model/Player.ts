export class Player {
    name
    lastname
    number
    height
    position

    constructor(player: _Player) {
        this.name = player.name ? player.name : 'Imię'
        this.lastname = player.lastname ? player.lastname : 'Nazwisko'
        this.number = player.number ? player.number : 99
        this.height = new Height(player.height.cm)
        this.position = new Position(player.position.index)
    }
}

class Height {
    cm
    in

    constructor(height: number) {
        if (!height)  {
            this.cm = 180
            this.in = 6.0
            return
        }

        const inch = 0.3937
        const feet = 12
        const tempFull = height * inch
        const finalHeight = { feet: 0, inch: 0 }

        finalHeight.feet = Math.floor(tempFull / feet)
        finalHeight.inch = Math.floor(tempFull - (feet * finalHeight.feet))

        this.cm = height
        this.in = parseFloat(finalHeight.feet + '.' + finalHeight.inch)
    }
}

class Position {
    index
    short

    constructor(index: number) {
        const position = this.getPositionByIndex(index)
        this.index = position?.index
        this.short = position?.short
    }

    getPositionByIndex(index: number): _Position | undefined {
        const positionList: _Position[] = [
            { index: 0, short: 'PG' },
            { index: 1, short: 'SG' },
            { index: 2, short: 'SF' },
            { index: 3, short: 'PF' },
            { index: 4, short: 'C' }
        ]
        if (!index) return positionList.at(0)
        return positionList.at(index) ? positionList.at(index) : positionList.at(0)
    }
}

export type _Player = {
    name: String,
    lastname: String,
    number: number,
    height: _Height,
    position: _Position
}

type _Height = {
    cm: number,
    in: String
}

type _Position = {
    index: number,
    short: String
}