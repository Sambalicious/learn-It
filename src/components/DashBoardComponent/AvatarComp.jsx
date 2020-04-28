import React, {useContext} from 'react'
import {StoreContext} from '../../provider/store'



const AvatarComp = ({status}) => {
      const {auth} = useContext(StoreContext);    
      

  const {name, imageUrl , email} = auth.authDetails
    return ( 
        
       <>
         { auth.authDetails ?  <div className="p-6 bg-indigo-500 rounded ">
            <img className="w-16 h-16 mx-auto rounded-full" alt="profile_image" src={imageUrl} />
            <div className="text-center">
              <h2 className="mb-2 text-lg font-bold text-white uppercase">{name} </h2>
              <div className="font-bold text-red-400">{status} </div>
              <div className="font-bold text-white"> {email} </div>
             
           </div>
        </div> : null}
       </>
     );
}
 
export default AvatarComp;