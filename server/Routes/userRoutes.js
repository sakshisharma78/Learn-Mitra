const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Register a new user
router.post('/register', UserController.registerUser);

// Login a user
router.post('/login', UserController.loginUser);

// OAuth login (Google, LinkedIn, GitHub)
router.post('/login/google', UserController.googleLogin);
router.post('/login/linkedin', UserController.linkedinLogin);
router.post('/login/github', UserController.githubLogin);

// Get user profile
router.get('/profile', UserController.getUserProfile);

// Update user profile
router.put('/profile', UserController.updateUserProfile);

module.exports = router;
