import React from 'react';
import AvatarComp from '../AvatarComp';
import Form from './Form';
import InstructorCourses from './InstructorCourses';
import Button from '../Button';
import { Link } from 'react-router-dom';




const DashBoard = () => {
    return ( 
        <div className="py-4 bg-pink-100">
            <AvatarComp status={'Instructor'} />
            <div className="flex justify-center mt-4">
                <Link to="/instructor/create"><Button label={'Create New Course'} /></Link> 
           </div>
            <InstructorCourses />
           
        </div>
     );
}
 
export default DashBoard;