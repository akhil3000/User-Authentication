const Joi=require("joi");

const validateuserSchema=Joi.object({
   name:Joi.string().required(),
   username:Joi.string().email().required(),
   password:Joi.string().required(),
   phonenumber:Joi.number().required()
});
 const  validator=async(req,res,next)=>{
   try{
   req.body= await validateuserSchema.validateAsync(req.body);
   next();
   }catch(err){
      return res.status(400).send(err.message)
   }
   // validateuserSchema.validate(req.body);
   // if(error){
   //    return res.status(400).send(error)
   // }
    
} 
module.exports=validator