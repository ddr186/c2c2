const express = require('express');
const app = express();
const postgres = require('./postgres.js');
const bodyParser = require('body-parser')
const peopleController = require('./controllers/tournament.js');

app.use(express.json());
app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/tournament', peopleController);


postgres.connect();

app.listen(process.env.PORT || 3000, () => {
    console.log('listening');
})
