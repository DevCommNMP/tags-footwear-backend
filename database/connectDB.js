
//importing mongoose
const mongoose=require("mongoose");
const DB_URL=process.env.DB_URL ;
const DB_URL2="mongodb://127.0.0.1:27017/tags-footwear"
//connecting to database  
const dbConnect=async()=>{
    try{
        //added to prevent deprecation warning  for strict Query
        mongoose.connect(DB_URL||DB_URL2) 
        console.log("db connected");
    }

    catch(error){
        
        console.log(error.message); 
    }
}

module.exports= dbConnect;