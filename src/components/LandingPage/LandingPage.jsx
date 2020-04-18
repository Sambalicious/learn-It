import React from 'react';
import CarouselPage from './CarouselPage';
import LearnWithUs from './LearnWithUs';
import peter from '../../utils/img/peter.jpeg'

const LandingPage = () => {
    return ( 
        <div>
            <CarouselPage />
            <LearnWithUs  pics={peter} />
        </div>
     );
}
 
export default LandingPage;