const express = require('express');
const routes = express.Router();

const {
    login,
    signup,
    resetPassword,
    autoLogin
} = require('../controllers/auth.js');

const {
    sendEmail
} = require('../controllers/sendEmail.js');

const {
    uploadVideo,
    deleteVideo,
    getAllVideos
} = require('../controllers/video.js');

const authenticateToken = require('../middlewares/authenticateToken');

routes
    // auth routes
    .post('/login', login)
    .post('/signup', signup)
    .post('/reset-password', resetPassword)
    .post('/auto-login', authenticateToken, autoLogin)
    .post('/send-email', sendEmail)

    // video routes
    .post('/upload-video', authenticateToken, uploadVideo)
    .post('/delete-video', authenticateToken, deleteVideo)
    .get('/videos', getAllVideos);

module.exports = routes;
