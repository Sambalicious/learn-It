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
            <Carousel showArrows={true} autoPlay={true} showStatus={false} infiniteLoop={true} showThumbs={false} dynamicHeight={true}>
                <div>
                    <img src={bg1} alt="slide_photos" />
                    <div className="md:-mt-64 sm:-mt-16 text-center text-white bg-indigo-600">
                        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get started</button>
                     </div>
                   
                
                </div>
                <div>
                    <img src={bg2} alt="slide_photos" />
                    <div className="md-mt-64 text-center text-white bg-indigo-600">
                    <div className="md-mt-64 text-center text-white bg-indigo-600">
                        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get started</button>
                        
                    </div>
                        
                    </div>
                
                </div>
                <div>
                    <img src={bg3} alt="slide_photos" />
                    <div className="md:-mt-64 text-center text-white bg-indigo-600">
                        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get started</button>
                        
                    </div>
                    
                </div>
                <div>
                    <img src={bg4} alt="slide_photos" />
                    <div className="md:-mt-64 text-center text-white bg-indigo-600">
                        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get started</button>
                        
                    </div>
                
                </div>
                <div>
                    <img src={bg5} alt="slide_photos" />
                    <div className="md:-mt-64 text-center text-white bg-indigo-600">
                        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get started</button>
                        
                    </div>
                    
                </div>
                <div>
                    <img src={bg6} alt="slide_photos" />
                    <div className="md:-mt-64 text-center text-white bg-indigo-600">
                        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get started</button>
                        
                    </div>
                    
                </div>
                <div>
                    <img src={bg7} alt="slide_photos" />
                    <div className="md:-mt-64 text-center text-white bg-indigo-600">
                        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get started</button>
                        
                    </div>
                    
                </div>
                <div>
                    <img src={palms4} alt="slide_photos" />
                    <div className="md:-mt-64 sm:-mt-16 text-center text-white bg-indigo-600">
                        <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get started</button>
                        
                    </div>
                </div>
            </Carousel>
        </div>
     );
}
 
export default CarouselPage;