const Subscriber = require("../../modals/subscriber/subscriber");
const User = require("../../modals/user/User");

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



  module.exports={
    getUser,
    subscribe
  }



