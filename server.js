// Load the necessary server modules
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

// Create a new express application instance
const app = express();

// Middleware to handle SPA routes and history mode in Vue.js
app.use(history());

// Serve static assets from the 'dist' folder where Vue build outputs files
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all routes and direct them to the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Set the port for the application
const port = process.env.PORT || 5000; // Use the environment variable or default to 5000

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});