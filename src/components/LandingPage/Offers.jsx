import React, { Fragment } from 'react'
import palms from '../../utils/img/palms.png'
import OfferComponent from './OfferComponent'

const Offers = () => {
    return ( 
        <div className=" text-center mb-4 bg-purple-100">
        <div className="text-black text-center text-xl font-bold py-6 ">OFFERS</div>
    
    <div className="md:grid grid-cols-3 grid-rows-2 gap-4 ">
            
    <OfferComponent pics={palms} course={'The Complete Guide to Project Management'}  />
        <OfferComponent pics={palms} course={'Introduction to Self Development Expertise'} />
        <OfferComponent pics={palms} course={'Learn the principle of Graphics Design'} />
        <OfferComponent pics={palms} course={'Web development Course + Build 10 Projects'} />
        <OfferComponent pics={palms} course={'Artificial Intelligence Mastery'}  />
        <OfferComponent pics={palms} course={'The Principles of Business'} />
        <OfferComponent pics={palms} course={'The Complete Public Speaking Course'}  />
        <OfferComponent pics={palms} course={'Fundamental Approach to Self Discovery'} />
        <OfferComponent pics={palms} course={'Mathematics Made Easy for Kids'}  />

    </div>
        

        </div>
     );
}
 
export default Offers;