import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token:{
        type: String
    }
})

const userModel = mongoose.model("user", userSchema, "User")
export default userModel;