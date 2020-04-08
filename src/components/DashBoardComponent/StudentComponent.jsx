import React from 'react';
import AvatarComp from './AvatarComp';
import Offers from '../LandingPage/Offers'


const StudentComponent = ({status}) => {
    return ( 
        <div>
             <AvatarComp status={'Student'} />
            <Offers />
        </div>
     );
}
 
export default StudentComponent;