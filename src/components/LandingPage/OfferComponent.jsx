import React, { Fragment } from 'react'
import StarRating from '../StarRating';
import Button from '../DashBoardComponent/Button';


const OfferComponent = ({pics, title, description, author}) => {
    return ( 
        <Fragment>

            <div className="justify-center mx-2 mb-4 sm:container md:shadow-xl sm:shadow-md md:flex">

                    <div class="max-w-sm rounded overflow-hidden shadow-lg  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                        <img class="w-full" src={pics} alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        
                    <div class="font-bold text-xl mb-2">{title}
                   <div>
                       <p className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 rounded-full">Author: {author} </p>
                   </div>
                    </div>
                        <p class="text-gray-700 text-base">
                            {description}
                        </p>
                    
                    </div>
                    <div class="px-6 py-4">
                    <Button label={'Add to Favourite'} />
                    <StarRating />  
                    </div>


            </div>
        </div>
        </Fragment>
     );
}
 
export default OfferComponent;