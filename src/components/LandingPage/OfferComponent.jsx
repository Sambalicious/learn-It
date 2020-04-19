import React, { Fragment,useContext } from 'react'
import StarRating from '../StarRating';
import Button from '../DashBoardComponent/Button';
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { GlobalContext } from '../../App';

toast.configure()
const OfferComponent = ({coverImage, title, description, author, id, video}) => {

    const {handleAddContent } = useContext(GlobalContext)
    const addCourseToFav = () =>{
        toast.success('Course has been added to Favourite !');

      
        
        const localState = {
          coverImage,
           title,
          description,
           author,
           id, 
           video
        }


        var addToLocalStorageArray = function (courseData, value) {

            // Get the existing data
            var localState = localStorage.getItem(courseData);
        
            // If no localState data, create an array
            // Otherwise, convert the localStorage string to an array
            localState = localState ? localState.split(',') : [];
        
            // Add new data to localStorage Array
            localState.push(value);
        
            // Save back to localStorage
            localStorage.setItem(courseData, localState.toString());
        
        console.log(addToLocalStorageArray);
{/** 
            // Get the existing data
var existing = localStorage.getItem('courseData');

// If no existing data, create an array
// Otherwise, convert the localStorage string to an array
existing = existing ? JSON.parse(existing) : {};

// Add new data to localStorage Array
existing['drink'] = 'soda';

// Save back to localStorage
localStorage.setItem('courseData', JSON.stringify(existing));


        var obj = JSON.parse( localStorage.getItem('obj') ) || [] ;
        
        localStorage.setItem('CourseData', JSON.stringify(localState));
        obj.push(localState)
        console.log(obj)
       */} 
    }
}
    

    return ( 
        <Fragment>

            <div className="justify-center mx-2 mb-4 transition duration-500 ease-in-out transform sm:container md:shadow-xl sm:shadow-md md:flex hover:-translate-y-1 hover:scale-105">

                    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
                        <img className="w-full" key={id} src={coverImage} alt="course_image"/>
                    <div className="px-6 py-4">
                        
                    <div className="mb-2 text-xl font-bold">{title}
                   <div>
                       <p className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 rounded-full">Author: {author} </p>
                   </div>
                    </div>
                        <p className="text-base text-gray-700">
                            {description}
                        </p>
                    
                    </div>
                    <div className="px-6 py-4">
                    <Button label={'Add to Favourite'} onSubmit={addCourseToFav} />
                    <StarRating />  
                    </div>


            </div>
        </div>
        </Fragment>
     );
}
 
export default OfferComponent;