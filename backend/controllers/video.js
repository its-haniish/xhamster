const Videos = require('../models/Videos');
const path = require('path');
const fs = require('fs');
const upload = require('../middlewares/upload');

// POST /all-videos
const getAllVideos = async (req, res) => {
    const { page = 1, sort = 'createdAt', order = 'desc', limit = 10 } = req.body; // Extract parameters from request body
    const sortOrder = order === 'asc' ? 1 : -1; // Determine sort order

    try {
        const totalVideos = await Videos.countDocuments(); // Get total number of videos
        const totalPages = Math.ceil(totalVideos / limit); // Calculate total pages

        const videos = await Videos.find()
            .sort({ [sort]: sortOrder }) // Apply sorting
            .skip((page - 1) * limit) // Skip the previous pages
            .limit(limit); // Limit the results to the specified number per page

        res.json({
            currentPage: page,
            totalPages: totalPages,
            totalVideos: totalVideos,
            videos: videos
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /upload-video
const uploadVideo = async (req, res) => {
    console.log('Received request to upload video');
    upload(req, res, async (err) => {
        if (err) {
            console.error('Error during file upload:', err.message);
            return res.status(400).json({ message: err.message });
        }

        const { title, description, slug, creator, category, thumbnail, time, views } = req.body;
        const url = `${slug}.mp4`;

        try {
            const existingVideo = await Videos.findOne({ slug });
            if (existingVideo) {
                console.warn('A video with this slug already exists:', slug);
                return res.status(400).json({ message: 'A video with this slug already exists.' });
            }

            const createdVideo = await Videos.create({
                title,
                description,
                slug,
                url,
                creator,
                category
            });

            console.log('Video saved successfully:', createdVideo.url);
            res.status(201).json({ message: 'Video uploaded successfully', data: createdVideo });

        } catch (err) {
            console.error('Error saving video to the database:', err); // Log the error
            res.status(500).json({ message: 'Error saving video to the database', error: err.message });
        }
    });
};

// POST /delete-video
const deleteVideo = async (req, res) => {
    const { _id } = req.body;

    try {
        // Find the video by _id
        const video = await Videos.findById(_id);
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        // Remove the video file from the server
        const videoPath = path.join(__dirname, '../uploads', video.url); // Adjusted path to ensure it matches the file location
        fs.unlink(videoPath, async (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error removing video file from server', error: err.message });
            }

            // Remove the video entry from the database
            await Videos.findByIdAndDelete(_id);
            res.status(200).json({ message: 'Video deleted successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// POST /update-video
const updateVideo = async (req, res) => {
    const { _id, title, description, creator, category } = req.body;

    try {
        // Find and update the video by _id
        const updatedVideo = await Videos.findByIdAndUpdate(
            _id,
            { title, description, creator, category },
            { new: true }
        );

        if (!updatedVideo) {
            return res.status(404).json({ message: 'Video not found' });
        }

        res.status(200).json({ message: 'Video updated successfully', data: updatedVideo });
    } catch (error) {
        console.error('Error updating video:', error);
        res.status(500).json({ message: 'Error updating video', error: error.message });
    }
};

const getVideoBySlug = async (req, res) => {
    const { slug } = req.body;
    try {
        const video = await Videos.findOne({ slug })
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }
        res.status(200).json({ message: 'Video found', data: video });
    }
    catch (error) {
        console.error('Error finding video:', error);
        res.status(500).json({ message: 'Error finding video', error: error.message });
    }

}

module.exports = {
    getAllVideos,
    uploadVideo,
    deleteVideo,
    updateVideo,
    getVideoBySlug
};
