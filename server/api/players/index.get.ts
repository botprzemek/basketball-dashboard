export default defineEventHandler(async (event) => {
	const tokens = getRequestHeaders(event)["cookie"];

	return fetch("http://localhost:3000/v1/players", {
		method: "GET",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"cookie": `${tokens}`
		},
	});
});