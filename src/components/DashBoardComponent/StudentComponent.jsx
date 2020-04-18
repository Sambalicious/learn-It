import React from 'react';
import AvatarComp from './AvatarComp';
import Offers from '../LandingPage/Offers'


const StudentComponent = () => {
    return ( 
        <div>
             <AvatarComp status={'Student'} />
            <Offers label={"Favourite Courses"} />
        </div>
     );
}
 
export default StudentComponent;