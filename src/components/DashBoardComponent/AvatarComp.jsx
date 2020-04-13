import React, {useContext} from 'react';
import {GlobalContext} from '../../App';



const AvatarComp = ({status}) => {

  const {state} = useContext(GlobalContext)

  const {name, imageUrl , email} = state.authDetails


      
  

    return ( 
        
       <div>
         { state.authDetails ?  <div className=" rounded p-6 bg-indigo-500">
            <img className="h-16 w-16 rounded-full mx-auto" alt="profile_image" src={imageUrl} />
            <div className="text-center">
              <h2 className="text-lg font-bold mb-2 uppercase text-white">{name} </h2>
              <div className="text-red-400 font-bold">{status} </div>
              <div className="text-white font-bold"> {email} </div>
             
           </div>
        </div> : null}
       </div>
     );
}
 
export default AvatarComp;