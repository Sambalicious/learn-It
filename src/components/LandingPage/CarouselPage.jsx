import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import alpha from '../../utils/img/alpha.png';
import beta from '../../utils/img/beta.png';
import palms from '../../utils/img/palms.svg';
import palms2 from '../../utils/img/palms2.png';
import palms3 from '../../utils/img/palms3.svg';
import palms4 from '../../utils/img/palms4.jpg';



const CarouselPage = () => {
    return ( 
        <div>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src={palms} alt="slide_photos" />
                    <button className="bg-red-400 text-white">Get started</button>
                
                </div>
                <div>
                    <img src={beta} alt="slide_photos" />
                    <button className="bg-red-400 text-white">Get started</button>
                
                </div>
                <div>
                    <img src={alpha} alt="slide_photos" />
                    <button className="bg-red-400 text-white">Get started</button>
                    
                </div>
                <div>
                    <img src={palms2} />
                    <button className="bg-red-400 text-white">Get started</button>
                
                </div>
                <div>
                    <img src={palms3} alt="slide_photos" />
                    <button className="bg-red-400 text-white">Get started</button>
                    
                </div>
                <div>
                    <img src={palms4} alt="slide_photos" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
     );
}
 
export default CarouselPage;