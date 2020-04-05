import React from 'react';
import CarouselPage from './CarouselPage';
import Navbar from '../../Navbar/Navbar'
import FooterPage from '../Footer/FooterPage';

const LandingPage = () => {
    return ( 
        <div>
            <Navbar />
            <CarouselPage />
            <FooterPage />
        </div>
     );
}
 
export default LandingPage;