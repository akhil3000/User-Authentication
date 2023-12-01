const User=require('../models/user');
const express=require("express");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const signupSchema=require("../middleware/joi-validation")
const loginUser=async(req,res)=>{
    try{
        const {username,password}=req.body;//Fetching username and password from request
        const dbUser=await User.findOne({username});
        const isPasswordSame= await bcrypt.compare(password,dbUser.password);
        if(isPasswordSame){
          const token=jwt.sign({username:dbUser.username,phonenumber:dbUser.phonenumber},process.env.JWT_SECRET);
          res.send({token})
    }
    else{
        throw Error("Password not same")
    }

  }catch(error){

    res.status(401).send("Unauthorized");
  }
    
  }

  const registerUser=async(req,res)=>{
    try{
    let{password,phonenumber}=req.body;
    password=await bcrypt.hash(password,10);

    const isUniqueNumber=await User.findOne({phonenumber});
    if(!isUniqueNumber)
    {
    const dbUser=await User.create(req.body);
    res.status(200).send("Sucessfully registerd");
    }
    else
    {
        throw error("Phone Number already exsists") 
    }
  }catch(error)
  {
    res.status(400).send("phone number already exsists");
  }
}





module.exports={loginUser,registerUser}