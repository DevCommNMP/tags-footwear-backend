
const Razorpay=require('razorpay')
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

 const checkout=async(req,res)=>{
    const options={
        amount:5000,
        currency:"INR",
    }
    const order=await instance.orders.create(options);
    console.log(order);
    res.status(200).json({success:true})

}

module.exports={
    checkout,
}