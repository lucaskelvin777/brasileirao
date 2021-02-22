require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const functions = require("./src/functions.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', async function (req, res) {
    let result = await functions.api('https://api-football-v1.p.rapidapi.com/v2/leagueTable/1396', null);
    result = JSON.parse(result);
    if (result?.api?.standings)
        return res.json(result?.api?.standings[0]);
    else
        return res.json([]);
});
server.listen(process.env.PORT, () => {
    console.log(` starting in ${process.env.PORT}`);
});
