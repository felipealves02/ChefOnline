const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response)  => {
    return response.send("Bem vindo")
});

app.listen(3000);