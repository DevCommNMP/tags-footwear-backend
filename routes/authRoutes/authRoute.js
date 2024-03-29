const express = require('express');
const router = express.Router();
const {authMiddleware} =require('../../middleware/isAuthenticated/isAuthenticated')
const { registerUser, login, isAuthenticated ,verifyAccount} = require('../../controller/authController/authController');
const {sendmail}=require('../../apis/sendmail')
/*------------------------register routes--------------------------------*/
// Registering user
router.post('/auth/register', registerUser);

/*------------------------login routes--------------------------------*/
// User login route
router.post('/auth/login', login);
router.post('/verify-account', verifyAccount);

/*------------------------isAuthenticated route--------------------------------*/
// Check if user is authenticated
router.get('/isAuthenticated',authMiddleware, isAuthenticated);

module.exports = router;
