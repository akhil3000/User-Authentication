const express= require('express')
const router=express.Router()
const validator=require('../middleware/joi-validation')
const jwtVerify=require('../middleware/jwt-middleware')
const {
   loginUser,
   registerUser 
}=require('../controllers/authentication')

 
//router.use(jwtVerify)
router.route('/login').post(loginUser)
router.route('/register').post(validator,registerUser)

module.exports=router