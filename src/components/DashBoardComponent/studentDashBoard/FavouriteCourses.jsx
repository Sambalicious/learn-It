import React from 'react';
import StarRating from '../../OtherPages/StarRating'

import ReactPlayer from 'react-player'


const FavouriteCourses = ({title, description, author, id, video}) => {


        
       
    return ( 
        <div>
              <div className="justify-center mx-2 mb-4 transition duration-500 ease-in-out transform sm:container md:shadow-xl sm:shadow-md md:flex hover:-translate-y-1 hover:scale-105">

                    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
                        <ReactPlayer url={video} controls />
                    <div className="px-6 py-4">
                        
                    <div className="mb-2 text-xl font-bold">{title}<div>
                        <p className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 rounded-full">Author: {author} </p>
                    </div>
                    </div>
                        <p className="text-base text-gray-700">{description} </p>
                    </div>
                    
                    <div className="px-6 py-4">
                    
                    <StarRating />
                    </div>


                    </div>
                    </div>
        </div>
     );
}
 
export default FavouriteCourses;