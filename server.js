const express = require('express');
const path = require('path');

const app = express();
const frontendPort = 3000;

require('./keepAlive');

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the frontend server
app.listen(frontendPort, () => {
    console.log(`🌐 Frontend server running at http://localhost:${frontendPort}`);
    console.log(`📱 Open your browser and go to: http://localhost:${frontendPort}`);
    console.log(`📄 Make sure your index.html file is in the same folder as this server.js file`);
    console.log(`🔌 Backend should be running on https://pdf-reader-back.onrender.com`);
});