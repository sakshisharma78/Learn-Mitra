
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import the database connection
const aiRoutes = require('./routes/aiRoutes'); // Import AI-related routes
const userRoutes = require('./routes/userRoutes'); // Import user-related routes
const roadmapRoutes = require('./routes/roadmapRoutes'); // Import roadmap-related routes
const quizRoutes = require('./routes/quizRoutes'); // Import quiz-related routes
const progressRoutes = require('./routes/progressRoutes'); // Import progress-related routes
const { errorHandler, notFound } = require('./Middleware/authMiddleware'); // Import error handling middleware

dotenv.config(); // Load environment variables from .env file

// Initialize express app
const app = express();

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/ai', aiRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roadmaps', roadmapRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/progress', progressRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// Set the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
