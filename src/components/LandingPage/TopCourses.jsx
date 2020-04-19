import React from 'react'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom';



const TopCourses = () => {
    return ( 
        <div className="py-5 my-6">
            <h2 className="my-10 ml-8 font-extrabold text-red-900">Top Courses</h2>
            <Link to="/courses">
            <div class="md:grid grid-cols-4 gap-5">
            <CourseCard label={'Web Development'} />
            <CourseCard label={'Business Support'} />
            <CourseCard label={'Marketting & Communication'} />
            <CourseCard label={'Product Management'} />
            <CourseCard label={'Finance Management'} />
            <CourseCard label={'Designs & Development'} />
            <CourseCard label={'Customer Support'} />
            <CourseCard label={'Human Resource'} />
            <CourseCard label={'Photography & Video Editing'} />

       
            </div>
            </Link>
        </div>
     );
}
 
export default TopCourses;