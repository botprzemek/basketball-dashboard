export default async (): Promise<any> => {
	const { data: cities } = await useFetch(`/api/cities/name/Knurów`)
	const { data: teams } = await useFetch(`/api/cities/id/${cities.value[0].id}/teams`)

	for (let i = 0; i < teams.value.length; i++) {
		const { data: leagueById } = await useFetch(
			`/api/leagues/id/${teams.value[i] ? teams.value[i].league_id : ''}`
		)
		const { data: arenaById } = await useFetch(
			`/api/arenas/id/${leagueById.value[0] ? leagueById.value[0].arena_id : ''}`
		)
		const { data: staffByTeamId } = await useFetch(`/api/teams/id/${teams.value[i].id}/staff`)
		const { data: playersByTeamId } = await useFetch(
			`/api/teams/id/${teams.value[i].id}/players`
		)

		teams.value[i].league = leagueById ? leagueById.value[0] : { name: 'Blank' }
		teams.value[i].arena = playersByTeamId
			? arenaById.value[0]
			: { name: 'Blank', location: '0.00\'00.0"N 0.00\'00.0"E' }
		teams.value[i].staff = staffByTeamId ? staffByTeamId.value : []
		teams.value[i].players = playersByTeamId ? playersByTeamId.value : []
	}

	return { cities, teams }
}
