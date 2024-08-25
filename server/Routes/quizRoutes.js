const express = require('express');
const router = express.Router();
const QuizController = require('../controllers/quizController');

// Generate a quiz for a specific day in the roadmap
router.post('/quiz/generate', QuizController.generateQuiz);

// Get quiz for a specific day
router.get('/quiz/:dayId', QuizController.getQuizByDay);

// Submit quiz answers and get score
router.post('/quiz/:quizId/submit', QuizController.submitQuiz);

module.exports = router;
