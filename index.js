
const express = require('express');
const app = express();


// Routes


app.get('/', (request, response) => {
	response.send('<h1>Hola Mundo!!</h1>');
});


app.listen(3000, () => {
	console.log('Listo!');
});