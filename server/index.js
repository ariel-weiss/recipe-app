const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recipesRoutes = require('./routes/recipes');
const authRoutes = require('./routes/users');

dotenv.config();
const app = express();

// Express Middleware
app.use(express.json());
app.use(cors());
// Routes Middleware
app.use('/recipes', recipesRoutes);
app.use('/users', authRoutes);

// MongoDB
const PORT = process.env.PORT || 5000;
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.DB_CONNECTION_URL, mongoOptions)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port ${PORT}, Mongo OK`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
