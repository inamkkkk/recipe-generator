const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

const jwtSecret = process.env.JWT_SECRET;

if (jwtSecret) {
  router.post('/register', authController.register);
  router.post('/login', authController.login);
}

module.exports = router;