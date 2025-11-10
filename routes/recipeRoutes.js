const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middlewares/authMiddleware');

const jwtSecret = process.env.JWT_SECRET;

if (jwtSecret) {
  router.post('/generate', authMiddleware.authenticateToken, recipeController.generateRecipe);
} else {
  router.post('/generate', recipeController.generateRecipe);
}

module.exports = router;