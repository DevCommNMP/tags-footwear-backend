
const Razorpay=require('razorpay');
const User = require('../../modals/user/User');
const Order = require('../../modals/order/order');
const OrderDetail = require('../../modals/orderDetails/orderDetail');
const crypto=require('crypto');
var query = require('india-pincode-search');
const { Payment } = require('../../modals/payments/paymentModel');
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });


  const getKeys=async(req,res)=>{
    try{
     await  res.status(200).json({key:process.env.RAZORPAY_API_KEY})

    }
    catch(error){
      res.status(201).json({message:"something went wrong try again"})

    }
}

//
  const   checkout=async(req,res)=>{
const formData=req.body.formData;
// console.log(formData)
    const options={
        amount:Number(req.body.amount*100),
        currency:"INR",
    }
    try{
      const order=await instance.orders.create(options);
    console.log(order);
    res.status(200).json({success:true,order})

    const user=await User.findOne({email:req.body.userEmail});
   
    const placedOrder=await Order.create({
       user:user.id,
        orderId:order.id,
        
        
    })

    
    const products = req.body.cartdata.map(item => ({
        product: item.productId,
        quantity: item.quantity,
        price: item.price
      }));
// console.log("usersjdkbddjfskbnkjdnfkjnkfsjdkjdsfkjdfsb",user)
//     console.log("placedOrdersdnfjknskjdfnkjsfkjnjdskfnjkfdsn",placedOrder);
    const orderDetails = await OrderDetail.create({
        orderId: placedOrder._id,
        ptoductDetails:products,
        billingDetails: {
          fname: formData.fname,
          lname: formData.lname,
          billing_address: formData.billing_address,
          billing_address2: formData.billing_address2,
          city: formData.city,
          zipcode: formData.zipcode,
          phone: formData.phone,
          state: formData.state,
          email: formData.email,
          additionalInfo: formData.additionalInfo
        },
        subtotal:req.body.amount,
      });
      
    }
    catch(error){
      res.status(403).json({message:"something went wrong try again",succes:false})
    }
// console.log(orderDetails);
  

}


const pincodeData=(req,res)=>{
const{pincode}=req.body
// res.json(pincode);
const data= query.search(pincode);
console.log(data)
if(data.length==0){
  res.status(201).json({success:false });
  return;
}
  res.status(200).json({data,success:true });
}


const paymentVerification=async(req,res)=>{
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  req.body;

const body = razorpay_order_id + "|" + razorpay_payment_id;

const expectedSignature = crypto
  .createHmac("sha256", process.env.RAZORPAY_SECRET)
  .update(body.toString())
  .digest("hex");

const isAuthentic = expectedSignature === razorpay_signature;

if (isAuthentic) {
  // Database comes here
  

  await Payment.create({
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  });

  res.redirect(
    `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
  );
} else {
  res.status(400).json({
    success: false,
  });
}
 
}
module.exports={
    checkout,
    getKeys,
    pincodeData,
    paymentVerification
}