const Subscriber = require("../../modals/subscriber/subscriber");
const User = require("../../modals/user/User");
const { sendOtp } = require("../sendotp/sendOTP");


const generateOtp = () => {
  // Generate a random number between 100000 and 999999
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
};


const getUser = async (req, res) => {
  try {
    const userEmail = req.query.userEmail; // Extract userEmail from query parameters
    console.log(userEmail);
    if (!userEmail) {
      // If userEmail is not provided, send an error response
      return res.status(400).json({ success: false, message: "User email is required" });
    }

    const userdata = await User.findOne({ email: userEmail }).populate('order');
    console.log(userdata);
    res.status(200).json(userdata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const subscribe = async (req, res) => {
  try {
    const { email } = req.body; // Extract userEmail from request body

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ success: false, message: "User email is required" });
    }

    // Check if user is already subscribed
    const user = await Subscriber.findOne({ email: email });
    if (user) {
      // If user is already subscribed, send a success response with appropriate message
      return res.status(200).json({ success: false, message: "Already subscribed to Tags Footwear" });
    }

    // Create new subscriber if not already subscribed
    const newUser = await Subscriber.create({ email: email });
    console.log(newUser);
    res.status(201).json({ success: true, message: "Successfully subscribed to Tags Footwear" });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ success: false, message: error.message });
  }
};


const getOtpData=async(req,res)=>{

 try {
  const {phoneNumber}=req.body;
  console.log(phoneNumber)
  const otpdata=await User.findOne({phoneNumber:phoneNumber})
  res.status(201).json({error:false,otpdata,success:true})
 } catch (error) {
  res.status(200).json({error:true,message:error.message,success:false})
 }
}

const verifyOtp = async (req, res) => {
  const { phoneNumber, otp } = req.body;

  if (!phoneNumber || !otp) {
    return res.status(400).json({ success: false, error: true, message: "Phone number and OTP are required" });
  }

  try {
    // Find user by phone number
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(404).json({ success: false, error: true, message: "User not found" });
    }

    // Check if the OTP is correct
    if (user.otp !== otp) {
      return res.status(400).json({ success: false, error: true, message: "Invalid OTP" });
    }

   

    // Clear OTP after successful verification
    user.otp = ""; // Clear the OTP
    await user.save();

    res.status(200).json({ success: true, error: false, message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ success: false, error: true, message: "Server error: " + error.message });
  }
};


const resendOtp = async (req, res) => {
  const { phoneNumber } = req.body;
console.log(phoneNumber)
  if (!phoneNumber) {
      return res.status(400).json({ success: false, message: 'Phone number is required.' });
  }

  try {
      // Find user by phone number
      const user = await User.findOne({ phoneNumber:phoneNumber });
      if (!user) {
          return res.status(404).json({ success: false, message: 'User not found.' });
      }

      // Generate new OTP
      const newOtp = generateOtp();

      // Update user's OTP in the database
      user.otp = newOtp;
      await user.save();
     
   await sendOtp(phoneNumber,newOtp)
      // Send the OTP via SMS
    

      return res.status(200).json({ success: true, message: 'OTP sent successfully.' });

  } catch (error) {
      console.error('Error resending OTP:', error.message);
      return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};



  module.exports={
    getUser,
    subscribe,
    verifyOtp,
    resendOtp,
    getOtpData
  }



