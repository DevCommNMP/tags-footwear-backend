
const Razorpay=require('razorpay');
const User = require('../../modals/user/User');
const Order = require('../../modals/order/order');
const OrderDetail = require('../../modals/orderDetails/orderDetail');
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });


  const getKeys=async(req,res)=>{
   res.status(200).json({key:process.env.RAZORPAY_API_KEY})
    

}

//
  const checkout=async(req,res)=>{
const formData=req.body.formData;
console.log(formData)
    const options={
        amount:req.body.amount,
        currency:"INR",
    }
    const order=await instance.orders.create(options);
    // console.log(order);
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
// console.log("user",user)
//     console.log("placedOrder",placedOrder);
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
      
console.log(orderDetails);
  

}

module.exports={
    checkout,
    getKeys
}