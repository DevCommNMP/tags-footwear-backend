const express = require('express');
const router = express.Router();

const {registerUser,
       login,
      }=require('../../controller/authController/authController');

 /*------------------------register routes--------------------------------*/
//registering user
router.route('/auth/register')
.post(registerUser);


/*------------------------login routes--------------------------------*/
//user login route
router.route('/auth/login')
.post(login);
//getting all users
 


module.exports=router;