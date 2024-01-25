import mongoose from "mongoose"


//Schema for our Books that we will store in our DB
const bookSchema = mongoose.Schema(
  {
    title :{
      type: String,
      required: true,
    },
    author:{
      type: String,
      required: true
    },
    publishYear:{
      type: Number,
      required: true
    },
  },
  
  {
    timestamps: true,
  }
)


export const Book  = mongoose.model('Books' ,bookSchema)