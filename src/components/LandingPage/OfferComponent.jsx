import React, { Fragment } from 'react'


const OfferComponent = ({pics, course}) => {
    return ( 
        <Fragment>
            <div className="sm:container md:shadow-xl sm:shadow-md mx-2 md:flex justify-center">

<div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src={pics} alt="Sunset in the mountains"/>
 <div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">{course}</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
</div>
<div class="px-6 py-4">
 <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Add to Favourite</button>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
</div>


</div>
</div>
        </Fragment>
     );
}
 
export default OfferComponent;