import React from 'react';
import CarouselPage from './CarouselPage';
import Offers from './Offers';

const LandingPage = () => {
    return ( 
        <div>
            <CarouselPage />
            <Offers label={"Available Courses"}/>
        </div>
     );
}
 
export default LandingPage;