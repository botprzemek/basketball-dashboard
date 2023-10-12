import Game from "~/utils/model/game.model";

export const format = (sec: number): string => {
    if (!sec) return '00:00'
    const min: number = Math.floor(sec / 60)
    const secLeft: number = sec % 60
    const newMin: string = min < 10 ? `0${min}` : `${min}`
    const newSec: string = secLeft < 10 ? `0${secLeft}` : `${secLeft}`

    return `${newMin}:${newSec}`
}

export const gameAdmin = (socket: any): void => {
    socket.on('connect_error', (err: any): void => {
        console.log(`connection error due to ${err.message}`)
    })

    document.getElementById('changeStatus').addEventListener('click', (): void => {
        socket.emit('changeStatus')
    })

    document.getElementById('pauseGame').addEventListener('click', (): void => {
        socket.emit('pauseGame')
    })

    document.querySelectorAll('.changeScoreHost').forEach((element) =>
        element.addEventListener('click', (): void => {
            socket.emit('updateScore', { scoreHost: element.value, scoreOpponent: 0 })
        }),
    )

    document.querySelectorAll('.changeScoreOpponent').forEach((element) =>
        element.addEventListener('click', (): void => {
            socket.emit('updateScore', { scoreHost: 0, scoreOpponent: element.value })
        }),
    )
}

export const gameClient = (socket: any): void => {
    socket.on('connect_error', (err: any): void => {
        console.log(`connection error due to ${err.message}`)
    })

    socket.on('initialData', (data: Game): void => {
        document.querySelector('.scoreHost').textContent = data.scoreHost
        document.querySelector('.scoreOpponent').textContent = data.scoreOpponent
        document.getElementById('gameTime').textContent = format(data.time)
        document.getElementById('quarter').textContent = data.quarter ? data.quarter : 'End of regulation'
        document.getElementById('status').textContent = data.status ? 'Started' : 'Ended'
    })

    socket.on('updateData', (data: Game): void => {
        document.querySelector('.scoreHost').textContent = data.scoreHost
        document.querySelector('.scoreOpponent').textContent = data.scoreOpponent
        document.getElementById('gameTime').textContent = format(data.time)
        document.getElementById('quarter').textContent = data.quarter ? data.quarter : 'End of regulation'
        document.getElementById('status').textContent = data.status ? 'Started' : 'Ended'
    })

    socket.on('updateScore', (data: Game): void => {
        document.querySelector('.scoreHost').textContent = data.scoreHost
        document.querySelector('.scoreOpponent').textContent = data.scoreOpponent
    })

    socket.on('updateQuarter', (data: Game): void => {
        document.getElementById('gameTime').textContent = format(data.time)
        document.getElementById('quarter').textContent = data.quarter ? data.quarter : 4
    })

    socket.on('updateTimer', (data: Game): void => {
        document.getElementById('gameTime').textContent = format(data.time)
    })

    socket.on('pauseGame', (data: Game): void => {
        document.getElementById('paused').textContent = data.paused ? 'Paused' : 'Playing'
    })
}