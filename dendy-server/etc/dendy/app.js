import express, { static } from 'express';
import { join } from 'path';
const app = express();

// Serve static files from the "libraries" directory
app.use('/libraries', static(join(__dirname, 'libraries')));

// Optional: Serve an index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'templates', 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});