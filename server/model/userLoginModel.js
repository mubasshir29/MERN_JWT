import mongoose from "mongoose";

const userLoginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userLoginModel = mongoose.model("userLogin", userLoginSchema, "UserLogin")
export default userLoginModel;