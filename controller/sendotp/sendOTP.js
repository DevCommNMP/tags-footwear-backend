const twilio = require('twilio');

// Initialize Twilio client using environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Reference the environment variable without quotes
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Reference the environment variable without quotes
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

const sendOtp = async (recipientPhoneNumber, otp) => {
    try {
        console.log(recipientPhoneNumber);
        console.log(otp);

        const message = await client.messages.create({
            body: `Your OTP is ${otp}`,
            from:'+18082022652',// Use the Twilio phone number from the environment variable
            to: `+${recipientPhoneNumber}`
        });

        console.log(`Message sent with SID: ${message.sid}`);
        return message;
    } catch (error) {
        console.error('Error sending OTP:', error.message);
        throw error;
    }
};

module.exports = {
    sendOtp
};
