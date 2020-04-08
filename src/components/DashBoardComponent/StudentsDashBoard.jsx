import React, { useContext } from 'react'
import StudentComponent from './StudentComponent';
import { GlobalContext } from '../../App'


const StudentDashBoard = () => {
      const {state} = useContext(GlobalContext)
    return ( 
        <div>
            {
            !state ? '<div><h2> Login with google to use this service<h2></div' :
               <StudentComponent />
            }
        </div>
     );
}
 
export default StudentDashBoard;