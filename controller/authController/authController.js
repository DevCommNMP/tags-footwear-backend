const generateToken = require("../../config/token/generateToken");
const User = require('../../modals/user/User');
const expressAsyncHandler = require("express-async-handler");

const registerUser = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const { email, username, password } = req.body; // Destructure req.body to extract email, username, and password
    console.log(email);
    const userExist = await User.findOne({ email }); // Use destructured email

    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await User.create({ email, username, password }); // Use destructured email, username, and password

    res.status(201).json(user);
  } catch (error) {
    console.error(error); // Log for debugging
    res.status(500).json({ message: error.message });
  }
});

const login = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body; // Destructure req.body to extract email and password
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    const token = await generateToken(userFound._id);

    if (userFound && (await userFound.isPasswordMatched(password))) {
      res.cookie('authToken', token, { httpOnly: true }).json({
        email: userFound.email,
        userName: userFound.username,
        lastName: userFound.lastName,
        profileImage: userFound.profilePhoto,
        isAdmin: userFound.isAdmin,
        token: token,
      });
    } else {
      return res.status(401).json({ message: "Invalid Password" });
    }
  } catch (error) {
    console.error(error); // Log for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = {
  registerUser,
  login,
};
