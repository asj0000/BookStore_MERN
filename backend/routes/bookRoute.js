import express from "express"

import { Book } from "../models/bookModels.js"

const router = express.Router()

//Route to Save a new Book
router.post('/' , async (req,res)=>{
     
  try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
          return res.status(400).send({
            message:'All fields are mandatory'
          })
        } 
        
        const newBook = {
          title: req.body.title,
          author: req.body.author,
          publishYear: req.body.publishYear
        }

        const book  = await Book.create(newBook)

        return res.status(201).send(book);
    
  }catch(error){
       console.log(error)
      res.status(500).send({message: error.message})
  }

})

//Route to get all books
router.get('/' , async(req,res)=>{
  
  try{ 

      const allBooks = await Book.find({});
      
      res.status(200).json({          //The response will look like 
                                      //an object
        count: allBooks.length,
        data: allBooks
      });

  }catch(error){
    console.log(error)
    res.status(500).send({message: error.message})
  }

})

//Route to get one Book by id
router.get('/:id' , async(req,res)=>{
 
  try{
    const {id} = req.params 
    const book = await Book.findById(id)

    res.status(200).json(book);

  }catch(error){
    console.log(error)
    res.status(500).send({message: error.message})
  }
     
})

//Route to update a Book
router.put('/:id' , async(req,res)=>{
   
  try{
         
        if(!req.body.title || !req.body.author || !req.body.publishYear){
          return res.status(400).send({
            message:'All fields are mandatory'
          })
        } 

        const {id} = req.params

        const updatedBook = await Book.findByIdAndUpdate(id , req.body)

        if(!updatedBook){
          res.status(404).json({message:"Book not found"})
        }

        res.status(200).json({message:"Book updated successfully"})
       

    }catch(error){
      console.log(error)
      res.status(500).send({message: error.message})

    }
})

//Route to delete a book
router.delete('/:id' , async(req,res)=>{
     try{

      const {id} = req.params;

      const deleted = await Book.findByIdAndDelete(id)

      if(!deleted){
        res.status(404).json({message:"Book not found"})
      }

      res.status(200).json({message:"Book deleted successfully"})

     }catch(error){
      console.log(error)
      res.status(500).send({message: error.message})

    }
  
})

export default router