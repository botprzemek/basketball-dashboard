export default defineEventHandler(async (event) => {
	const test = getRequestHeaders(event);

	const test1 = event.node.req.headers;

	console.log(test, test1);

	return fetch("http://localhost:3000/v1/players", {
		method: "GET",
		mode: "cors",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	});
});