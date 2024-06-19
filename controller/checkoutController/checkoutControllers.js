const Razorpay = require("razorpay");
const User = require("../../modals/user/User");
const Order = require("../../modals/order/order");
const OrderDetail = require("../../modals/orderDetails/orderDetail");
const crypto = require("crypto");
var query = require("india-pincode-search");
const axios = require("axios");
const Payment = require("../../modals/payments/paymentModel");
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});
const Product = require("../../modals/product/product");
var email = process.env.courierEmail;
var password = process.env.courierPassword;

// Concatenate email and password with a colon
var credentials = email + ":" + password;

// Encode the concatenated string using Base64
var encodedCredentials = btoa(credentials);

// console.log(encodedCredentials);

const generateOrderId = () => {
  const alphanumericCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const orderIdLength = 10; // You can adjust the length of the order ID as needed
  let orderId = "order_";

  for (let i = 0; i < orderIdLength; i++) {
    const randomIndex = Math.floor(
      Math.random() * alphanumericCharacters.length
    );
    orderId += alphanumericCharacters[randomIndex];
  }

  return orderId;
};
const getKeys = async (req, res) => {
  try {
    await res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
  } catch (error) {
    res.status(201).json({ message: "something went wrong try again" });
  }
};
// const codCheckout = async (req, res) => {
//   try {
//       const formData = req.body.formData;
//       const amount = req.body.amount;
//       const email = req.body.userEmail;
//       const { CGST, SGST, Tax } = req.body;
//       const user = await User.findOne({ email });

//       const placedOrder = await Order.create({
//           user: user.id,
//           orderId: generateOrderId(),
//       });

//       const products = req.body.cartdata.map((item) => ({
//           product: item.productId,
//           quantity: item.quantity,
//           price: item.price,
//           size: item.size,
//           color: item.color,
//       }));

//       const orderDetails = await OrderDetail.create({
//           orderId: placedOrder.orderId,
//           productDetails: products,
//           billingDetails: {
//               fname: formData.fname,
//               lname: formData.lname,
//               billing_address: formData.billing_address,
//               billing_address2: formData.billing_address2,
//               city: formData.city,
//               zipcode: formData.zipcode,
//               phone: formData.phone,
//               state: formData.state,
//               email: formData.email,
//               additionalInfo: formData.additionalInfo,
//           },
//           subtotal: req.body.amount,
//           CGST: req.body.CGST,
//           SGST: req.body.SGST,
//           totalTax: req.body.Tax,
//       });

//       const orderdata = await Order.findOne({ orderId: placedOrder.orderId });
//       const OrderDetaitlsData = await OrderDetail.findOne({ orderId: orderdata.orderId });
//       const courierPromises = req.body.cartdata.map(async (item) => {
//           return axios.post('https://api.tekipost.com/connect/order-ship', {
//               "order_no": generateOrderId(),
//               "customer_name": formData.fname + ' ' + formData.lname,
//               "customer_address_1": formData.billing_address,
//               "customer_address_2": formData.billing_address2,
//               "customer_pincode": formData.zipcode,
//               "customer_city": formData.city,
//               "customer_state": formData.state,
//               "customer_mobile_no": formData.phone,
//               "customer_alt_no": "",
//               "customer_email": formData.email,
//               "product_category": "Fashion & lifestyle",
//               "product_code": item.productCode,
//               "product_name": item.product,
//               "product_qty": item.quantity,
//               "invoice_value": item.price,
//               "cod_value": "1",
//               "weight_in_kgs": "0.5",
//               "length_in_cms": "10",
//               "breadth_in_cms": "10",
//               "height_in_cms": "10",
//               "warehouse_id": "1",
//               "movement_type": "Forward",
//               "store_id": "",
//               "courier_id": "",
//               "custom_awb_no": "",
//               "service_name": "Surface",
//           }, {
//               headers: {
//                   'Authorization': `Bearer ${encodedCredentials}`
//               }
//           });
//       });

//       try {
//           const responses = await Promise.all(courierPromises);
//           console.log(responses); // Log all responses
//           // Handle responses if needed
//       } catch (error) {
//           console.error("Error sending courier data:", error);
//           // Handle error if necessary
//       }

//       const modifyOrderData = await Order.findOneAndUpdate(
//           { orderId: placedOrder.orderId },
//           { $set: { orderDetails: OrderDetaitlsData._id } },
//           { new: true }
//       );

