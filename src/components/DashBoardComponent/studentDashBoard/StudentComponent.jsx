import React from 'react';
import AvatarComp from '../AvatarComp';
import MapFavourites from './MapFavourites';



const StudentComponent = (props) => {
   
    return ( 

        <div>
             <AvatarComp status={'Student'} />
            <MapFavourites />
        </div>
     );
}
 
export default StudentComponent;