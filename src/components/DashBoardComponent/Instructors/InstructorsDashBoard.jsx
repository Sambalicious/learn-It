import React from 'react';
import DashBoard from './DashBoard';
import { Helmet} from 'react-helmet';

const InstructorsDashBoard = () => {
    
    return ( 
        <>
          <Helmet>
               <title>Learn-It | Instructor DashBoard</title>
          </Helmet>
             <DashBoard/>
        </>
     );
}
 
export default InstructorsDashBoard;