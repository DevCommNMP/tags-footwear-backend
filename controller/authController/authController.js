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


//-------------------------------login ctrl--------------------------------------------------
//controller to login user
const login = expressAsyncHandler(async (req, res) => {
  try {
    const { password } = req.body;

    const userFound = await User.findOne({ email: req?.body?.email });

    if (!userFound) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    if (userFound && (await userFound.isPasswordMatched(password))) {
      res.json({
        id: userFound?._id,
        email: userFound?.email,
        firstName: userFound?.firstName,
        lastName: userFound?.lastName,
        profileImage: userFound?.profilePhoto,
        isAdmin: userFound?.isAdmin,
        token: generateToken(userFound._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Password");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




module.exports={
    registerUser,
    login,
}