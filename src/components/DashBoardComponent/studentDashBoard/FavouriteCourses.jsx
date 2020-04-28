import React from 'react';
import StarRating from '../../OtherPages/StarRating'
import ReactPlayer from 'react-player'


const FavouriteCourses = ({title, description, author, video}) => {


        
       
    return ( 
        <div>
            
              <div className="mx-2 mb-4 w-auto sm:container md:shadow-xl sm:shadow-md md:flex">             
                    <div className="overflow-hidden rounded mt-2 shadow-lg ">
                    
                    <ReactPlayer width="425px" height="300px" className="w-full flex justify-center h-64" controls url={video} />
                    <div className="px-6 py-4">

                    <div className="mb-2 text-xl text-purple-900 font-bold">{title}<div>
                        <p className="inline-block text-purple-600 px-3 py-1 text-sm font-semibold text-gray-700 rounded-full">Author: {author} </p>
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