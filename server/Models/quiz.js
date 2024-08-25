const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true }
});

const QuizSchema = new mongoose.Schema({
  dayId: { type: mongoose.Schema.Types.ObjectId, ref: 'Roadmap.days', required: true },
  questions: [QuestionSchema],
  score: { type: Number },
  dateAttempted: { type: Date }
});

module.exports = mongoose.model('Quiz', QuizSchema);
