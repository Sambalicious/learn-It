import React from 'react';
import { Helmet} from 'react-helmet';
import StudentComponent from './StudentComponent'

const StudentDashBoard = () => {
   
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