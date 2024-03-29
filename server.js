// Import the Express.js library
const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
// Create an instance of the Express application
const app = express();

// Import and configure the dotenv library to load environment variables
const dotenv = require("dotenv");
dotenv.config();

// Import the CORS middleware library
const cors = require("cors");
const dbConnect = require('./database/connectDB');
const seedData=require('./seed')
// Define CORS middleware configuration
// Define an array of allowed origins
const allowedOrigins = [
    'http://localhost:5173',
    'https://tags-website-frontend.vercel.app',
    
];

// Define CORS middleware configuration
const corsOptions = {
    origin: function (origin, callback) {
        // Check if the origin is allowed or if it's undefined (e.g., direct access)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log(callback)
            callback(new Error('Access denied'));
        }
    },
    // You can include other CORS options here as needed
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Use the CORS middleware with the specified options
app.use(cors(corsOptions));
app.use(express.static('assets'));
dbConnect()
seedData();
// Define the port number to listen on, using the environment variable PORT or default to 5000
const authRoute=require('./routes/authRoutes/authRoute');
const productsRoute=require('./routes/productRoutes/productsRoutes');
const reviewroutes=require('./routes/reviewRoutes/reviewRoutes')
const categoriesRoute=require('./routes/catogriesRoutes/mainCategoriesRoute/mainCategoriesRoutes')
const premiumLeather=require('./routes/premiumLeatherRoutes/premiumLeatherRoutes')
const subCategories=require('./routes/catogriesRoutes/mainCategoriesRoute/subCategoriesRoutes')
const subCategoriesType=require('./routes/catogriesRoutes/mainCategoriesRoute/subCategoryTypeRoutes')
const wishlist=require('./routes/wishlist/wishlist');
const cart=require('./routes/cartRoutes/cartRoutes')
app.use('/assets/images/productImages', express.static(path.join(__dirname, 'assets/images/productImages')));
app.use('/assets/images/productsubImages', express.static(path.join(__dirname, 'assets/images/productsubImages')));

app.use('/api',authRoute);
app.use('/api',productsRoute);
app.use('/api',reviewroutes);
app.use('/api',categoriesRoute);
app.use('/api',premiumLeather);
app.use('/api',subCategories)
app.use('/api',wishlist)
// app.use('/api',cart);
app.use('/api',subCategoriesType)

//allowing server to use port dynamically 
const PORT = process.env.PORT || 5000;

// Define a route for the root URL ("/") to send a JSON response with a message indicating the server is running
app.get("/", (req, res) => {
    res.json(`server is running on ${PORT} smoothly`);
});

// Start the Express server and listen for incoming requests on the defined port
app.listen(PORT, console.log(`Server is running ${PORT}`));
