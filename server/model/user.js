const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  recipe: {
    image: { type: String },
    label: { type: String, required: true },
    calories: { type: Number, required: true },
    ingredients: [String],
    id: { type: String },
  }
});

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  recipes: [recipeSchema],
});

module.exports = mongoose.model("User", userSchema);