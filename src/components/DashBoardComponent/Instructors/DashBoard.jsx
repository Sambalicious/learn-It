import React from 'react';
import AvatarComp from '../AvatarComp'

import Form from './Form';




const DashBoard = () => {
    return ( 
        <div className="bg-pink-100 py-4">
            <AvatarComp status={'Instructor'} />
            <h2 className="my-6 font-bold text-center text-indigo-500">CREATE CONTENT </h2>
            <Form />
        </div>
     );
}
 
export default DashBoard;