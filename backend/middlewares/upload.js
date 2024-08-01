const multer = require('multer');
const path = require('path');

// Set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder
    },
    filename: function (req, file, cb) {
        // Use the slug from req.body to name the file
        const slug = req.body.slug;
        cb(null, `${slug}.mp4`);
    }
});

// File filter to only allow MP4 files
const fileFilter = (req, file, cb) => {
    const extname = path.extname(file.originalname).toLowerCase();
    if (extname === '.mp4') {
        cb(null, true);
    } else {
        cb(new Error('Only MP4 files are allowed!'), false);
    }
};

// Set up the multer middleware
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
}).single('video'); // 'video' is the name of the form field

module.exports = upload;
