let mongoose=require("mongoose");
const bookSchema=new mongoose.Schema({
    bookname:String,
    author:[String],
    publisher:String,
    genre:[String]
})

const Book=mongoose.model("Book",bookSchema);
module.exports=Book;