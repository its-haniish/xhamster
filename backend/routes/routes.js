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

const {
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory
} = require('../controllers/categories.js');

const authenticateToken = require('../middlewares/authenticateToken');

routes
    // auth routes
    .post('/login', login)
    .post('/signup', signup)
    .post('/reset-password', resetPassword)
    .post('/auto-login', authenticateToken, autoLogin)
    .post('/send-email', sendEmail)

    // video routes
    .post('/upload-video', uploadVideo)
    .post('/delete-video', deleteVideo)
    .get('/videos', getAllVideos)

    // category routes
    .post('/get-categories', getCategories)
    .post('/create-category', createCategory)
    .post('/delete-category', deleteCategory)
    .post('/update-category', updateCategory)

module.exports = routes;
