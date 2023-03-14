import User from './../model/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const apiHandler = (req,res)=>{
    res.json({
        "message":"Hey!Welcome to API store"
    })
}
export const loginHandler = async (req,res)=>{
    try{
        //get user input
        const {email,password} = req.body;

       //check all inputs are entered
       if(!(email && password)){
            res.status(400).json({"msg":"All inputs are required"})
       }

       //check if user exists
       const user = await User.findOne({email})

       if(user && (await bcrypt.compare(password, user.password))){
        const token = jwt.sign(
            {user_id: user._id},
            process.env.JWT_SECRET,
            {
                expiresIn:"2h"
            }
        )
        user.token = token

        res.status(200).json(user)
       }
       else res.status(401).json({"msg":"Incorrect credentials"})
    }
    catch(error){
        console.log(error)
    }
}
export const signupHandler = async (req,res)=>{
    try{
        //read all entered inputs
        const {first_name,last_name,email,password} = req.body;

        //Check all the requried fields are entered
        if(!(first_name && last_name && email && password)){
            res.status(400).json({"msg":"All inputs are required"})
        }

        //validate if entered email already exists
        const existUser = await User.findOne({email})
        
        if(existUser){
            console.log("exisUser",existUser)
            res.status(400).json({"msg":"Email already exist, please login"})
        }

        //encrypt password
        const encryptedPassword = await bcrypt.hash(password,10)

        //Create user in database
        const user = new User({...req.body, email: email.toLowerCase() , password: encryptedPassword })
        await user.save()

        //create a token
        const token = jwt.sign(
            {user_id: user._id, email},
            process.env.JWT_SECRET,
            {
                expiresIn: "2h"
            }
        )
        user.token = token
        res.status(201).json(user)
    }
    catch(error){
        console.log(error)
    }
}

export const welcomeHanlder = (req,res)=>{
    console.log("Welcome to post")
    res.status(200).json({"msg":"Welcome to post"})
}