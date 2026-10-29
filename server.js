const express = require('express');

const app = express();
const PORT = 3000;

// GET /
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the BDF Lab Server');
});

// GET /about
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Aditya',
        section: 'Your Section'
    });
});

// GET /time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});