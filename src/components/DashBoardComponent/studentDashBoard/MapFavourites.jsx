import React, {  useEffect,useContext, useState, useMemo } from  'react';
import FavouriteCourses from './FavouriteCourses'
import {StoreContext} from '../../../provider/store'
import OfferComponent from '../../LandingPage/OfferComponent';



const MapFavourites = () => {
    const { course } = useContext(StoreContext);
    const {favCourses, getUserFavourites} = course;
    const [loading, setLoading] = useState(true);

    const id = localStorage.getItem('user_id');
    useEffect(()=>{
       getUserFavourites(id);
       setLoading(false)
    }, [])

           
    return ( 
        
        <div className="mb-4 text-center">
        <div className="py-6 text-xl font-bold text-center text-black bg-pink-100 ">Favourites!</div>
        
            {loading ? <div className='flex justify-center my-40 spinner'></div> : null}
            
            <div className="bg-purple-100 md:grid md:grid-cols-3 md:gap-4">
            {!favCourses && 
            <div className="flex justify-center">
                <h3>You haven't added any course to your dashboard yet.</h3>
                </div>}
            {Array.isArray(favCourses) && favCourses.length !== 0 ? favCourses.map((course) =>
            <FavouriteCourses
                    title={course.title}
                    coverImage={course.image}
                    author={course.author} 
                    description={course.description} 
                    video={course.video}
                    key={course.id} 
            />)
           : null }

        </div>                                                      
    </div>
     );
}
 
export default MapFavourites;