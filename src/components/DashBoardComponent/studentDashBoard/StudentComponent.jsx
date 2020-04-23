import React from 'react';
import AvatarComp from '../AvatarComp';
import Offers from '../../LandingPage/Offers'
import FavouriteCourses from './FavouriteCourses';
import MapFavourites from './MapFavourites';


const StudentComponent = () => {
    return ( 
        <div>
             <AvatarComp status={'Student'} />
            <MapFavourites />
        </div>
     );
}
 
export default StudentComponent;