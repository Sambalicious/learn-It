import React from 'react';





const LearnWithUs = ({ pics}) => {
    return ( 
        <div>
           <div className="container xl:flex justify-around md:m-20 justify-between">
                <div className="xl:mr-10 xl:flex-shrink-0">
                    <img  className="md:w-full sm:object-cover  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src={pics} alt="Learn_With_Us"/>
                   
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 align-middle">
                <h4 className="mb-4 text-lg font-bold">Transform your life through education</h4>
                <p className="mt-2"> 
                Peter Drury launched a new career in software development by taking courses on Learn-It. We can help you achieve your dreams.
                </p>
                <p className="mt-2 text-gray-600"> January this year, i made a resolution to learn software development because i had always wanted to do that for a long time.
                    A friend of mine introduced me too Learn-It and ever since then, i have learnt so much from their incredible instructors. i just got a job at Venture Garden Group as a Frontend Engineer. 
                </p>
              <p className="mt-2 text-gray-600">I can't be more happier. i will recommend Learn-It for anyone, anyday.</p>
            </div>      
                
            </div>

        </div>
     );
}
 
export default LearnWithUs;