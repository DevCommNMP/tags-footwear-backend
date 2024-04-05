
const express = require('express');
const { getUser } = require('../../controller/userControllers/userControllers');
const router = express.Router();

// Route to get user details
router.get('/getuser', getUser);



module.exports = router;
