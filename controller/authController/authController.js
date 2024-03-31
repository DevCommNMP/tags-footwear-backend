const generateToken = require("../../config/token/generateToken");
const User = require("../../modals/user/User");
const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const jwt=require('jsonwebtoken')
const registerUser = expressAsyncHandler(async (req, res) => {
  
  try {
    // console.log(req.body);
    const { email, username, password } = req.body;
    console.log(email);
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const user = await User.create({ email, username, password });
    const token = await generateToken(user._id);
    const BASE_URL=`${process.env.BASE_URL}/verify-account/${token}`;
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
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
      subject: "Verify your Account", // Subject line
      text: "Please verify your account", // Plain text body
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
                                                >Verify Your Email Account</strong
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
                                            Hey ${user.username}, We're thrilled to
                                            have you on board at
                                            <strong>Tags Footwear!</strong> To
                                            finalize your registration, please click
                                            the link below to verify your email
                                            address:
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
                                                    >Confirm Your Email</strong
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
                                            Since 1976, we are providing curtains
                                            cloth, sofa fabric and furniture
                                            refreshing services in South Extension,
                                            New Delhi. In the year 2026, we will be
                                            celebrating the golden jubilee 50th year.
                                          </p>
                                          <ul>
                                            <li>
                                              N-14, South Extension Part 1 New
                                              Delhi-110049
                                            </li>
                                            // <li>011-24622572, 011-24610143</li>
                                            <li>+91-1234567890, +91-1234567899</li>
                                            <li>info@nationalmarketingprojects.com</li>
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
                                              >The Panipat Handloom
                                              <span
                                                id="c2e0ec35-b4ce-44fc-9c78-fa5cec49c8ec"
                                                >@2023</span
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
                                                      href="https://www.designedwithbee.com/"
                                                      style="
                                                        color: #9d9d9d;
                                                        text-decoration: none;
                                                      "
                                                      target="_blank"
                                                      >Developed & Designed by:
                                                      <strong
                                                        >Prince Sachdeva</strong
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

    // Call sendMaij- me() + 10 * 60 * 1000); // Add 10 minutes in milliseconds
    const currentDate = new Date();

    // Add 10 minutes to the current date
    const expiryDate = new Date(currentDate.getTime() + 10 * 60000); // 10 minutes * 60000 milliseconds
    
    const updateUser = User.findByIdAndUpdate(user._id, {
      accountVerificationToken: token,
      accountVerificationTokenExpires: expiryDate,
    });

    const data = {
      isAccountVerified: updateUser.isAccountVerified,
    };

    await sendMail(transporter, mailOptions);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

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

const login = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    const token = await generateToken(userFound._id);

    if (userFound && (await userFound.isPasswordMatched(password))) {
      res.cookie("authToken", token, { httpOnly: true }).json({
        email: userFound.email,
        userName: userFound.username,
        lastName: userFound.lastName,
        profileImage: userFound.profilePhoto,
        isAdmin: userFound.isAdmin,
        token: token,
      });
    } else {
      return res.status(401).json({ message: "Invalid Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const isAuthenticated = (req, res) => {
  console.log("User is authenticated");
  return;
  // You can implement your authentication logic here
};
const verifyAccount = async (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }
  const token = authHeader.split(' ')[1];

  try {
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    console.log('Decoded payload:', decoded);
    console.log(decoded.id);

    const user = await User.findByIdAndUpdate(decoded.id, {
      isAccountVerified: true,
    });

    console.log(user);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ isAccountVerified: true });
  } catch (err) {
    // Token is invalid or expired
    console.error(err);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
  
  // After verifying the account, redirect the user
  // res.redirect(`${process.env.BASE_URL}/verify-account`);
  // Note: You can't redirect a client from an API endpoint. Redirects are typically done from browser-side or through client-side frameworks like React.
};

module.exports = verifyAccount;

module.exports = {
  registerUser,
  login,
  isAuthenticated,
  verifyAccount
};
