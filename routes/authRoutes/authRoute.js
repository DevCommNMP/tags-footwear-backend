const express = require('express');
const router = express.Router();
const {authMiddleware} =require('../../middleware/isAuthenticated/isAuthenticated')
const { registerUser, login, isAuthenticated } = require('../../controller/authController/authController');

/*------------------------register routes--------------------------------*/
// Registering user
router.post('/auth/register', registerUser);

/*------------------------login routes--------------------------------*/
// User login route
router.post('/auth/login', login);

/*------------------------isAuthenticated route--------------------------------*/
// Check if user is authenticated
router.get('/isAuthenticated',authMiddleware, isAuthenticated);

module.exports = router;
