import React from 'react';
import Button from '../DashBoardComponent/Button';
import teacher from '../../utils/img/teacher2.jpeg'
import { Link } from 'react-router-dom';

const TeachWithUs = () => {
    return ( 
    
       <div>
            <div className="container p-2 mb-4 transition duration-500 ease-in-out transform shadow lg:m-3 sm:shadow-md xl:shadow-2xl md:m-16 xl:m-20 hover:-translate-y-1 hover:scale-103">
            <div className="justify-between lg:flex md:m-6 lg:wrap sm:p-10">
      <div className="md:mt-4 md:mr-16 md:mt-0 md:ml-6">
         <div className="my-2 text-sm font-bold tracking-wide text-indigo-600 uppercase sm:pt-4 sm:mt-2">Teach on Learn-It</div>
         <p className="mt-2 mb-10 text-gray-600">Top instructors from around the world teach millions of students on Learn-It. We provide the tools and skills to teach what you love. 
        </p>
            <Link to="/instructor"><Button label={'Start Teaching'}/></Link> 
        
        </div>
            <div className="md:flex-shrink-0">
                  <img className="object-cover sm:object-cover md:w-full" src={teacher} alt="Learn_With_us" />
            </div>
       </div>
        </div>

       </div>
    
        

     );
}
 
export default TeachWithUs;
