// import 'bootstrap/dist/css/bootstrap.css';
import { FaRocketchat } from "react-icons/fa6";  
import '../galleries.css'
interface Props {  
  image_url: string;  
  descryption: string;   
}  

const Gallary: React.FC<Props> = ({ image_url, descryption}) => {  
  return (  
    <div>  
      <img src={image_url} className = "im"/>  
      <p>{descryption}</p>  
      <FaRocketchat/>
    </div>  
  );  
};  

export default Gallary;  