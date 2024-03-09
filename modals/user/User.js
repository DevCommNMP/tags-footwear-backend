// Importing mongoose
const mongoose = require('mongoose');
// Importing bcrypt
const bcrypt = require('bcryptjs');
// Importing crypto for generating tokens
const crypto = require('crypto');

// Creating user schema
const userSchema = new mongoose.Schema({
    // First name of the user
    firstName: {
        // required: [true, 'First name is required'],
        type: String,
    },
    // Last name of the user
    lastName: {
        // required: [true, 'Last name is required'],
        type: String,
    },
    // Gender of the user (optional)
    gender: {
        type: String,
    },
    // Profile photo URL (default avatar)
    profilePhoto: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png',
    },
    // Email of the user
    email: {
        required: [true, 'Email is required'],
        type: String,
    },
    username:{
        required:[true,"Username is required"],
        type:String,
    },
    // Password of the user
    password: {
        required: [true, 'Password is required'],
        type: String,
    },
    // Phone number of the user
  
    // Flag indicating if the user is an admin
    isAdmin: {
        type: Boolean,
        default: false,
    },
    // Role of the user (Admin, User, Guest)
    role: {
        type: String,
        enum: ['Admin', 'User', 'Guest'],
    },
    // Flag indicating if the user's account is verified
    isAccountVerified: {
        type: Boolean,
        default: false,
    },
    // Token for account verification
    accountVerificationToken: {
        type: String,
    },
    // Expiration time for account verification token
    accountVerificationTokenExpires: {
        type: Date,
    },
    // Timestamp for account creation
    accountCreated: {
        type: Date,
        default: Date.now,
    },
    // Flag indicating if the user's account is active
    active: {
        type: Boolean,
        default: false,
    },
}, {
    // Configuration for converting virtuals to JSON
    toJSON: {
        virtuals: true,
    },
    // Configuration for converting JSON to object
    toObject: {
        virtuals: true,
    },
    // Automatically add timestamps for createdAt and updatedAt
    timestamps: true
});

// Pre middleware to hash the password before saving
userSchema.pre("save", async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});

// Method to compare entered password with hashed password
userSchema.methods.isPasswordMatched = async function(enteredPassword) {
    try {
        return await bcrypt.compare(enteredPassword, this.password);
    } catch (error) {
        throw error;
    }
};

// Method to generate account verification token
userSchema.methods.createAccountVerificationToken = async function() {
    try {
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto.createHash("sha256").update(verificationToken).digest("hex");
        this.accountVerificationToken = hashedToken;
        const expirationTime = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
        this.accountVerificationTokenExpires = expirationTime;
        return verificationToken;
    } catch (error) {
        throw error;
    }
};

// Method to generate password reset token
userSchema.methods.createPasswordResetToken = async function() {
    try {
        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
        this.passwordResetToken = hashedToken;
        const expirationTime = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
        this.passwordResetExpires = expirationTime;
        return resetToken;
    } catch (error) {
        throw error;
    }
};

// Compiling schema into model
const User = mongoose.model('User', userSchema);
module.exports = User;
