const express = require('express');
const router = express.Router();
const RoadmapController = require('../controllers/roadmapController');

// Create a new roadmap
router.post('/roadmap', RoadmapController.createRoadmap);

// Get all roadmaps for a user
router.get('/roadmaps', RoadmapController.getUserRoadmaps);

// Get specific roadmap details
router.get('/roadmap/:id', RoadmapController.getRoadmapById);

// Generate roadmap image
router.post('/roadmap/:id/generate-image', RoadmapController.generateRoadmapImage);

module.exports = router;
