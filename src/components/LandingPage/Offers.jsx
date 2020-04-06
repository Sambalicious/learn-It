import React, { Fragment } from 'react'
import palms from '../../utils/img/palms.png'
import OfferComponent from './OfferComponent'

const Offers = () => {
    return ( 
        <div className="container bg-purple-100">
        <div className="text-black text-center text-lg font-bold py-6 ">offers</div>
    
    <div className="md:grid grid-cols-3 grid-rows-2 gap-4 ">
            
    <OfferComponent pics={palms} />
        <OfferComponent pics={palms} />
        <OfferComponent pics={palms} />
        <OfferComponent pics={palms} />
        <OfferComponent pics={palms} />
        <OfferComponent pics={palms} />
        <OfferComponent pics={palms} />
        <OfferComponent pics={palms} />
        <OfferComponent pics={palms} />

    </div>
        

        </div>
     );
}
 
export default Offers;