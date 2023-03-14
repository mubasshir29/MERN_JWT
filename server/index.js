import express from 'express'
import jwt from 'jsonwebtoken'
import router from './Routes/routes.js'
import dbConnect  from './Database/db.js'
import dotenv from 'dotenv'

dotenv.config()

const app =express()
app.use(express.json())
app.use(router)


dbConnect();

app.listen(3000, (req,res)=>{
    console.log("Server is running on port 3000")
})