const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ['video', 'documentation', 'book'], required: true },
  BibTeX: { type: String }
});

const DaySchema = new mongoose.Schema({
  dayNumber: { type: Number, required: true },
  topic: { type: String, required: true },
  objectives: { type: String, required: true },
  resources: [ResourceSchema],
  quizGenerated: { type: Boolean, default: false }
});

const RoadmapSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  duration: { type: Number, required: true },  // In days
  dailyLearningTime: { type: Number, required: true },  // In hours
  level: { type: String, required: true },
  days: [DaySchema],
  roadmapImage: { type: String },  // Image reflecting the roadmap
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Roadmap', RoadmapSchema);
