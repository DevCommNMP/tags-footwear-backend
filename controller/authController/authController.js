//calling user for data modeling
const generateToken = require("../../config/token/generateToken");
const User=require('../../modals/user/User')
//importing  express-async-handler
//used to handle exceptions 
const expressAsyncHandler=require("express-async-handler");


//------------------------Register ctrl----------------------------------------------
//controller to register user
// expressAsyncHandler used to handle exceptions
const registerUser= expressAsyncHandler(
  async(req,res)=>{
      const email=req?.body?.email;
      console.log(email);
      const userExist=await User.findOne({

          email:req?.body?.email,
      })
  
  if(userExist){
      throw new Error("User Already exists with this email");
  }
  try {
   // console.log(req.body);
   const user=await User.create({
//       // types of destructuring firstname
//       //type1: firstName=req.body.firstName (simple method)
//       //type2: firstName=req.body && req.body.firstName (with conditions)
//       //type 3 firstNAme=req?.body?.firstname (shorthand)
      firstName:req?.body?.firstName,
      lastName:req?.body?.lastName,
      email:req?.body?.email,
      phoneNo:req?.body?.phoneNo,
      password:req?.body?.password,
    //   gender:req?.body?.gender,
//    
  })

  // res.json({user:"User registerd successfully"}); 
  res.json(user);  
          
  } 
 
     
    catch (error) {
      res.json(error);
    }
  
  }
); 

//-------------------------------login ctrl--------------------------------------------------
//controller to login user
const login=expressAsyncHandler(
  async(req,res)=>{
   
    const{password}=req.body;
 
const userFound=await User.findOne({email:req?.body?.email});
if(!userFound) {
  res.status(401);
  throw new Error("Invalid email");
 

}
if(userFound && (await userFound.isPasswordMatched(password)) ){
  // throw new Error("Invalid credentilas");
  // generateToken(user?._id)
 
  res.json({
    id:userFound?._id,
    email:userFound?.email,
    firstName:userFound?.firstName,
    lastName:userFound?.lastName,
    profileImage:userFound?.profilePhoto,
    isAdmin:userFound?.isAdmin,
    token:generateToken(userFound._id)
  });
}
    else{
     
      res.status(401);
      throw new Error("Invalid password")
    }

    
}
)



module.exports={
    registerUser,
    login,
}