require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/connectDB.js');
const routes = require('./routes/routes.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ limit: '200mb' }));
app.use(cors());

app.use('/', routes);

connectDB(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
    });
})