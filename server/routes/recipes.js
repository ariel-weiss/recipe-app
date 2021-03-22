const router = require('express').Router();
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const verify = require('../middleware/verify');
const User = require('../model/user');

// Recipes API 
const APP_ID = '69c8cf17';
const APP_KEY = '991ab8eb9fa41a1e9c59fac61b7edb4e';
const generateRequest = (query) => (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
// Routes
router.get('/search/:query', (req, res) => {
    const { query } = req.params;
    const recipeRequest = generateRequest(query);
    let data = {};
    try {
        fetch(recipeRequest)
            .then(res => res.json())
            .then(json => {
                data = json.hits;
                res.status(200).json(data);
            })
    } catch (error) {
        res.status(404).json({message: error});
    }
});

router.get('/all',verify, async (req, res) => {
    if (!req.userId) return res.json({ message: "User not authenticated" });
    if (!mongoose.Types.ObjectId.isValid(req.userId)) return res.status(404).send('No user with this ID');
    const user = await User.findById(req.userId);
    const recipes = user.recipes;
    res.json(recipes);    
});

router.patch('/add', verify, async (req, res) => {
    if (!req.userId) return res.json({ message: "User not authenticated" });
    const recipeObj = req.body;
    User.findByIdAndUpdate(
        req.userId, 
        { $addToSet: { recipes: recipeObj } },
        { new: true },
        function(err, model){
            if (err){
              console.log("ERROR: ", err);
              res.status(500).send(err);
            }else{
              res.status(200).send(model);
            }
           }
    );
});

router.patch('/remove', verify, async (req, res) => {
    if (!req.userId) return res.json({ message: "User not authenticated" });
    const {recipeId} = req.body;
    if (!mongoose.Types.ObjectId.isValid(recipeId)) return res.status(404).send(`No recipe with id: ${id}`);
    
    User.findByIdAndUpdate(
        req.userId,
        { $pull: { recipes: { _id: recipeId } } },
        { safe: true },
        function (err, model) {
            if (err) {
                console.log("ERROR: ", err);
                res.status(500).send(err);
            } else {
                console.log(model);
                res.status(200).send(model);
            }
        }
    );
});

module.exports = router;