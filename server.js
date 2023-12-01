require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=process.env.PORT;
const userRouter=require('./router/user');
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
 });
  
app.use(express.json())
app.use('/api/v1/authentication',userRouter);

app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.listen(port,()=>{
   console.log(`Server is listening to the ${port} `);
})
