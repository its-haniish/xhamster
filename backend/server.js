require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/connectDB.js');
const routes = require('./routes/routes.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON requests with a large size limit
app.use(express.json({ limit: '2500mb' }));
app.use(cors());

// Existing routes
app.use('/', routes);

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Connect to the database and start the server
connectDB(process.env.MONGO_URI).then(() => {
    const server = app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
    });

    // Set the server timeout to 2 hours (7200000 milliseconds)
    server.timeout = 7200000; // Extend the timeout to 2 hours
});
