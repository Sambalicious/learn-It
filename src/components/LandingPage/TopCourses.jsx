import React from 'react'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom';
import { IconContext} from 'react-icons'
import { FaGlobe, FaShoppingBag, FaCamera , FaBusinessTime} from 'react-icons/fa';
import {GiMegaphone, GiReceiveMoney} from 'react-icons/gi'
import {IoLogoDesignernews} from 'react-icons/io';
import {MdHeadsetMic, MdGroup} from 'react-icons/md';



const TopCourses = () => {
    return ( 
        <div className="px-4 pb-5 my-6 bg-gray-200 md:pt-4">
            <h2 className="py-3 my-4 ml-8 text-3xl font-extrabold text-red-900 md:my-8">Top Courses</h2>
            
                
            <div className="grid-cols-4 gap-5 md:grid">
                
            <IconContext.Provider value={{size:"3rem", color:'orange'}}>
            <Link to="/search?q=web">
            <CourseCard 
                label={'Web Development'} 
                icon={<FaGlobe  />} 
            />
            </Link>

            <Link to="/search?q=business">
            <CourseCard 
                label={'Business Support'}
                icon={<FaBusinessTime />}
             />
             </Link>

            <Link to="/search?q=market">
            <CourseCard 
                label={'Marketing & Communication'}
                icon={<GiMegaphone/>} 
             />
             </Link>

                <Link to="/search?q=manage">
                    <CourseCard
                        label={'Product Management'}
                        icon={<FaShoppingBag />} 
                    />
                </Link>

                <Link to="/search?q=finance">
                    <CourseCard
                        label={'Finance Management'}
                        icon={<GiReceiveMoney />}
                    />
                </Link>

            <Link to="/search?q=design">
            <CourseCard
                label={'Designs & Development'} 
                icon={<IoLogoDesignernews />}
             />
             </Link>

            <Link to="/search?q=customer">
            <CourseCard
                label={'Customer Support'}
                icon={<MdHeadsetMic />} 
            />
            </Link>

            <Link to="/search?q=human">
            <CourseCard
                label={'Human Resource'} 
                icon={<MdGroup />}
             />
             </Link>

            <Link to="/search?q=photo">
            <CourseCard 
                label={'Photography & Video Editing'} 
                icon={<FaCamera />}
             />
            </Link>
       
       </IconContext.Provider>
            </div>
            
        </div>
     );
}
 
export default TopCourses;