//       const updateUserData= await User.findOneAndUpdate(
//           { email: email },
//           { $push: { order: modifyOrderData._id } },
//           { new: true }
//       );

//       res.status(200).json({ success: true, modifyOrderData });
//   } catch (error) {
//       console.log(error.message);
//       res.status(201).json({ errorMsg: error.message, success: false });
//   }
// }

const codCheckout = async (req, res) => {
  try {
    const formData = req.body.formData;
    const amount = req.body.amount;
    const email = req.body.userEmail;
    const { CGST, SGST, Tax } = req.body;
    const user = await User.findOne({ email });
    let productName = "";
    let productCode = "";
    let quantity = 0; // Initialize quantity

    const placedOrder = await Order.create({
      user: user.id,
      orderId: generateOrderId(),
    });

    // Calculate quantity
    req.body.cartdata.forEach((item) => {
      productName += item.title + ",";
      productCode += item.productCode + ",";
      quantity += item.quantity; // Accumulate quantity
    });

    // console.log("body77777777777",req.body)

    const products = req.body.cartdata.map((item) => ({
      product: item.productId,
      quantity: item.quantity,
      price: item.price,
      size: item.size,
      color: item.color,
    }));
    // console.log("products................",products)

    const orderDetails = await OrderDetail.create({
      orderId: placedOrder.orderId,
      productDetails: products,
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
      CGST: req.body.CGST,
      SGST: req.body.SGST,
      totalTax: req.body.Tax,
    });

    const orderdata = await Order.findOne({ orderId: placedOrder.orderId });
    const OrderDetaitlsData = await OrderDetail.findOne({
      orderId: orderdata.orderId,
    });

    const courierRequest = async () => {
      try {
        const response = await axios.post(
          "https://api.tekipost.com/connect/order-ship",
          {
            order_no: orderdata.orderNumber, // Change to orderId
            customer_name: formData.fname + " " + formData.lname,
            customer_address_1: formData.billing_address,
            customer_address_2: formData.billing_address2,
            customer_pincode: formData.zipcode,
            customer_city: formData.city,
            customer_state: formData.state,
            customer_mobile_no: formData.phone,
            customer_alt_no: "",
            customer_email: formData.email,
            product_category: "Fashion & lifestyle",
            product_code: productCode,
            product_name: productName,
            product_qty: quantity, // Use accumulated quantity
            invoice_value: amount,
            cod_value: "1",
            weight_in_kgs: `${0.8 * quantity}`,
            length_in_cms: `${28 * quantity}`,
            breadth_in_cms: `${14 * quantity}`,
            height_in_cms: `${28 * quantity}`,
            warehouse_id: "589",
            movement_type: "Forward",
            store_id: "59",
            courier_id: "",
            custom_awb_no: "",
            service_name: "Surface",
          },
          {
            headers: {
              Authorization: `Bearer ${encodedCredentials}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        throw error;
      }
    };

    try {
      const response = await courierRequest();

      if (!response.error) {
        const modifyOrderData = await Order.findOneAndUpdate(
          { orderId: placedOrder.orderId },
          {
            $set: {
              order_id: response.order_id,
              orderDetails: OrderDetaitlsData._id,
            },
          },
          { new: true }
        );
      }
      console.log("done orderplaced on tekipost");
    } catch (error) {
      console.error("Error in courierRequest:", error.message);
    }

    const modifyOrderData = await Order.findOneAndUpdate(
      { orderId: placedOrder.orderId },
      { $set: { orderDetails: OrderDetaitlsData._id } },
      { new: true }
    );
    // console.log(modifyOrderData)
    const orderData = await Order.findOneAndUpdate(
      { orderId: modifyOrderData.orderId },
      {
        $set: {
          PaymentStatus: "COD",
        },
      },
      { new: true }
    );

    const updateUserData = await User.findOneAndUpdate(
      { email: email },
      { $push: { order: modifyOrderData._id } },
      { new: true }
    );

    // res.status(200).json({ success: true, modifyOrderData });

    const productmodification = await Promise.all(
      req.body.cartdata.map(async (item) => {
        try {
          // Find the product by its ID
          const foundProduct = await Product.findById(item.productId);

          // Check if the product is found
          if (foundProduct) {
            // Find the index of the size in the product's sizes array
            const sizeIndex = foundProduct.sizesAvailable.findIndex(
              (sizeObj) => sizeObj.size === item.size
            );

            // Check if the size exists in the product's sizes
            if (sizeIndex !== -1) {
              // Update the quantity of the size
              if (foundProduct.sizesAvailable[sizeIndex].quantity > 0) {
                foundProduct.sizesAvailable[sizeIndex].quantity -=
                  item.quantity;
                // Save the changes to the database
                await foundProduct.save();
                // return { success: true, message: `Quantity updated for size ${item.size} in product ${item.productId}` };
              } else {
                console.log(
                  `Insufficient quantity for size ${item.size} in product ${item.productId}`
                );
                // return { success: false, message: `Insufficient quantity for size ${item.size} in stock` };
              }
            } else {
              console.log(
                `Size ${item.size} not found for product ${item.productId}`
              );
              // return { success: false, message: `Size ${item.size} not found for product ${item.productId}` };
            }
          } else {
            console.log(`Product ${item.productId} not found`);
            // return { success: false, message: `Product ${item.productId} not found` };
          }
        } catch (error) {
          console.error("Error while processing product: ", error);
          // return { success: false, message: "Something went wrong, try again later!" };
        }
      })
    );

    // Now productmodification array contains response objects indicating success or failure for each product modification

    // Filter out any null values (products that were not found or had insufficient quantity)
    const validProducts = productmodification.filter(
      (product) => product !== null
    );

    // Now you can use the validProducts array for further processing or saving to the database

    // Wait for all products to be updated and return the updated products array
    const updatedProducts = await Promise.all(productmodification);

    console.log("products updated successfully");
    // Do something with updatedProducts if needed
  } catch (error) {
    console.log(error.message);
    res.status(201).json({ errorMsg: error.message, success: false });
  }
};

const checkout = async (req, res) => {
  const formData = req.body.formData;
  const amount = req.body.amount;
  const email = req.body.userEmail;
  const { CGST, SGST, Tax } = req.body;
  console.log(formData, amount, email, CGST, SGST, Tax);
  let productName = "";
  let productCode = "";
  let quantity = 0;

  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  try {
    const order = await instance.orders.create(options);
    const user = await User.findOne({ email });
    // console.log(order);
    const placedOrder = await Order.create({
      user: user.id,
      orderId: generateOrderId(),
      razorpay_order_id: order.id,
    });

    await req.body.cartdata.forEach((item) => {
      productName += item.title + ",";
      productCode += item.productCode + ",";
      quantity += item.quantity; // Accumulate quantity
    });
    // console.log("placedOrder",placedOrder)
    const products = await req.body.cartdata.map((item) => ({
      product: item.productId,
      quantity: item.quantity,
      price: item.price,
      size: item.size,
      color: item.color,
    }));

    const orderDetails = await OrderDetail.create({
      orderId: placedOrder.orderId,
      productDetails: products,
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
      CGST: req.body.CGST,
      SGST: req.body.SGST,
      totalTax: req.body.Tax,
    });

    const orderdata = await Order.findOne({ orderId: placedOrder.orderId });
    // console.log("====================", orderdata);
    const OrderDetaitlsData = await OrderDetail.findOne({
      orderId: orderdata.orderId,
    });
    // console.log("00000000000000000000000",OrderDetaitlsData)
    // const courierRequest = async () => {
    //   try {
    //     const response = await axios.post(
    //       "https://api.tekipost.com/connect/order-ship",
    //       {
    //         // invoice_no:order
    //         order_no: orderdata.orderNumber, // Change to orderId
    //         customer_name: formData.fname + " " + formData.lname,
    //         customer_address_1: formData.billing_address,
    //         customer_address_2: formData.billing_address2,
    //         customer_pincode: formData.zipcode,
    //         customer_city: formData.city,
    //         customer_state: formData.state,
    //         customer_mobile_no: formData.phone,
    //         customer_alt_no: "",
    //         customer_email: formData.email,
    //         product_category: "Fashion & lifestyle",
    //         product_code: productCode,
    //         product_name: productName,
    //         product_qty: quantity, // Use accumulated quantity
    //         invoice_value: amount,
    //         cod_value: "0",
    //         weight_in_kgs: `${0.8 * quantity}`,
    //         length_in_cms: `${28 * quantity}`,
    //         breadth_in_cms: `${14 * quantity}`,
    //         height_in_cms: `${28 * quantity}`,
    //         warehouse_id: "589",
    //         movement_type: "Forward",
    //         store_id: "59",
    //         courier_id: "",
    //         custom_awb_no: "",
    //         service_name: "Surface",
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${encodedCredentials}`,
    //         },
    //       }
    //     );

    //     return response.data;
    //     console.log("orderplaced on tekipost");
    //   } catch (error) {
    //     throw error;
    //   }
    // };
    // try {
    //   const response = await courierRequest();
    //   console.log(response);
    //   if (!response.error) {
    //     const modifyOrderData = await Order.findOneAndUpdate(
    //       { orderId: placedOrder.orderId },
    //       {
    //         $set: {
    //           order_id: response.order_id,
    //           orderDetails: OrderDetaitlsData._id, 
    //         },
    //       },
    //       { new: true }
    //     );
    //   }
    //   // console.log(orderplaced);
    // } catch (error) {
    //   console.error("Error in courierRequest:", error.message);
    // }

    const modifyOrderData = await Order.findOneAndUpdate(
      { orderId: placedOrder.orderId },
      { $set: { orderDetails: OrderDetaitlsData._id } },
      { new: true }
    );
    const updateUserData = await User.findOneAndUpdate(
      { email: email }, // Assuming email is defined elsewhere in your code
      { $push: { order: modifyOrderData._id } }, // Assuming you want to push the modified order _id to the user's orders array
      { new: true }
    );

    const productmodification = await Promise.all(
      req.body.cartdata.map(async (item) => {
        try {
          // Find the product by its ID
          const foundProduct = await Product.findById(item.productId);

          // Check if the product is found
          if (foundProduct) {
            // Find the index of the size in the product's sizes array
            const sizeIndex = foundProduct.sizesAvailable.findIndex(
              (sizeObj) => sizeObj.size === item.size
            );

            // Check if the size exists in the product's sizes
            if (sizeIndex !== -1) {
              // Update the quantity of the size
              if (foundProduct.sizesAvailable[sizeIndex].quantity > 0) {
                foundProduct.sizesAvailable[sizeIndex].quantity -=
                  item.quantity;
                // Save the changes to the database
                await foundProduct.save();
                // return { success: true, message: `Quantity updated for size ${item.size} in product ${item.productId}` };
              } else {
                console.log(
                  `Insufficient quantity for size ${item.size} in product ${item.productId}`
                );
                // return { success: false, message: `Insufficient quantity for size ${item.size} in stock` };
              }
            } else {
              console.log(
                `Size ${item.size} not found for product ${item.productId}`
              );
              // return { success: false, message: `Size ${item.size} not found for product ${item.productId}` };
            }
          } else {
            console.log(`Product ${item.productId} not found`);
            // return { success: false, message: `Product ${item.productId} not found` };
          }
        } catch (error) {
          console.error("Error while processing product: ", error);
          // return { success: false, message: "Something went wrong, try again later!" };
        }
      })
    );

    // Now productmodification array contains response objects indicating success or failure for each product modification

    // Filter out any null values (products that were not found or had insufficient quantity)
    const validProducts = productmodification.filter(
      (product) => product !== null
    );

    // Now you can use the validProducts array for further processing or saving to the database

    // Wait for all products to be updated and return the updated products array
    const updatedProducts = await Promise.all(productmodification);

    console.log("products updated successfully");
    // console.log(updateUserData)
    res.status(200).json({ success: true, order });
  } catch (error) {
    res
      .status(403)
      .json({ message: "something went wrong try again", succes: false });
  }
};

const pincodeData = (req, res) => {
  const { pincode } = req.body;
  //console.log(pincode);
  const data = query.search(pincode);
  // console.log(data);
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
  // console.log(isAuthentic);

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
        { razorpay_order_id: razorpay_order_id },
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

      res.redirect(
        `${process.env.BASE_URL}/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } catch (error) {
      const orderData = await Order.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { $set: { PaymentStatus: "Failed" } },
        { new: true }
      );
      // console.error("Error processing payment:", error);
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
  codCheckout,
  pincodeData,
  paymentVerification,
};
