import React, {useEffect,useContext} from 'react';
import { Helmet} from 'react-helmet';
import { StoreContext } from '../../../provider/store';
import StudentComponent from './StudentComponent'

const StudentDashBoard = () => {
  const {course} = useContext(StoreContext)
  const {courses, handleAddCourseToFav} = course
 
    return ( 
        <>
            <Helmet>
               <title>Learn-It | Student Dashboard</title>
            </Helmet>
           <StudentComponent />
        </>
     );
}
 
export default StudentDashBoard;