import express from "express"
import {  mongoDBurl } from "./config.js"
import mongoose from 'mongoose'
import cors from 'cors'
import router from "../backend/routes/bookRoute.js"
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

const app = express()


//Middleware to handle CORS error
app.use(cors());  //This allows all origins

//Option 2 : Allow origin
// app.use(cors({
//    origin: 'http://localhost:3000',
//    methods: ['GET' , 'POST' , 'PUT' , 'DELETE'],
//    allowedHeaders: ['Content-Type'],
// }));


//use middleware to parse request body
app.use(express.json());


app.get('/', (request, response) => {
     console.log(request);
     return response.status(234).send('Welcome To MERN Stack Tutorial');
   });

//middleware to handle all request of url /books
app.use('/books' , router)


//connect to the db
mongoose.connect(mongoDBurl)
.then(()=>{
       console.log('App connected to the database')
     
       //after connecting server will start
       app.listen(PORT , (req,res)=>{
        console.log(  `SERVER is RUNNING on ${PORT}`)
      })
}).catch((error)=>{ 
     console.log(error)
}) 