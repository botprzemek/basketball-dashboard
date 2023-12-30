export default async (): Promise<any> => {
	const { data: cities } = await useFetch(`/api/cities/name/Knurów`)
	const { data: teams } = await useFetch(`/api/cities/id/${cities.value.data[0].id}/teams`)

	for (let i = 0; i < teams.value.data.length; i++) {
		const { data: leagueById } = await useFetch(
			`/api/leagues/id/${teams.value.data[i] ? teams.value.data[i].league_id : ''}`
		)
		const { data: arenaById } = await useFetch(
			`/api/arenas/id/${leagueById.value.data[0] ? leagueById.value.data[0].arena_id : ''}`
		)
		const { data: staffByTeamId } = await useFetch(
			`/api/teams/id/${teams.value.data[i].id}/staff`
		)
		const { data: playersByTeamId } = await useFetch(
			`/api/teams/id/${teams.value.data[i].id}/players`
		)
		const { data: statisticsByTeamId } = await useFetch(
			`/api/teams/id/${teams.value.data[i].id}/players/statistics/avg`
		)

		teams.value[i].league = leagueById ? leagueById.value.data[0] : { name: 'Blank' }
		teams.value[i].arena = playersByTeamId
			? arenaById.value.data[0]
			: { name: 'Blank', location: '0.00\'00.0"N 0.00\'00.0"E' }
		teams.value[i].staff = staffByTeamId ? staffByTeamId.value : []
		teams.value[i].players = playersByTeamId ? playersByTeamId.value : []
		teams.value[i].statistics = statisticsByTeamId ? statisticsByTeamId : []
	}

	return { cities, teams }
}
