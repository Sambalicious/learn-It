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

        localStorage.setItem('pics', coverImage);
        localStorage.setItem('title', title);
        localStorage.setItem('description', description);  
        localStorage.setItem('author', author); 
        localStorage.setItem('id', id);
        localStorage.setItem('video', video);
        handleAddContent({
          coverImage,
           title,
          description,
           author,
           id, 
           video
        })
            localStorage.setItem('courseData', JSON.stringify(handleAddContent));
        
    }

    return ( 
        <Fragment>

            <div className="justify-center mx-2 mb-4 sm:container md:shadow-xl sm:shadow-md md:flex">

                    <div className="max-w-sm rounded overflow-hidden shadow-lg  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
                        <img className="w-full" key={id} src={coverImage} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        
                    <div className="font-bold text-xl mb-2">{title}
                   <div>
                       <p className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 rounded-full">Author: {author} </p>
                   </div>
                    </div>
                        <p className="text-gray-700 text-base">
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