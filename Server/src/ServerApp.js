const express = require('express');
const app = express();
const port = 8080;
const movies = [];
const knex = require('knex')(require('../knexfile.js').development);
const cors = require('cors');
const corsOptions = {
    origin:"*",
    credentials:true,
    optionSuccessStatus:200
}
app.use(express.json());
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(` App listening at http://localhost:${port}`)
})
app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/movies', (req, res) => {
    knex('movie_title')
    .select('*')
    .then((data) => {
        res.json(data);});
})
app.post('/movies', (req, res) => {
    knex('movie_title')
    .insert(
        {   
            id: req.body.id,
            title: req.body.title,
        })
    .then(() => {
        knex('movie_title')
        .select('*')
        .then((data) => {
            res.json(data);
        })
    })
})