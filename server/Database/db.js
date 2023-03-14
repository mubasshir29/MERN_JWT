import mongoose from "mongoose";

const dbConnect = async ()=>{
    try{
        mongoose.connect('mongodb+srv://whiteuser:whiteuser@crudapp.wexyfxp.mongodb.net/User?retryWrites=true&w=majority',{
    useUnifiedTopology: true, useNewUrlParser: true})
        console.log("Database connected successfully")
    }
    catch(error){
        console.log("Error in connecting database", error)
    }
}

export default dbConnect;


