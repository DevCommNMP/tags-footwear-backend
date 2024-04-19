
const express = require('express');
const { getUser } = require('../../controller/userControllers/userControllers');
const router = express.Router();

// Route to get user details
router.get('/user', getUser);



module.exports = router;
2