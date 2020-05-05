import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router';
import Button from '../../DashBoardComponent/Button'
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {StoreContext} from '../../../provider/store'


toast.configure()
const FavouriteCourses = ({coverImage, title, description, author, id}) => {

    const {course}= useContext(StoreContext);

    const {removeFavourite} = course;

    const user_id = parseInt(localStorage.getItem("user_id"));

    const deleteFavourite = async() =>{
        await removeFavourite(user_id, id)   
        console.log('delete clicked')
 }

    return ( 
        <>
            <div className="justify-center mx-2 mb-4 transition duration-500 ease-in-out transform sm:container md:shadow-xl sm:shadow-md md:flex hover:-translate-y-1 hover:scale-105">

                    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
                        <img className="w-full h-64" key={id} src={coverImage} alt="course_image"/>

                    <div className="px-6 py-4"> 
                    <div className="mb-2 text-xl font-bold text-purple-900 capitalize">{title} <div>
                       <p className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-purple-600 rounded-full">Author: {author} </p>
                   </div>
                    </div>
                        <p className="text-base text-gray-700">
                            {description}
                        </p>
                    
                    </div>
                    <div className="px-6 py-4">
                 <Link to={`/courses/${id}`}> <Button label={'View Course'}/> </Link>
                    </div>

                    <div>
                        <Button label={'Remove as Favourite'} onClick={deleteFavourite} />
                    </div>


            </div>
        </div>
        </>
     );
    };
 
export default FavouriteCourses;