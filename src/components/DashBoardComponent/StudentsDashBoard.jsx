import React, { useContext } from 'react'
import StudentComponent from './StudentComponent';
import { GlobalContext } from '../../App'
import CannotAccessPage from './CannotAccessPage';


const StudentDashBoard = () => {
      const {state} = useContext(GlobalContext)
            
            
    return ( 
        <div>
            {
                state.authDetails ? <StudentComponent /> :
               <CannotAccessPage />
            }
        </div>
     );
}
 
export default StudentDashBoard;