const nodemailer = require("nodemailer");

const sendmail = async(req,res)=> {
    const{email,token}=req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: 'as9467665000@gmail.com',
            pass: 'ddle kjkt haxu vfmz',
        },
    });
    
    const mailOptions = {
        from: {
           name: 'Tags Footwear',
           address:'as9467665000@gmail.com',
        },
        to: `${email}`,

        subject: "Verify your Account", // Subject line
        text: "Plaese verify your account", // Plain text body
        html: `<b>${token}</b>`, // HTML body
    };

    // async..await is not allowed in global scope, must use a wrapper
    const sendMail = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json("Email sent successfully");
        } catch (error) {
            console.error(error);

            res.status(500).json("Failed to send email");
        }
    };

    sendMail(transporter, mailOptions,email,token,);
};

module.exports = {
    sendmail,
};
