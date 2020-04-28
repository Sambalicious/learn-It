import React, { useContext} from 'react'
import Button from '../DashBoardComponent/Button';
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreContext } from '../../provider/store';


toast.configure()
const OfferComponent = ({coverImage, title, description, author, id, video}) => {

    
      const {course} = useContext(StoreContext);
        const { handleAddCourseToFav}= course

            const data = {
                coverImage,
                 title,
                description,
                 author,
                 id, 
                 video
              }

              
          
        const addCourseToFav = () =>{
                toast.success('Course has been added to your dashboard')        
            handleAddCourseToFav(data)
                
            
            // localStorage.setItem('favouriteCourses', JSON.stringify(courses))
                
    }
    
  
    return ( 
        <>

            <div className="justify-center mx-2 mb-4 transition duration-500 ease-in-out transform sm:container md:shadow-xl sm:shadow-md md:flex hover:-translate-y-1 hover:scale-105">

                    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
                        <img className="w-full h-64" key={id} src={coverImage} alt="course_image"/>

                    <div className="px-6 py-4"> 
                    <div className="mb-2 text-xl text-purple-900 font-bold">{title} <div>
                       <p className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-purple-600 rounded-full">Author: {author} </p>
                   </div>
                    </div>
                        <p className="text-base text-gray-700">
                            {description}
                        </p>
                    
                    </div>
                    <div className="px-6 py-4">
                    <Button label={'Add to Favourite'} onSubmit={addCourseToFav} />
                    
                    </div>


            </div>
        </div>
        </>
     );
    };
 
export default OfferComponent;