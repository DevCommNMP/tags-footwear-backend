const express = require('express');
const router = express.Router();
const {authMiddleware} =require('../../middleware/isAuthenticated/isAuthenticated')
const { registerUser, login,adminlogin, isAuthenticated ,verifyAccount,passwordResetMail,getUser,verifyForgotPasswordToken,updatePassword} = require('../../controller/authController/authController');
const {sendmail}=require('../../apis/sendmail')
/*------------------------register routes--------------------------------*/
// Registering user
router.post('/auth/register', registerUser);

/*------------------------login routes--------------------------------*/
// User login route
router.post('/auth/login', login);
router.post('/auth/adminlogin', adminlogin);
router.post('/verify-account', verifyAccount);
router.post('/getuser', getUser);
router.post('/forgot-password', passwordResetMail);
router.post('/reset-password',updatePassword)

/*------------------------isAuthenticated route--------------------------------*/
// Check if user is authenticated
router.get('/isAuthenticated',authMiddleware, isAuthenticated);
router.get('/verify-reset-Password-Token',verifyForgotPasswordToken)

module.exports = router;
