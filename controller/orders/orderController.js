const Order = require("../../modals/order/order");
// const OrderCounter = require("../../modals/orderCounter/orderCounterSchema");
const OrderDetail = require("../../modals/orderDetails/orderDetail");



const getAllOrders = async (req, res) => {
    try {
        const products = await Order.find().populate('user  orderDetails');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




const getOrderById = async (req, res) => {
    const {Id}= req.params;
     try {
         const orderdata = await Order.findById(Id).populate('orderDetails');
         
         const orderDetails=await OrderDetail.findOne({orderId:orderdata.orderId}).populate('productDetails.product')
         console.log(orderDetails)
         if (!orderdata) {
             return res.status(404).json({ message: 'orderdata not found' });
         }
         res.json(orderDetails);
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

module.exports={
    getAllOrders,
    getOrderById,
    getOrderDetials, 
    getOrderDetialsById,
    
}