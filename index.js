const express = require ('express');
const app = express();
const fetch = require('node-fetch');
require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log ('Starting server at ${port}');
});
app.use(express.static('public'));



app.get('/key/:word', async (request, response) => {
	const word = request.params.word;
	const api_key = process.env.API_KEY;
	const api_url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${word}&rating=r`;
	const fetch_response = await fetch (api_url);
	const json = await fetch_response.json();
	let originalUrl = json.data.images.original.url;
	response.json(json);
});