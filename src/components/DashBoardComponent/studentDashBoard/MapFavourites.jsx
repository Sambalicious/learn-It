import React, {  useEffect,useContext, useState } from  'react';
import OfferComponent from '../../LandingPage/OfferComponent';
import { GlobalContext } from '../../../App';
import FavouriteCourses from './FavouriteCourses'



const MapFavourites = () => {
          const {course, setCourse} = useContext(GlobalContext)
          const {courses} = course
console.log(courses)
          const [loading, setLoading] = useState(true);
        
    useEffect(()=>{
            setCourse(JSON.parse(localStorage.getItem('favouriteCourses')) || [])
            setLoading(false)
            

    },[])
      
    return ( 
        
        <div className="mb-4 text-center">
            
        <div className="py-6 text-xl font-bold text-center text-black bg-pink-100 ">Favourites! </div>
        
            {loading ? <div className='flex justify-center my-40 spinner'></div> : null}
            
            <div className="bg-purple-100 md:grid md:grid-cols-3 md:gap-4">
                {!courses.length && <div className="flex justify-center text-center"><h3>You haven't added any course to your dashboard yet.</h3></div>}
            {Array.isArray(courses) && courses ? courses.map((course) =>
            <FavouriteCourses key={course.id} 
                    title={course.title}
                    coverImage={course.image}
                    author={course.author} 
                    description={course.description} 
                    video={course.VideoUrl}
                    
            />)
           : null }
                </div>
        

           
                                                          
    
    </div>
     );
}
 
export default MapFavourites;