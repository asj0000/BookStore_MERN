import {useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { useNavigate , useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

const DeleteBook = () => {
  const [loading , setLoading] = useState(false);
  const {id} = useParams()
  const navigate = useNavigate()

  const handleDelete =()=>{
    axios.delete( `http://localhost:3000/books/${id}`)
  .then(()=>{
    setLoading(false)
    navigate('/')

  }).catch((error)=>{
    console.log(error)
    alert('Something went wrong please check console')
    setLoading(false)
  })
       
  }

  return ( 
   
   <div className='p-4'>
        <BackButton />
     <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-x1 w- [600px] p-8 mx-auto'>
      <h3 className='text-2x1'>Are You Sure You want to delete this book?</h3>
         <button
            className='p-4 bg-red-600 text-white m-8 w-full'
            onClick={handleDelete}
         >
            Yes, Delete it
          </button>
        </div>
        </div>
      
    );
}
 
export default DeleteBook;