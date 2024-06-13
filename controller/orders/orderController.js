
const jwt=require('jsonwebtoken');
const Order = require("../../modals/order/order");
// const OrderCounter = require("../../modals/orderCounter/orderCounterSchema");
const OrderDetail = require("../../modals/orderDetails/orderDetail");
const User = require('../../modals/user/User');



const getAllOrders = async (req, res) => {
    try {
        const products = await Order.find().populate('user  orderDetails');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const trackOrder = async (req, res) => {
  const { Id } = req.params;
  const awb_no = req.body.awb_no;
  // console.log(awb_no)
  try {
    const data = await Order.findOne({ orderNumber: Id });
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const getOrderById = async (req, res) => {
  const { Id } = req.params;
  try {
      const orderdata = await Order.findById(Id).populate('orderDetails');
      if (!orderdata) {
          return res.status(404).json({ message: 'Order data not found' });
      }

      const orderDetails = await OrderDetail.findOne({ orderId: orderdata.orderId }).populate('productDetails.product');
      if (!orderDetails) {
          return res.status(404).json({ message: 'Order details not found' });
      }

      res.json({ orderDetails, orderNumber: orderdata.orderNumber });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


 const getOrderDetials=  async (req, res) => {
    try {
        const products = await OrderDetail.find().populate('productDetails.product');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrderDetialsById = async (req, res) => {
    const {Id}= req.params;
     try {
         const orderdata = await OrderDetail.findById(Id).populate('productDetails.product');
         
         if (!orderdata) {
             return res.status(404).json({ message: 'orderdata not found' });
         }
         console.log(orderdata);
         res.json(orderdata);
     } catch (error) {
         res.status(500).json({ message: error.message });
     }
 };



//   updating order Status through tekipost delivery system
const updateOrderStatus = async (req, res) => {
    try {
        let user;
      const { order_id } = req?.body;
    //   console.log(order_id)
      if (!order_id) {
        return res.status(401).json({ success: false, message: 'Order not found!' });
      }
  
      const authHeader = req.headers['authorization'];
      // Extract the token from the Authorization header
      if(authHeader){
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
      user = await User.findById(decoded.id);
      }
     console.log(user)
  
      // Verify the JWT token
      
      if (user===null||undefined) {
        try {
          const updateOrder = await Order.findOneAndUpdate(
            { order_id: req?.body?.order_id },
            {
              $set: {
                // merchant_id: req?.body?.merchant_id,
                awb_no: req?.body?.awb_no,
                pickup_pincode: req?.body?.pickup_pincode,
                destination_pincode: req?.body?.destination_pincode,
                status_id: req?.body?.status_id,
                courier_msg: req?.body?.courier_msg,
                // courier_event_date_time: req?.body?.courier_event_date_time,
                // current_location: req?.body?.current_location,
              },
            },
            { new: true }
          );
          console.log(updateOrder)
          return res.status(201).json({ success: true, message: 'order status updated successfully', error: false });
        } catch (error) {
          console.error("Error updating order:", error.message);
          return res.status(500).json({ success: false, message: error.message });
        }
      } else {
        try {
          const updateOrder = await Order.findOneAndUpdate(
            { order_id: req?.body?.order_id },
            {
              $set: req?.body
            },
            { new: true }
          );
          return res.status(201).json({ success: true, message: 'Order updated successfully', error: false });
        } catch (error) {
          console.error("Error updating order:", error.message);
          return res.status(500).json({ success: false, message: error.message });
        }
      }
    } catch (err) {
      console.log(err.message);
      return res.status(201).json({ message: "Something went wrong. Please try again." });
    }
  }
  
  const orderCancellation = async (req, res) => {
    try {
      const { orderNumber } = req.params;
  
      constchcancelledOrder = await Order.findOneAndUpdate(
        { orderNumber: orderNumber },
        { $set: { orderStatus: "Cancelled" } },
        { new: true } // This option returns the updated document
      );
  
      if (!cancelledOrder) {
        return res.status(404).json({success:false,error:true, message: "Order not found" });
      }
  
        // return res.status(404).json({success:false,error:true, message: "Order not found" });
      return res.status(200).json({success:true,error:false, message: "Order cancelled successfully" });
    } catch (error) {
    
      return res.status(500).json({success:false,error:tue, message: error.message });
    }
  };
  

module.exports={
    updateOrderStatus,
    trackOrder,
    orderCancellation,
    getAllOrders,
    getOrderById,
    getOrderDetials, 
    getOrderDetialsById,
    
}