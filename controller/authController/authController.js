//calling user for data modeling
const generateToken = require("../../config/token/generateToken");
const User=require('../../modals/user/User')
//importing  express-async-handler
//used to handle exceptions 
const expressAsyncHandler=require("express-async-handler");


//------------------------Register ctrl----------------------------------------------
//controller to register user
// expressAsyncHandler used to handle exceptions
const registerUser = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const email = req?.body?.email;
    console.log(email);
    const userExist = await User.findOne({ email: req?.body?.email });

    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // console.log(req.body)
    const user = await User.create({
      username: req?.body?.username,
      email: req?.body?.email,
      password: req?.body?.password,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const login = expressAsyncHandler(async (req, res) => {
  try {
    const { password } = req.body;
    const userFound = await User.findOne({ email: req?.body?.email });
    if (!userFound) {
      return res.status(401).json({ message: "Invalid Email" });
    }
   const token= generateToken(userFound._id);
   

    if (userFound && (await userFound.isPasswordMatched(password))) {
      res.cookie('token', token, { httpOnly: true }).json({
        // id: userFound?._id,
        email: userFound?.email,
        userName: userFound?.username,
        lastName: userFound?.lastName,
        profileImage: userFound?.profilePhoto,
        isAdmin: userFound?.isAdmin,
        token: token,
      });

      res.status(200).json({ token }); // Send the token in the response body
    } else {
      return res.status(401).json({ message: "Invalid Password" });
    }
  } catch (error) {
    console.error(error); // Log for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports={
    registerUser,
    login,
} 