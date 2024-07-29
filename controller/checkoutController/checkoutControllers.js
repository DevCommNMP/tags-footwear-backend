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
const nodemailer = require("nodemailer");
const Product = require("../../modals/product/product");
var email = process.env.courierEmail;
var password = process.env.courierPassword;
let userEmail;
let username_for_email;
let BillingData;
let Amount;
let Quantity;
let ProductName;
let ProductCode;
let ProductData;
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


const codCheckout = async (req, res) => {
  try {
    const formData = req.body.formData;
    const amount = req.body.amount;
    const email = formData.email;
  
  const username=formData.fname
  const password=formData.fname+"@123";
    const { CGST, SGST, Tax } = req.body;
    const user = await User.findOne({ email });
    let productName = "";
    let productCode = "";
    let quantity = 0; // Initialize quantity
    let newUser;
    if(!user){
      newUser=await User.create({ email, username, password });
          }
    // console.log(order);
  
    const placedOrder = await Order.create({
      user: user.id||newUser.id,
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
        )

        return response;
      } catch (error) {
        throw error;
      }
    };

    try {
          const BASE_URL=`${process.env.BASE_URL}/track-order/${orderdata.orderNumber}`;
   
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port:  587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "as9467665000@gmail.com",
        pass: "ddle kjkt haxu vfmz",
      },
    });
     
    const mailOptions = {
      from: {
        name: "Tags Footwear",
        address: "as9467665000@gmail.com",
      },
      to: email,
      subject: "Order Confirmation", // Subject line
      text: "Order Confirmation", // Plain text body
      html: `<html
        lang="en"
      >
        <head>
          <title></title>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />

          <style>
            * {
              box-sizing: border-box;
            }
      
            body {
              margin: 0;
              padding: 0;
            }
      
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
      
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
      
            p {
              line-height: inherit;
            }
      
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
      
            .image_block img + div {
              display: none;
            }
      
            @media (max-width: 660px) {
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                display: inline-block !important;
              }
      
              .icons-inner {
                text-align: center;
              }
      
              .icons-inner td {
                margin: 0 auto;
              }
      
              .image_block img.fullWidth {
                max-width: 100% !important;
              }
      
              .mobile_hide {
                display: none;
              }
      
              .row-content {
                width: 100% !important;
              }
      
              .stack .column {
                width: 100%;
                display: block;
              }
      
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
      
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body
          style="
            background-color: rgb(244, 236, 250);
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              background-color: #f8f8f9;
            "
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background-color: #ec0f82;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #ec0f82;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 4px solid #ec0f82;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-2"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background-color: #fff;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  ></table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-3"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-4"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="padding-bottom: 0px; padding-top: 36px"
                                      >
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 0px solid #bbbbbb;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          width: 100%;
                                        "
                                      >
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px"
                                        >
                                          <img
                                            alt="logo image"
                                            class="fullWidth"
                                            src="https://res.cloudinary.com/dibaxrbac/image/upload/v1711623271/Footwear_Accessories_dwncjn.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 170px;
                                              width: 100%;
                                              margin-bottom: 2rem;
                                            "
                                            title="I'm an image"
                                            width="352"
                                          />
                                          <img
                                            alt="I'm an image"
                                            class="fullWidth"
                                            src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/img_intro_1.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 290px;
                                              width: 100%;
                                            "
                                            title="I'm an image"
                                            width="352"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad" style="padding-top: 50px">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 0px solid #bbbbbb;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-4"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #555555;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            font-size: 30px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 36px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            <span style="color: #2b303a"
                                              ><strong
                                                >Track your Order</strong
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-5"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #555555;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            font-size: 15px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 22.5px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Hey ${user?.username||newUser?.username} Thank you for shopping with us at [Your Company Name]! We are pleased to inform you that your order has been successfully placed and is now being processed.
                                            <strong>Tags Footwear!</strong> To
                                           You can track your order using the given link.
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="button_block block-6"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-left: 10px;
                                          padding-right: 10px;
                                          padding-top: 15px;
                                          text-align: center;
                                        "
                                      >
                                        <div align="center" class="alignment">
                                          <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:62px;width:203px;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#e44fa4"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]-->
                                          <div
                                            style="
                                              text-decoration: none;
                                              display: inline-block;
                                              color: #ffffff;
                                              background-color: #ec0f82;
                                              border-radius: 60px;
                                              width: auto;
                                              border-top: 0px solid transparent;
                                              font-weight: undefined;
                                              border-right: 0px solid transparent;
                                              border-bottom: 0px solid transparent;
                                              border-left: 0px solid transparent;
                                              padding-top: 15px;
                                              padding-bottom: 15px;
                                              font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-border-alt: none;
                                              word-break: keep-all;
                                            "
                                          >
                                            <span
                                              style="
                                                padding-left: 30px;
                                                padding-right: 30px;
                                                font-size: 16px;
                                                display: inline-block;
                                                letter-spacing: normal;
                                              "
                                              ><span
                                                style="
                                                  margin: 0;
                                                  word-break: break-word;
                                                  line-height: 32px;
                                                "
                                                ><a
                                                  style="
                                                    text-decoration: none;
                                                    color: white;
                                                  "
                                                  href=${BASE_URL}
                                                  ><strong
                                                    >Track your order</strong
                                                  ></a
                                                ></span
                                              ></span
                                            >
                                          </div>
                                          <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-7"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 12px;
                                          padding-top: 60px;
                                        "
                                      >
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 0px solid #bbbbbb;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-5"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-6"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #2b303a;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 4px solid #ec0f82;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  ></table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="social_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-right: 10px;
                                          padding-top: 28px;
                                          text-align: center;
                                        "
                                      >
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="social-table"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              display: inline-block;
                                            "
                                            width="208px"
                                          >
                                            <tr>
                                              <td style="padding: 0 10px 0 10px">
                                                <a
                                                  href="https://www.facebook.com"
                                                  target="_blank"
                                                  ><img
                                                    alt="Facebook"
                                                    height="32"
                                                    src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_facebook.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="Facebook"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 10px 0 10px">
                                                <a
                                                  href="https://www.twitter.com"
                                                  target="_blank"
                                                  ><img
                                                    alt="Twitter"
                                                    height="32"
                                                    src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_twitter.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="Twitter"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 10px 0 10px">
                                                <a
                                                  href="https://www.instagram.com"
                                                  target="_blank"
                                                  ><img
                                                    alt="Instagram"
                                                    height="32"
                                                    src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_instagram.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="Instagram"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 10px 0 10px">
                                                <a
                                                  href="https://www.linkedin.com"
                                                  target="_blank"
                                                  ><img
                                                    alt="LinkedIn"
                                                    height="32"
                                                    src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_pinterest.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="LinkedIn"
                                                    width="32"
                                                /></a>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-4"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 15px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #dfcdd6;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            font-size: 12px;
                                            line-height: 150%;
                                            text-align: left;
                                            mso-line-height-alt: 18px;
                                          "
                                        >
                                          <p style="margin: 0">
                                Welcome to TagsFootwear, where every step matters. Our passion is to provide exquisite footwear that seamlessly blends style, comfort, and quality.


                                          </p>
                                          <ul>
                                                                                  <li>
                                           Address: 1368, D-5, Narayana Shasthri Road, Devaraj Mohalla, Mysore - 570001
                                                                                  </li>
                                                                                <li>(+91) 98444 88700</li>
                                                       
                                                                                  <li>tagsfootwear.2023@gmail.com</li>
                                                                                </ul>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-5"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 25px;
                                        "
                                      >
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 1px solid #555961;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-6"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 30px;
                                          padding-left: 40px;
                                          padding-right: 40px;
                                          padding-top: 20px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #ec0f82;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            font-size: 12px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 14.399999999999999px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            <span style="color: #dfcdd6"
                                              >
                                              <span
                                                id="c2e0ec35-b4ce-44fc-9c78-fa5cec49c8ec"
                                                ></span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-7"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 640px;
                              margin: 0 auto;
                            "
                            width="640"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="icons_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          vertical-align: middle;
                                          color: #9d9d9d;
                                          font-family: inherit;
                                          font-size: 15px;
                                          padding-bottom: 5px;
                                          padding-top: 5px;
                                          text-align: center;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                          "
                                          width="100%"
                                        >
                                          <tr>
                                            <td
                                              class="alignment"
                                              style="
                                                vertical-align: middle;
                                                text-align: center;
                                              "
                                            >
                                              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                              <!--[if !vml]><!-->
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                class="icons-inner"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  display: inline-block;
                                                  margin-right: -4px;
                                                  padding-left: 0px;
                                                  padding-right: 0px;
                                                "
                                              >
                                                <!--<![endif]-->
                                                <tr>
                                                  <td
                                                    style="
                                                      vertical-align: middle;
                                                      text-align: center;
                                                      padding-top: 5px;
                                                      padding-bottom: 5px;
                                                      padding-left: 5px;
                                                      padding-right: 6px;
                                                    "
                                                  ></td>
                                                  <td
                                                    style="
                                                      font-family: Montserrat,
                                                        Trebuchet MS, Lucida Grande,
                                                        Lucida Sans Unicode,
                                                        Lucida Sans, Tahoma,
                                                        sans-serif;
                                                      font-size: 15px;
                                                      color: #9d9d9d;
                                                      vertical-align: middle;
                                                      letter-spacing: undefined;
                                                      text-align: center;
                                                    "
                                                  >
                                                    <a
                                                      href="https://github.com/Aaditya2763/"
                                                      style="
                                                        color: #9d9d9d;
                                                        text-decoration: none;
                                                      "
                                                      target="_blank"
                                                      >Developed & Designed by:
                                                      <strong
                                                        >Aditya Singh</strong
                                                      ></a
                                                    >
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End -->
        </body>
      </html>`, // HTML body
    };
    
      const sendMail = async (transporter, mailOptions) => {
        try {
          await transporter.sendMail(mailOptions);
          console.log("Email sent successfully");
          // Do not send response here, as it's outside of the route handler
        } catch (error) {
          console.error(error);
          // Do not send response here, as it's outside of the route handler
        }
      };
      const response = await courierRequest();
      await sendMail(transporter, mailOptions);
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
      console.log(error)
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
    res.status(201).json({ message:"order Placed Successfully" , success: true });
    // Do something with updatedProducts if needed
  } catch (error) {
    console.log(error.message);
    res.status(201).json({ errorMsg: error.message, success: false });
  }
};

