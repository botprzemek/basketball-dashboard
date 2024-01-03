import type { QueryObject } from 'ufo'

export default (query: QueryObject): string =>
	Object.keys(query)
		.map(
			(key: string): string =>
				`${encodeURIComponent(key)}=${encodeURIComponent(`${query[key]}`)}`
		)
		.join('&')
