import React, {useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../../App';
import palms from '../../utils/img/palms.png';
import ls from 'local-storage'



const AvatarComp = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [image, setImage] = useState('');

  useEffect(()=>{
    setName(ls.get('name'));
    setEmail(ls.get('email'));
    setImage(ls.get('image'))

  },[])
  
  

    return ( 
        
        <div class="bg-white bg-purple-100 rounded-lg p-6">
            <img class="h-16 w-16 rounded-full mx-auto" src={image} />
            <div class="text-center">
              <h2 class="text-lg font-bold mb-2 uppercase">{name} </h2>
              <div class="text-purple-500 font-bold">Instructor</div>
              <div class="text-gray-600 font-bold"> {email} </div>
             
           </div>
        </div>
     );
}
 
export default AvatarComp;