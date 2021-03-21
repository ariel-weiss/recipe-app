const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({ title: String, body: String });

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  recipes: [recipeSchema],
});

module.exports = mongoose.model("User", userSchema);