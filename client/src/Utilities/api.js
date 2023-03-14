import axios from 'axios'

const server = "localhost:3000"

export const userSignUp = async (user_data) =>{
    try{
        const signupResponse = await axios.post(`{server}/signup`, user_data)
        return signupResponse
    }
    catch(error){
        console.log(error)
    }
}

export const userLogin = async (user_data) =>{
    try{
        const singupResponse = await axios.post(`{server}/login`, user_data)
    }
    catch(error){
        console.log(error)
    }
}