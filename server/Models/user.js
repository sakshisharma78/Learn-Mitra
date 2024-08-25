const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  authProvider: { type: String, enum: ['local', 'google', 'linkedin', 'github'], default: 'local' },
  authToken: { type: String },  // JWT or OAuth token
  profileImage: { type: String }, // URL to profile image
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
