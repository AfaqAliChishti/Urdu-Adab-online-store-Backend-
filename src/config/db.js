import mongoose from "mongoose";
import dns from "dns";

dns.setServers([
    '8.8.8.8',
    '1.1.1.1'
]);

const connectDB = async ()=>{
    try {
       await mongoose.connect(`${process.env.DB_URL}${process.env.DB_NAME}`)
       await(console.log("Mongoose connected successfully"))
    } catch (error) {
        console.log("Error while connecting to Database", error)
    }
}

export default connectDB;