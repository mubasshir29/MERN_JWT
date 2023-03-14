import mongoose from "mongoose";

const userSignUpSchema = mongoose.Schema({
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
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userSignupModel = mongoose.model("userSignup", userSignUpSchema, "UserSignup")
export default userSignupModel;