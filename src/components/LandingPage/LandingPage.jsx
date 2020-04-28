import React from 'react';
import CarouselPage from './CarouselPage';
import LearnWithUs from './LearnWithUs';
import peter from '../../utils/img/peter.jpeg'
import TopCourses from './TopCourses';
import TeachWithUs from './TeachWithUs';

const LandingPage = () => {
    return ( 
        <>
            <CarouselPage />
            <TopCourses />
            <LearnWithUs  pics={peter} />
            <TeachWithUs />
        </>
     );
}
 
export default LandingPage;