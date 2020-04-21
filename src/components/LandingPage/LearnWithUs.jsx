import React from 'react';
import Button from '../DashBoardComponent/Button';
import { Link } from 'react-router-dom';





const LearnWithUs = ({ pics}) => {
    return ( 
        <div>
           <div className="container justify-between justify-around px-2 md:px-4 mb-2 lg:m-3 lg:flex ">
                <div className="xl:mr-10 md:flex-shrink-0">
                    <img  className="object-cover transition duration-500 ease-in-out transform md:w-full hover:-translate-y-1 hover:scale-110" src={pics} alt="Learn_With_Us"/>
                   
            </div>
            <div className="mt-4 align-middle md:mt-0 md:ml-6">
                <h4 className="mb-4 text-lg font-bold text-indigo-600">Transform your life through education</h4>
                <p className="mt-2"> 
                Peter Drury launched a new career in software development by taking courses on Learn-It. We can help you achieve your dreams.
                </p>
                <p className="mt-2 text-gray-600"> January this year, i made a resolution to learn software development because i had always wanted to do that for a long time.
                    A friend of mine introduced me too Learn-It and ever since then, i have learnt so much from their incredible instructors. i just got a job at Venture Garden Group as a Frontend Engineer. 
                </p>
                <p className="mt-2 text-gray-600">I can't be more happier. I will recommend Learn-It for anyone, anyday.</p>
                <p className="mt-2 mb-8"> 
                    Like Peter, you too can get Started.
                </p>
                <div className="text-center">
                    <Link to="/courses"> <Button label={'Start Learning'} /></Link>
                </div>
            </div>      
               
            </div>
           
        </div>
     );
}
 
export default LearnWithUs;