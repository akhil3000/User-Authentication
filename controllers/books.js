const Book=require('../models/books');
const express=require('express');

const getAllBooks=async(req,res)=>{
 
    const books=await Book.find({})
    res.send(books)
}


const getBooksByName=async(req,res)=>{
  try{  
  const bookname=req.params.bookname;  
  if(!bookname){
    throw Error("Book name is not given");
  }
  const books=await Book.findById(bookname);
  res.send(books);
  }catch(error)
  {
      res.status(400).send("Book Name is not given");
  }

}


const getBooksByAuthor=async(req,res)=>{
   try{ 
   const author=req.params.author; 
   if(!author){
    throw Error("Author name is not given");
  }
   const books=await Book.find(Book.author);
   res.send(books);
}catch(error)
{
    res.status(400).send("Author Name is not given");
}
}

const getBooksByPublisher=async(req,res)=>{
   try{ 
   const publisher=req.params.publisher;
   if(!publisher){
    throw Error("Publisher name is not given");
  }
   const books=await Book.find(Book.publisher)
   res.send(books);
}catch(error)
{
    res.status(400).send("Publisher Name is not given");
}

}

const getBooksByGenre=async(req,res)=>{
    try{ 
        const genre=req.params.genre;
        if(!genre){
         throw Error("Genre name is not given");
       }
        const books=await Book.find(Book.genre)
        res.send(books);
     }catch(error)
     {
         res.status(400).send("Genre Name is not given");
     }
     

}

const addBook=async(req,res)=>{
   try{ 
   const book=req.body;
   if(!book)
   {
     throw Error("Book details are not given");
   }
   const dbBook=await Book.create(book);
   res.send(dbBook);
   }catch(error)
   {
    res.status(400).send(" Book details are not given");
   }
}

const deleteBook=async(req,res)=>{
   try{ 
   const id=req.params.id;
   if(!id)
   {
      throw Error("The Deleted book Id should be mentioned"); 
   }
   const book=req.body;
   const dbBook=await Book.deleteOne(book);
   res.send(dbBook);
   }catch(error)
   {
    res.status(400).send("The Deleted book Id should be mentioned");
   }

}

const updateBook=async(req,res)=>{
 try{
 const {id:taskID}=req.params;
 if(!{id:taskID})
 {
    throw Error("The Updated book Id should be mentioned"); 
 }
 const book=req.body;
 const dbBook=await Book.findOneAndUpdate({_id:taskID},book,{
    new:true,
    runValidators:true,
 })   
 res.send(dbBook);
 }catch(error)
 {
    res.status(400).send("The Updated book Id should be mentioned");
 }

}

module.exports={getAllBooks,getBooksByName,getBooksByAuthor,getBooksByPublisher,getBooksByGenre,addBook,deleteBook,updateBook}


