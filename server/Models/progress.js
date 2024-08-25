const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  roadmapId: { type: mongoose.Schema.Types.ObjectId, ref: 'Roadmap', required: true },
  dayId: { type: mongoose.Schema.Types.ObjectId, ref: 'Roadmap.days', required: true },
  completed: { type: Boolean, default: false },
  quizScore: { type: Number, default: 0 },
  progressGraphData: { type: Object },  // For updating the graph on the dashboard
  dateUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Progress', ProgressSchema);
