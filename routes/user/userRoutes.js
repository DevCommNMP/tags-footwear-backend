
const express = require('express');
const { getUser,subscribe,resendOtp,getOtpData,verifyOtp } = require('../../controller/userControllers/userControllers');
const router = express.Router();

// Route to get user details
router.get('/data/user', getUser);
router.post('/subscribe',subscribe)
router.get('/otp/getotpdata',getOtpData)
router.post('/otp/verifyotp',verifyOtp)
router.post('/otp/resendotp',resendOtp)

module.exports = router;
