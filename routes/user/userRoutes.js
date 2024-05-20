
const express = require('express');
const { getUser,subscribe } = require('../../controller/userControllers/userControllers');
const router = express.Router();

// Route to get user details
router.get('/user', getUser);
router.post('/subscribe',subscribe)



module.exports = router;
