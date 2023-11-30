export default (sec: number): string => {
	if (!sec) return '00:00'
	const min: number = Math.floor(sec / 60)
	const secLeft: number = sec % 60
	const newMin: string = min < 10 ? `0${min}` : `${min}`
	const newSec: string = secLeft < 10 ? `0${secLeft}` : `${secLeft}`

	return `${newMin}:${newSec}`
}
