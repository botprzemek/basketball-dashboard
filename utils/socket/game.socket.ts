import type Game from '~/utils/model/game.model'

export const format = (sec: number): string => {
    if (!sec) return '00:00'
    const min: number = Math.floor(sec / 60)
    const secLeft: number = sec % 60
    const newMin: string = min < 10 ? `0${min}` : `${min}`
    const newSec: string = secLeft < 10 ? `0${secLeft}` : `${secLeft}`

    return `${newMin}:${newSec}`
}

export const gameAdmin = (socket: any): void => {
    let disconnected: boolean = false

    socket.on('connect_error', (error: any): void => {
        if (disconnected) {
            socket.disconnect()
            return
        }
        console.log(error)
        disconnected = true
    })

    if (disconnected) return

    // @ts-ignore
    document.getElementById('changeStatus').addEventListener('click', (): void => {
        socket.emit('changeStatus')
    })

    // @ts-ignore
    document.getElementById('pauseGame').addEventListener('click', (): void => {
        socket.emit('pauseGame')
    })

    document.querySelectorAll('.changeScoreHost').forEach((element) =>
        element.addEventListener('click', (): void => {
            // @ts-ignore
            socket.emit('updateScore', { scoreHost: element.value, scoreOpponent: 0 })
        }),
    )

    document.querySelectorAll('.changeScoreOpponent').forEach((element) =>
        element.addEventListener('click', (): void => {
            // @ts-ignore
            socket.emit('updateScore', { scoreHost: 0, scoreOpponent: element.value })
        }),
    )
}

export const gameClient = (socket: any): void => {
    let disconnected: boolean = false

    socket.on('connect_error', (error: any): void => {
        if (disconnected) {
            socket.disconnect()
            return
        }
        console.log(error)
        disconnected = true
    })

    if (disconnected) return

    socket.on('initialData', (data: Game): void => {
        // @ts-ignore
        document.querySelector('.scoreHost').textContent = data.scoreHost
        // @ts-ignore
        document.querySelector('.scoreOpponent').textContent = data.scoreOpponent
        // @ts-ignore
        document.getElementById('gameTime').textContent = format(data.time)
        // @ts-ignore
        document.getElementById('quarter').textContent = data.quarter ? data.quarter : 'End of regulation'
        // @ts-ignore
        document.getElementById('status').textContent = data.status ? 'Started' : 'Waiting'
    })

    socket.on('updateData', (data: Game): void => {
        // @ts-ignore
        document.querySelector('.scoreHost').textContent = data.scoreHost
        // @ts-ignore
        document.querySelector('.scoreOpponent').textContent = data.scoreOpponent
        // @ts-ignore
        document.getElementById('gameTime').textContent = format(data.time)
        // @ts-ignore
        document.getElementById('quarter').textContent = data.quarter ? data.quarter : 'End of regulation'
        // @ts-ignore
        document.getElementById('status').textContent = data.status ? 'Started' : 'Ended'
    })

    socket.on('updateScore', (data: Game): void => {
        // @ts-ignore
        document.querySelector('.scoreHost').textContent = data.scoreHost
        // @ts-ignore
        document.querySelector('.scoreOpponent').textContent = data.scoreOpponent
    })

    socket.on('updateQuarter', (data: Game): void => {
        // @ts-ignore
        document.getElementById('gameTime').textContent = format(data.time)
        // @ts-ignore
        document.getElementById('quarter').textContent = data.quarter ? data.quarter : 4
    })

    socket.on('updateTimer', (data: Game): void => {
        // @ts-ignore
        document.getElementById('gameTime').textContent = format(data.time)
    })

    socket.on('pauseGame', (data: Game): void => {
        // @ts-ignore
        document.getElementById('paused').textContent = data.paused ? 'Paused' : 'Playing'
    })
}