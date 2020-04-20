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
        <div className="px-5 pb-5 mx-4 my-6 bg-gray-200 md:pt-4">
            <h2 className="py-3 my-10 ml-8 text-3xl font-extrabold text-red-900">Top Courses</h2>
            <Link to="/courses">
                
            <div className="grid-cols-4 gap-5 md:grid">
            <IconContext.Provider value={{size:"4rem", color:'orange'}}>
            <CourseCard label={'Web Development'} icon={<FaGlobe  />} />
            
            <CourseCard label={'Business Support'} icon={<FaBusinessTime />} />
            <CourseCard label={'Marketing & Communication'} icon={<GiMegaphone/>} />
            <CourseCard label={'Product Management'} icon={<FaShoppingBag />} />
            <CourseCard label={'Finance Management'} icon={<GiReceiveMoney />} />
            <CourseCard label={'Designs & Development'}icon={<IoLogoDesignernews />} />
            <CourseCard label={'Customer Support'} icon={<MdHeadsetMic />} />
            <CourseCard label={'Human Resource'} icon={<MdGroup />} />
            <CourseCard label={'Photography & Video Editing'} icon={<FaCamera />} />
            
       
       </IconContext.Provider>
            </div>
            </Link>
        </div>
     );
}
 
export default TopCourses;