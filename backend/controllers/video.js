const Videos = require('../models/Videos');
const path = require('path');
const fs = require('fs');
const upload = require('../middlewares/upload');

// GET /all-videos
const getAllVideos = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = 10; // Number of videos per page
    const sort = req.query.sort || 'createdAt'; // Default sorting by creation date
    const order = req.query.order === 'desc' ? -1 : 1; // Default to ascending order

    try {
        const totalVideos = await Videos.countDocuments(); // Get total number of videos
        const totalPages = Math.ceil(totalVideos / limit); // Calculate total pages

        const videos = await Videos.find()
            .sort({ [sort]: order }) // Apply sorting
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

// POST /upload
const uploadVideo = async (req, res) => {
    try {
        const { title, description, slug, creator, category } = req.body;
        const url = `${slug}.mp4`;
        // Check if a video with the same slug already exists
        const existingVideo = await Videos.findOne({ slug });
        if (existingVideo) {
            return res.status(400).json({ message: 'A video with this slug already exists.' });
        }

        // Proceed with the file upload if no duplicate is found
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }

            try {
                // Create and save the new video
                const createdVideo = await Videos.create({
                    title,
                    description,
                    slug,
                    url,
                    creator,
                    category
                });

                res.status(201).json({ message: 'Video uploaded successfully', data: createdVideo });

            } catch (err) {
                res.status(400).json({ message: 'Error saving video to the database' });
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
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
        const videoPath = path.join(__dirname, 'uploads', video.url);
        fs.unlink(videoPath, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error removing video file from server', error: err.message });
            }

            // Remove the video entry from the database
            video.remove((err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error removing video from database', error: err.message });
                }

                res.status(200).json({ message: 'Video deleted successfully' });
            });
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {
    getAllVideos,
    uploadVideo,
    deleteVideo
} 