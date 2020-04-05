import React from 'react';
import CarouselPage from './CarouselPage';
import Navbar from '../../Navbar/Navbar'
import FooterPage from '../Footer/FooterPage';
import Offers from './Offers';

const LandingPage = () => {
    return ( 
        <div>
            <Navbar />
            <CarouselPage />
            <Offers />
            <FooterPage />
        </div>
     );
}
 
export default LandingPage;