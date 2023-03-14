import express from 'express'
import {apiHandler,loginHandler,signupHandler,welcomeHanlder} from './../controller/userController.js'
import auth from './../middleware/verifyToken.js'

const router = express.Router()

router.get('/api',apiHandler)
router.post('/login',loginHandler)
router.post('/signup',signupHandler)
router.get('/welcome', auth, welcomeHanlder)

export default router;