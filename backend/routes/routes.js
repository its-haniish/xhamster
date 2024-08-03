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
    getAllVideos,
    updateVideo,
    getVideoBySlug
} = require('../controllers/video.js');

const {
    getCategories,
    createCategory,
    deleteCategory,
} = require('../controllers/categories.js');

const {
    getCreators,
    createCreator,
    deleteCreator,
} = require('../controllers/creators.js');

const authenticateToken = require('../middlewares/authenticateToken');

routes
    // auth routes
    .post('/login', login)
    .post('/signup', signup)
    .post('/reset-password', resetPassword)
    .post('/auto-login', authenticateToken, autoLogin)
    .post('/send-email', sendEmail)

    // video routes
    .post('/upload', uploadVideo)
    .post('/delete-video', deleteVideo)
    .post('/videos', getAllVideos)
    .post('/update-video', updateVideo)
    .post('/video-by-slug', getVideoBySlug)


    // category routes
    .post('/get-categories', getCategories)
    .post('/create-category', createCategory)
    .post('/delete-category', deleteCategory)

    // creator routes
    .post('/get-creators', getCreators)
    .post('/create-creator', createCreator)
    .post('/delete-creator', deleteCreator)


module.exports = routes;
