import React, { Fragment } from 'react'
import StarRating from '../StarRating';


const OfferComponent = ({pics, title, description}) => {
    return ( 
        <Fragment>

            <div className="justify-center mx-2 mb-4 sm:container md:shadow-xl sm:shadow-md md:flex">

<div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src={pics} alt="Sunset in the mountains"/>
 <div class="px-6 py-4">
     
  <div class="font-bold text-xl mb-2">{title}</div>
      <p class="text-gray-700 text-base">
          {description}
    </p>
</div>
<div class="px-6 py-4">
 <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Add to Favourite</button>
 <span>Rating:<StarRating />  </span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
</div>


</div>
</div>
        </Fragment>
     );
}
 
export default OfferComponent;