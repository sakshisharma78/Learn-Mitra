const User = require('../Models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: 'Invalid login credentials' });
  }
};

// OAuth login
exports.googleLogin = async (req, res) => {
  // Implement Google OAuth logic here
};

exports.linkedinLogin = async (req, res) => {
  // Implement LinkedIn OAuth logic here
};

exports.githubLogin = async (req, res) => {
  // Implement GitHub OAuth logic here
};

// Get user profile
exports.getUserProfile = async (req, res) => {
  res.send(req.user);
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    updates.forEach((update) => req.user[update] = req.body[update]);
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send(error);
  }
};
