import React, {useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../../App';
import palms from '../../utils/img/palms.png';
import ls from 'local-storage'



const AvatarComp = ({status}) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [image, setImage] = useState('');

  useEffect(()=>{
    setName(ls.get('name'));
    setEmail(ls.get('email'));
    setImage(ls.get('image'))

  },[])
  
  

    return ( 
        
        <div class=" rounded p-6 bg-indigo-500">
            <img class="h-16 w-16 rounded-full mx-auto" src={image} />
            <div class="text-center">
              <h2 class="text-lg font-bold mb-2 uppercase text-white">{name} </h2>
              <div class="text-red-400 font-bold">{status} </div>
              <div class="text-white font-bold"> {email} </div>
             
           </div>
        </div>
     );
}
 
export default AvatarComp;