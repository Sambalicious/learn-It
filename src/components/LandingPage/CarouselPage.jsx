import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import bg1 from '../../utils/img/bg1.jpg';
import bg2 from '../../utils/img/bg2.jpg';
import bg3 from '../../utils/img/bg3.jpg';
import bg4 from '../../utils/img/bg4.jpg';
import bg5 from '../../utils/img/bg5.jpg';
import bg6 from '../../utils/img/bg6.jpg';
import bg7 from '../../utils/img/bg7.jpg';
import palms4 from '../../utils/img/palms4.jpg';



const CarouselPage = () => {
    return ( 
        <div>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} dynamicHeight={true}>
                <div>
                    <img src={bg1} alt="slide_photos" />
                    <button className="bg-red-400 text-white">Get started</button>
                
                </div>
                <div>
                    <img src={bg2} alt="slide_photos" />
                    <button className="bg-red-400 text-white">Get started</button>
                
                </div>
                <div>
                    <img src={bg3} alt="slide_photos" />
                    <button className="bg-red-400 text-white">Get started</button>
                    
                </div>
                <div>
                    <img src={bg4} />
                    <button className="bg-red-400 text-white">Get started</button>
                
                </div>
                <div>
                    <img src={bg5} alt="slide_photos" />
                    <button className="bg-red-400 text-white">Get started</button>
                    
                </div>
                <div>
                    <img src={bg6} alt="slide_photos" />
                    <button className="bg-red-400 text-white">Get started</button>
                    
                </div>
                <div>
                    <img src={bg7} alt="slide_photos" />
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