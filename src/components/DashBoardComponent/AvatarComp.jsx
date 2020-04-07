import React, {useContext} from 'react';
import { Avatar, AvatarBadge, Stack } from "@chakra-ui/core";
import { GlobalContext } from '../../App';



const AvatarComp = () => {
     const {state} =  useContext(GlobalContext)
     console.log(state)
    return ( 
        
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                
             </div>
            <div class="mt-4 md:mt-0 md:ml-6">
               
                    <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
                         
                </div>
            </div>
     );
}
 
export default AvatarComp;