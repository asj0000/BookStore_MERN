import { useNavigate } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";

const BackButton = () => {
  
  const navigate = useNavigate()
  const handleBack = ()=>{
      navigate('/')
  }
  
  return ( 
   <button onClick={handleBack}><BsArrow90DegLeft/></button>

   );
}
 
export default BackButton;