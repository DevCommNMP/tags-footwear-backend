const User = require("../../modals/user/User");


const getUser = async (req, res) => {
    const {email}=req.body
    try {
      const userdata = await User.findOne({ email:email });
      res.status(200).json(userdata);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };




  module.exports={
    getUser
  }