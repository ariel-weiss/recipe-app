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
                console.log('Fetch OK');
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

router.post('/add', verify, async (req, res) => {
    if (!req.userId) return res.json({ message: "User not authenticated" });
    const recipe = req.body;
    // Add single recipe for the user
    const user = await User.findById(req.userId);
    let updatedUser = user;
    updatedUser.recipes.push(recipe);
    await User.findByIdAndUpdate(req.userId, updatedUser, { new: true });
    res.json(updatedUser);
});

module.exports = router;