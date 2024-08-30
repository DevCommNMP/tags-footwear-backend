
const express = require('express');
const { getUser,subscribe,getOtpData,verifyOtp } = require('../../controller/userControllers/userControllers');
const router = express.Router();

// Route to get user details
router.get('/data/user', getUser);
router.post('/subscribe',subscribe)
router.get('/otp/getotpdata',getOtpData)
router.post('/otp/verifyotp',verifyOtp)

module.exports = router;
