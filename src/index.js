import dotenv from "dotenv";
import connectDB from "./db/index.js"

dotenv.config({
    path:"./.env"
})

console.log("MONGO_URI:", process.env.MONGO_URI);
connectDB();

// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         console.log("Connected to Mongo_DB");
//         app.on("error",(error)=>{
//             console.log("ERRR:", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is litsening on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// })()