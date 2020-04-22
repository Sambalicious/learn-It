import React, { Fragment,useContext } from 'react'
import StarRating from '../OtherPages/StarRating'
import Button from '../DashBoardComponent/Button';
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from '../../App';

toast.configure()
const OfferComponent = ({coverImage, title, description, author, id, video}) => {

    
     const {state, handleAddContent} = useContext(GlobalContext)
     const {courses} = state
    

            const data = {
                coverImage,
                 title,
                description,
                 author,
                 id, 
                 video
              }

              
          
        const addCourseToFav = () =>{
                toast.success('Course has been added to Favourite !')        
                handleAddContent(data)
             
                
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
    };
 
export default OfferComponent;