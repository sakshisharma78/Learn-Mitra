const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

exports.generateRoadmap = async (duration, dailyLearningTime, topics, level) => {
    const roadmapConfig = {
        prompt: `Generate a learning roadmap for ${level} level covering the topics: ${topics.join(', ')}, over a duration of ${duration} days with a daily learning time of ${dailyLearningTime} hours.`
    };

    try {
        const response = await axios.post(GEMINI_API_URL, roadmapConfig, {
            headers: {
                'Authorization': `Bearer ${GEMINI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // Assuming the API returns an array of days with topics and resources
        return response.data;
    } catch (err) {
        console.error('Gemini API Error:', err.response.data);
        throw new Error('Gemini API failed to generate the roadmap');
    }
};
