import React from 'react';
import AvatarComp from './AvatarComp'

import Form from './Form';




const DashBoard = () => {
    return ( 
        <div>
            <AvatarComp />
            <h2 className="mb-8 font-bold text-center text-indigo-500">CREATE CONTENT </h2>
            <Form />
        </div>
     );
}
 
export default DashBoard;