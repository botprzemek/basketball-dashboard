interface height {
	feet: number
	inch: number
}

export default (height: number): height => {
	const inch: number = 0.3937
	const temp: number = height * inch
	const final: height = { feet: 0, inch: 0 }

	final.feet = Math.floor(temp / 12)
	final.inch = Math.floor(temp - 12 * final.feet)

	return final
}