const checkout = async (req, res) => {
  const formData = req.body.formData;
  BillingData=formData;

  const amount = req.body.amount;
  const email = req.body.userEmail;
  userEmail=email;
  const username=formData.fname
  const password=formData.fname+"@123";
  const { CGST, SGST, Tax } = req.body;
  const user = await User.findOne({ email });
  Amount=amount;

  // console.log(formData, amount, email, CGST, SGST, Tax);
  let productName = "";
  let productCode = "";
  let quantity = 0;

  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  try {
    const order = await instance.orders.create(options);
    
    let newUser;
    if(!user){
      newUser=await User.create({ email, username, password });
          }
    // console.log(order);
    username_for_email=user?.username||newUser?.username
    const placedOrder = await Order.create({
      user: user?.id ||newUser.id,
      orderId: generateOrderId(),
      razorpay_order_id: order.id,
    });

    await req.body.cartdata.forEach((item) => {
      productName += item.title + ",";
      productCode += item.product.productName+","
      quantity += item.quantity; 
      Quantity=quantity// Accumulate quantity
      ProductName=productName;
      ProductCode =productCode
    });
    ProductData=req.body.cartdata;
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
    OrderData=orderdata;
    // console.log("====================", orderdata);
    const OrderDetaitlsData = await OrderDetail.findOne({
      orderId: orderdata.orderId,
    });
    

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

   
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.log(error)
    res
      .status(403)
      .json({ message: "something went wrong try again", succes: false,error:error.message });
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
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    try {
      // Create payment record
    const data= await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
      // console.log(data)
      //capturing payment data
      const captureResponse = await axios.get(
        `https://api.razorpay.com/v1/payments/${razorpay_payment_id}`,
        {
          auth: {
            username: process.env.RAZORPAY_API_KEY, // Replace with your Razorpay API key
            password: process.env.RAZORPAY_SECRET // Replace with your Razorpay API secret stored in environment variable
          }
        }
      );
      
      let paymentType;
      if (captureResponse.data.method === 'upi') {
        paymentType = "UPI";
      } else if (captureResponse.data.method === 'card') {
        paymentType = `${captureResponse.data.card.network} ${captureResponse.data.card.type} Card`;
      } else if (captureResponse.data.method === 'netbanking') {
        paymentType = "Netbanking";
      } else {
        paymentType = "";
      }


      // / Update order payment status
      const orderData = await Order.findOneAndUpdate(
        { razorpay_order_id },
        {
          $set: {
            PaymentStatus: "Paid",
            paymentMethod:paymentType,
            paymentDetails: {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
          },
        },
        { new: true }
      );

     
      const courierData = {
        order_no: orderData.orderNumber, // Change to orderId
            customer_name: BillingData.fname + " " + BillingData.lname,
            customer_address_1: BillingData.billing_address,
            customer_address_2: BillingData.billing_address2,
            customer_pincode: BillingData.zipcode,
            customer_city: BillingData.city,
            customer_state: BillingData.state,
            customer_mobile_no: BillingData.phone,
            customer_alt_no: "",
            customer_email: BillingData.email,
            product_category: "Fashion & lifestyle",
            product_code: ProductCode,
            product_name: ProductName,
            product_qty: Quantity, // Use accumulated quantity
            invoice_value: Amount,
            cod_value: "0",
            weight_in_kgs: `${0.8 * Quantity}`,
            length_in_cms: `${28 * Quantity}`,
            breadth_in_cms: `${14 * Quantity}`,
            height_in_cms: `${28 * Quantity}`,
            warehouse_id: "589",
            movement_type: "Forward",
            store_id: "59",
            courier_id: "",
            custom_awb_no: "",
            service_name: "Surface",
      };

      // Make courier request
      const response = await axios.post(
        "https://api.tekipost.com/connect/order-ship",
        courierData,
        {
          headers: {
            Authorization: `Bearer ${encodedCredentials}`,
          },
        }
      );
      
      const BASE_URL=`${process.env.BASE_URL}/track-order/${orderData.orderNumber}`;
   
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port:  587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "as9467665000@gmail.com",
          pass: "ddle kjkt haxu vfmz",
        },
      });

      const mailOptions = {
        from: {
          name: "Tags Footwear",
          address: "as9467665000@gmail.com",
        },
        to: userEmail,
        subject: "Order Confirmation", // Subject line
        text: "Order Confirmation", // Plain text body
        html: `<html
          lang="en"
        >
          <head>
            <title></title>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  
            <style>
              * {
                box-sizing: border-box;
              }
        
              body {
                margin: 0;
                padding: 0;
              }
        
              a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
              }
        
              #MessageViewBody a {
                color: inherit;
                text-decoration: none;
              }
        
              p {
                line-height: inherit;
              }
        
              .desktop_hide,
              .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
              }
        
              .image_block img + div {
                display: none;
              }
        
              @media (max-width: 660px) {
                .desktop_hide table.icons-inner,
                .social_block.desktop_hide .social-table {
                  display: inline-block !important;
                }
        
                .icons-inner {
                  text-align: center;
                }
        
                .icons-inner td {
                  margin: 0 auto;
                }
        
                .image_block img.fullWidth {
                  max-width: 100% !important;
                }
        
                .mobile_hide {
                  display: none;
                }
        
                .row-content {
                  width: 100% !important;
                }
        
                .stack .column {
                  width: 100%;
                  display: block;
                }
        
                .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
                }
        
                .desktop_hide,
                .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
                }
              }
            </style>
          </head>
          <body
            style="
              background-color: rgb(244, 236, 250);
              margin: 0;
              padding: 0;
              -webkit-text-size-adjust: none;
              text-size-adjust: none;
            "
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="nl-container"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #f8f8f9;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row row-1"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #ec0f82;
                      "
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="row-content stack"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                background-color: #ec0f82;
                                color: #000;
                                width: 640px;
                                margin: 0 auto;
                              "
                              width="640"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="column column-1"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      font-weight: 400;
                                      text-align: left;
                                      vertical-align: top;
                                      border-top: 0px;
                                      border-right: 0px;
                                      border-bottom: 0px;
                                      border-left: 0px;
                                    "
                                    width="100%"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="divider_block block-1"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td class="pad">
                                          <div align="center" class="alignment">
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              role="presentation"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                              "
                                              width="100%"
                                            >
                                              <tr>
                                                <td
                                                  class="divider_inner"
                                                  style="
                                                    font-size: 1px;
                                                    line-height: 1px;
                                                    border-top: 4px solid #ec0f82;
                                                  "
                                                >
                                                  <span> </span>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row row-2"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #fff;
                      "
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="row-content stack"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                background-color: #fff;
                                color: #000;
                                width: 640px;
                                margin: 0 auto;
                              "
                              width="640"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="column column-1"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      font-weight: 400;
                                      text-align: left;
                                      vertical-align: top;
                                      border-top: 0px;
                                      border-right: 0px;
                                      border-bottom: 0px;
                                      border-left: 0px;
                                    "
                                    width="100%"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="image_block block-1"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    ></table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row row-3"
                      role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                      width="100%"
                    >
                      <tbody>
                        <tr></tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row row-4"
                      role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="row-content stack"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                background-color: #fff;
                                color: #000;
                                width: 640px;
                                margin: 0 auto;
                              "
                              width="640"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="column column-1"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      font-weight: 400;
                                      text-align: left;
                                      vertical-align: top;
                                      border-top: 0px;
                                      border-right: 0px;
                                      border-bottom: 0px;
                                      border-left: 0px;
                                    "
                                    width="100%"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="divider_block block-1"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="padding-bottom: 0px; padding-top: 36px"
                                        >
                                          <div align="center" class="alignment">
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              role="presentation"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                              "
                                              width="100%"
                                            >
                                              <tr>
                                                <td
                                                  class="divider_inner"
                                                  style="
                                                    font-size: 1px;
                                                    line-height: 1px;
                                                    border-top: 0px solid #bbbbbb;
                                                  "
                                                >
                                                  <span> </span>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="image_block block-2"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            padding-left: 40px;
                                            padding-right: 40px;
                                            width: 100%;
                                          "
                                        >
                                          <div
                                            align="center"
                                            class="alignment"
                                            style="line-height: 10px"
                                          >
                                            <img
                                              alt="logo image"
                                              class="fullWidth"
                                              src="https://res.cloudinary.com/dibaxrbac/image/upload/v1711623271/Footwear_Accessories_dwncjn.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                                max-width: 170px;
                                                width: 100%;
                                                margin-bottom: 2rem;
                                              "
                                              title="I'm an image"
                                              width="352"
                                            />
                                            <img
                                              alt="I'm an image"
                                              class="fullWidth"
                                              src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/img_intro_1.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                                max-width: 290px;
                                                width: 100%;
                                              "
                                              title="I'm an image"
                                              width="352"
                                            />
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="divider_block block-3"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td class="pad" style="padding-top: 50px">
                                          <div align="center" class="alignment">
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              role="presentation"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                              "
                                              width="100%"
                                            >
                                              <tr>
                                                <td
                                                  class="divider_inner"
                                                  style="
                                                    font-size: 1px;
                                                    line-height: 1px;
                                                    border-top: 0px solid #bbbbbb;
                                                  "
                                                >
                                                  <span> </span>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="paragraph_block block-4"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        word-break: break-word;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            padding-bottom: 10px;
                                            padding-left: 40px;
                                            padding-right: 40px;
                                            padding-top: 10px;
                                          "
                                        >
                                          <div
                                            style="
                                              color: #555555;
                                              font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                              font-size: 30px;
                                              line-height: 120%;
                                              text-align: center;
                                              mso-line-height-alt: 36px;
                                            "
                                          >
                                            <p
                                              style="margin: 0; word-break: break-word"
                                            >
                                              <span style="color: #2b303a"
                                                ><strong
                                                  >Track your Order</strong
                                                ></span
                                              >
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="paragraph_block block-5"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        word-break: break-word;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            padding-bottom: 10px;
                                            padding-left: 40px;
                                            padding-right: 40px;
                                            padding-top: 10px;
                                          "
                                        >
                                          <div
                                            style="
                                              color: #555555;
                                              font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                              font-size: 15px;
                                              line-height: 150%;
                                              text-align: center;
                                              mso-line-height-alt: 22.5px;
                                            "
                                          >
                                            <p
                                              style="margin: 0; word-break: break-word"
                                            >
                                              Hey ${username_for_email} Thank you for shopping with us at [Your Company Name]! We are pleased to inform you that your order has been successfully placed and is now being processed.
                                              <strong>Tags Footwear!</strong> To
                                             You can track your order using the given link.
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="button_block block-6"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            padding-left: 10px;
                                            padding-right: 10px;
                                            padding-top: 15px;
                                            text-align: center;
                                          "
                                        >
                                          <div align="center" class="alignment">
                                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:62px;width:203px;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#e44fa4"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]-->
                                            <div
                                              style="
                                                text-decoration: none;
                                                display: inline-block;
                                                color: #ffffff;
                                                background-color: #ec0f82;
                                                border-radius: 60px;
                                                width: auto;
                                                border-top: 0px solid transparent;
                                                font-weight: undefined;
                                                border-right: 0px solid transparent;
                                                border-bottom: 0px solid transparent;
                                                border-left: 0px solid transparent;
                                                padding-top: 15px;
                                                padding-bottom: 15px;
                                                font-family: Montserrat, Trebuchet MS,
                                                  Lucida Grande, Lucida Sans Unicode,
                                                  Lucida Sans, Tahoma, sans-serif;
                                                font-size: 16px;
                                                text-align: center;
                                                mso-border-alt: none;
                                                word-break: keep-all;
                                              "
                                            >
                                              <span
                                                style="
                                                  padding-left: 30px;
                                                  padding-right: 30px;
                                                  font-size: 16px;
                                                  display: inline-block;
                                                  letter-spacing: normal;
                                                "
                                                ><span
                                                  style="
                                                    margin: 0;
                                                    word-break: break-word;
                                                    line-height: 32px;
                                                  "
                                                  ><a
                                                    style="
                                                      text-decoration: none;
                                                      color: white;
                                                    "
                                                    href=${BASE_URL}
                                                    ><strong
                                                      >Track your order</strong
                                                    ></a
                                                  ></span
                                                ></span
                                              >
                                            </div>
                                            <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="divider_block block-7"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            padding-bottom: 12px;
                                            padding-top: 60px;
                                          "
                                        >
                                          <div align="center" class="alignment">
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              role="presentation"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                              "
                                              width="100%"
                                            >
                                              <tr>
                                                <td
                                                  class="divider_inner"
                                                  style="
                                                    font-size: 1px;
                                                    line-height: 1px;
                                                    border-top: 0px solid #bbbbbb;
                                                  "
                                                >
                                                  <span> </span>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row row-5"
                      role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                      width="100%"
                    >
                      <tbody>
                        <tr></tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row row-6"
                      role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="row-content stack"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                background-color: #2b303a;
                                color: #000;
                                width: 640px;
                                margin: 0 auto;
                              "
                              width="640"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="column column-1"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      font-weight: 400;
                                      text-align: left;
                                      vertical-align: top;
                                      border-top: 0px;
                                      border-right: 0px;
                                      border-bottom: 0px;
                                      border-left: 0px;
                                    "
                                    width="100%"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="divider_block block-1"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td class="pad">
                                          <div align="center" class="alignment">
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              role="presentation"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                              "
                                              width="100%"
                                            >
                                              <tr>
                                                <td
                                                  class="divider_inner"
                                                  style="
                                                    font-size: 1px;
                                                    line-height: 1px;
                                                    border-top: 4px solid #ec0f82;
                                                  "
                                                >
                                                  <span> </span>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="image_block block-2"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    ></table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="social_block block-3"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            padding-bottom: 10px;
                                            padding-left: 10px;
                                            padding-right: 10px;
                                            padding-top: 28px;
                                            text-align: center;
                                          "
                                        >
                                          <div align="center" class="alignment">
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="social-table"
                                              role="presentation"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                                display: inline-block;
                                              "
                                              width="208px"
                                            >
                                              <tr>
                                                <td style="padding: 0 10px 0 10px">
                                                  <a
                                                    href="https://www.facebook.com"
                                                    target="_blank"
                                                    ><img
                                                      alt="Facebook"
                                                      height="32"
                                                      src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_facebook.png"
                                                      style="
                                                        display: block;
                                                        height: auto;
                                                        border: 0;
                                                      "
                                                      title="Facebook"
                                                      width="32"
                                                  /></a>
                                                </td>
                                                <td style="padding: 0 10px 0 10px">
                                                  <a
                                                    href="https://www.twitter.com"
                                                    target="_blank"
                                                    ><img
                                                      alt="Twitter"
                                                      height="32"
                                                      src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_twitter.png"
                                                      style="
                                                        display: block;
                                                        height: auto;
                                                        border: 0;
                                                      "
                                                      title="Twitter"
                                                      width="32"
                                                  /></a>
                                                </td>
                                                <td style="padding: 0 10px 0 10px">
                                                  <a
                                                    href="https://www.instagram.com"
                                                    target="_blank"
                                                    ><img
                                                      alt="Instagram"
                                                      height="32"
                                                      src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_instagram.png"
                                                      style="
                                                        display: block;
                                                        height: auto;
                                                        border: 0;
                                                      "
                                                      title="Instagram"
                                                      width="32"
                                                  /></a>
                                                </td>
                                                <td style="padding: 0 10px 0 10px">
                                                  <a
                                                    href="https://www.linkedin.com"
                                                    target="_blank"
                                                    ><img
                                                      alt="LinkedIn"
                                                      height="32"
                                                      src="https://modulescomposer.s3.us-east-2.amazonaws.com/purple/ico_pinterest.png"
                                                      style="
                                                        display: block;
                                                        height: auto;
                                                        border: 0;
                                                      "
                                                      title="LinkedIn"
                                                      width="32"
                                                  /></a>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="paragraph_block block-4"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        word-break: break-word;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            padding-bottom: 10px;
                                            padding-left: 40px;
                                            padding-right: 40px;
                                            padding-top: 15px;
                                          "
                                        >
                                          <div
                                            style="
                                              color: #dfcdd6;
                                              font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                              font-size: 12px;
                                              line-height: 150%;
                                              text-align: left;
                                              mso-line-height-alt: 18px;
                                            "
                                          >
                                            <p style="margin: 0">
                                              Welcome to TagsFootwear, where every step matters. Our passion is to provide exquisite footwear that seamlessly blends style, comfort, and quality.
                                            </p>
                                            <ul>
                                                                                    <li>
                                             Address: 1368, D-5, Narayana Shasthri Road, Devaraj Mohalla, Mysore - 570001
                                                                                    </li>
                                                                                  <li>(+91) 98444 88700</li>
                                                         
                                                                                    <li>tagsfootwear.2023@gmail.com</li>
                                                                                  </ul>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="divider_block block-5"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            padding-bottom: 10px;
                                            padding-left: 40px;
                                            padding-right: 40px;
                                            padding-top: 25px;
                                          "
                                        >
                                          <div align="center" class="alignment">
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              role="presentation"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                              "
                                              width="100%"
                                            >
                                              <tr>
                                                <td
                                                  class="divider_inner"
                                                  style="
                                                    font-size: 1px;
                                                    line-height: 1px;
                                                    border-top: 1px solid #555961;
                                                  "
                                                >
                                                  <span> </span>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="paragraph_block block-6"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        word-break: break-word;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            padding-bottom: 30px;
                                            padding-left: 40px;
                                            padding-right: 40px;
                                            padding-top: 20px;
                                          "
                                        >
                                          <div
                                            style="
                                              color: #ec0f82;
                                              font-family: Montserrat, Trebuchet MS,
                                                Lucida Grande, Lucida Sans Unicode,
                                                Lucida Sans, Tahoma, sans-serif;
                                              font-size: 12px;
                                              line-height: 120%;
                                              text-align: left;
                                              mso-line-height-alt: 14.399999999999999px;
                                            "
                                          >
                                            <p
                                              style="margin: 0; word-break: break-word"
                                            >
                                              <span style="color: #dfcdd6"
                                                >
                                                <span
                                                  id="c2e0ec35-b4ce-44fc-9c78-fa5cec49c8ec"
                                                  ></span
                                                ></span
                                              >
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row row-7"
                      role="presentation"
                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="row-content stack"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                color: #000;
                                width: 640px;
                                margin: 0 auto;
                              "
                              width="640"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="column column-1"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      font-weight: 400;
                                      text-align: left;
                                      padding-bottom: 5px;
                                      padding-top: 5px;
                                      vertical-align: top;
                                      border-top: 0px;
                                      border-right: 0px;
                                      border-bottom: 0px;
                                      border-left: 0px;
                                    "
                                    width="100%"
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="icons_block block-1"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          class="pad"
                                          style="
                                            vertical-align: middle;
                                            color: #9d9d9d;
                                            font-family: inherit;
                                            font-size: 15px;
                                            padding-bottom: 5px;
                                            padding-top: 5px;
                                            text-align: center;
                                          "
                                        >
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="alignment"
                                                style="
                                                  vertical-align: middle;
                                                  text-align: center;
                                                "
                                              >
                                                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                <!--[if !vml]><!-->
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  class="icons-inner"
                                                  role="presentation"
                                                  style="
                                                    mso-table-lspace: 0pt;
                                                    mso-table-rspace: 0pt;
                                                    display: inline-block;
                                                    margin-right: -4px;
                                                    padding-left: 0px;
                                                    padding-right: 0px;
                                                  "
                                                >
                                                  <!--<![endif]-->
                                                  <tr>
                                                    <td
                                                      style="
                                                        vertical-align: middle;
                                                        text-align: center;
                                                        padding-top: 5px;
                                                        padding-bottom: 5px;
                                                        padding-left: 5px;
                                                        padding-right: 6px;
                                                      "
                                                    ></td>
                                                    <td
                                                      style="
                                                        font-family: Montserrat,
                                                          Trebuchet MS, Lucida Grande,
                                                          Lucida Sans Unicode,
                                                          Lucida Sans, Tahoma,
                                                          sans-serif;
                                                        font-size: 15px;
                                                        color: #9d9d9d;
                                                        vertical-align: middle;
                                                        letter-spacing: undefined;
                                                        text-align: center;
                                                      "
                                                    >
                                                      <a
                                                        href="https://github.com/Aaditya2763/"
                                                        style="
                                                          color: #9d9d9d;
                                                          text-decoration: none;
                                                        "
                                                        target="_blank"
                                                        >Developed & Designed by:
                                                        <strong
                                                          >Aditya Singh</strong
                                                        ></a
                                                      >
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- End -->
          </body>
        </html>`, // HTML body
      };


      const sendMail = async (transporter, mailOptions) => {
        try {
          await transporter.sendMail(mailOptions);
          console.log("Email sent successfully");
          // Do not send response here, as it's outside of the route handler
        } catch (error) {
          console.error(error);
          // Do not send response here, as it's outside of the route handler
        }
      };

      await sendMail(transporter, mailOptions);
      // console.log("Order placed on tekipost", courierData);

         const productmodification = await Promise.all(
      ProductData.map(async (item) => {
        // console.log(item)
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

    // console.log("products updated successfully");
    // console.log(updateUserData)
      // Redirect to success page
      res.redirect(`${process.env.BASE_URL}/paymentsuccess?reference=${razorpay_payment_id}`);

    } catch (error) {
      console.error("Error processing payment:", error);
      await Order.findOneAndUpdate(
        { razorpay_order_id },
        { $set: { PaymentStatus: "Failed" } },
        { new: true }
      );
      res.status(500).json({ success: false, message: "Error processing payment" });
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
