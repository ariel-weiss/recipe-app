const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');
const { query } = require('express');


const APP_ID = '69c8cf17';
const APP_KEY = '991ab8eb9fa41a1e9c59fac61b7edb4e';
const generateRequest = (query) => (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/recipes/:query', (req, res) => {
    const { query } = req.params;
    const recipeRequest = generateRequest(query);
    let data = {};
    try {
        fetch(recipeRequest)
            .then(res => res.json())
            .then(json => {
                console.log(json.hits);
                data = json.hits;
                res.status(200).json(data);
            })
    } catch (error) {
        res.status(404).json({message: error});
    }
});

app.listen(5000, () => console.log('Start listening on 5000'));
