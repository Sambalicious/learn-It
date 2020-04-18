import React from 'react';
import network from '../../utils/img/nice2.gif'


const NetworkError = () => {
    return ( 
        <div>   
               <div className="bg-white w-screen md:flex justify-center">
                   <img className src={network} alt="access_denied" />
               </div>
        </div>
     );
}
 
export default NetworkError;