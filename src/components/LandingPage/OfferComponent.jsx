import React, { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Button from '../DashBoardComponent/Button';
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreContext } from '../../provider/store';


toast.configure()
const OfferComponent = ({coverImage, title, description, author, id, video}) => {

    return ( 
        <>

            <div className="justify-center mx-2 mb-4 transition duration-500 ease-in-out transform sm:container md:shadow-xl sm:shadow-md md:flex hover:-translate-y-1 hover:scale-105">

                    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
                        <img className="w-full h-64" key={id} src={coverImage} alt="course_image"/>

                    <div className="px-6 py-4"> 
                    <div className="mb-2 text-xl font-bold text-purple-900">{title} <div>
                       <p className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-purple-600 rounded-full">Author: {author} </p>
                   </div>
                    </div>
                        <p className="text-base text-gray-700">
                            {description}
                        </p>
                    
                    </div>
                    <div className="px-6 py-4">
                 <Link to={`/courses/${id}`}> <Button label={'Enroll'}/> </Link>
                    
                    </div>


            </div>
        </div>
        </>
     );
    };
 
export default OfferComponent;