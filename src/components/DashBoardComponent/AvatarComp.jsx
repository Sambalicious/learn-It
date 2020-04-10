import React, {useContext} from 'react';
import {GlobalContext} from '../../App';



const AvatarComp = ({status}) => {

  const {state} = useContext(GlobalContext)

  const {name, imageUrl , email} = state.authDetails

  

    return ( 
        
        <div class=" rounded p-6 bg-indigo-500">
            <img class="h-16 w-16 rounded-full mx-auto" alt="profile_image" src={imageUrl} />
            <div class="text-center">
              <h2 class="text-lg font-bold mb-2 uppercase text-white">{name} </h2>
              <div class="text-red-400 font-bold">{status} </div>
              <div class="text-white font-bold"> {email} </div>
             
           </div>
        </div>
     );
}
 
export default AvatarComp;