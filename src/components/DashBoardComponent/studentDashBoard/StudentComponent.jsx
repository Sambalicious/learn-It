import React from 'react';
import AvatarComp from '../AvatarComp';
import Offers from '../../LandingPage/Offers'
import FavouriteCourses from './FavouriteCourses';


const StudentComponent = () => {
    return ( 
        <div>
             <AvatarComp status={'Student'} />
            <FavouriteCourses />
        </div>
     );
}
 
export default StudentComponent;