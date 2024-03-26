const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage(
  {
  destination: function (req, file, cb) {
    cb(null, 'assets/images/productsubImages'); // Destination folder where uploaded files will be stored
  },
 

  filename: function (req, file, cb) {
    // Rename file with current timestamp + original file extension
    cb(null, Date.now() + '-' + file.originalname);
  }
});
console.log("uploading  multiples images ")
// Set file filter
const fileFilter = (req, file, cb) => {
  // Accept only specific file types
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg+xml') {
    cb(null, true);
  } else {
    cb(new Error('Only JPG, PNG, and SVG files are allowed!'), false);
  }
};

// Initialize Multer with configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 40 }, // Limit file size to 40MB
  fileFilter: fileFilter
});

module.exports = upload;
