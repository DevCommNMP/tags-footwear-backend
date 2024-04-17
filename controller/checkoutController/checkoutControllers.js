const Razorpay = require("razorpay");
const User = require("../../modals/user/User");
const Order = require("../../modals/order/order");
const OrderDetail = require("../../modals/orderDetails/orderDetail");
const crypto = require("crypto");
var query = require("india-pincode-search");
const Payment = require("../../modals/payments/paymentModel");
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

const getKeys = async (req, res) => {
  try {
    await res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
  } catch (error) {
    res.status(201).json({ message: "something went wrong try again" });
  }
};

//
const checkout = async (req, res) => {
  const formData = req.body.formData;
  // console.log(formData)
  const email = req.body.userEmail;

  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  try {
    const order = await instance.orders.create(options);
    // console.log(order);
    // const email=req.body.userEmail
    const user = await User.findOne({ email });

   
    const placedOrder = await Order.create({
      user: user.id,
      orderId: order.id,
      
    });
    // console.log("placedOrder",placedOrder)
    const products = req.body.cartdata.map((item) => ({
      product: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));






    // console.log("usersjdkbddjfskbnkjdnfkjnkfsjdkjdsfkjdfsb",user)
    //     console.log("placedOrdersdnfjknskjdfnkjsfkjnjdskfnjkfdsn",placedOrder);
    const orderDetails = await OrderDetail.create({
      orderId: placedOrder.orderId,
      ptoductDetails: products,
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
        additionalInfo: formData.additionalInfo,
      },
      subtotal: req.body.amount,
    });

   const orderdata= await Order.findOne({orderId:placedOrder.orderId})
    // console.log("order",orderdata)
    // console.log("================================================")
   const OrderDetaitlsData= await OrderDetail.findOne({orderId:orderdata.orderId})
  //  console.log("orderDetails",OrderDetaitlsData)
  const modifyOrderData = await Order.findOneAndUpdate(
    { orderId: placedOrder.orderId },
    { $set: { orderDetails: OrderDetaitlsData._id } },
    { new: true }
  );
  const updateuserData=await User.findByIdAndUpdate({_id:user.id},{
    orders:modifyOrderData._id
  })
 
  console.log(updateuserData)
    res.status(200).json({ success: true, order });
  } catch (error) {
    res
      .status(403)
      .json({ message: "something went wrong try again", succes: false });
  }
  // console.log(orderDetails);
};

const pincodeData = (req, res) => {
  const { pincode } = req.body;
  // res.json(pincode);
  const data = query.search(pincode);
  console.log(data);
  if (data.length == 0) {
    res.status(201).json({ success: false });
    return;
  }
  res.status(200).json({ data, success: true });
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  console.log(isAuthentic);

  if (isAuthentic) {
    try {
      // Create payment record
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      // Update order payment status
      const orderData = await Order.findOneAndUpdate(
        { orderId: razorpay_order_id },
        {
          $set: {
            PaymentStatus: "Paid",
            paymentDetails: {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
          },
        },
        { new: true }
      );
      // console.log(orderData);

      // Redirect to payment success page
      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } catch (error) {
      const orderData = await Order.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { $set: { PaymentStatus: "Failed" } },
        { new: true }
      );
      console.error("Error processing payment:", error);
      res
        .status(500)
        .json({ success: false, message: "Error processing payment" });
    }
  } else {
    res.status(400).json({ success: false, message: "Invalid signature" });
  }
};

module.exports = {
  checkout,
  getKeys,
  pincodeData,
  paymentVerification,
};
