const User = require("../../modals/user/User");

const getUser = async (req, res) => {
  try {
    const userEmail = req.query.userEmail; // Extract userEmail from query parameters
    console.log(userEmail)
    if (!userEmail) {
      // If userEmail is not provided, send an error response
      return res.status(400).json({ success: false, message: "User email is required" });
    }

    const userdata = await User.findOne({ email: userEmail }).populate('order');
    console.log(userdata)
    res.status(200).json(userdata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



  module.exports={
    getUser
  }



