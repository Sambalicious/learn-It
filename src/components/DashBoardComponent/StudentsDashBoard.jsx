import React, { useContext } from 'react'
import StudentComponent from './StudentComponent';
import { GlobalContext } from '../../App'


const StudentDashBoard = () => {
      const {state} = useContext(GlobalContext)
            console.log(state)
            
    return ( 
        <div>
            {
                state.authDetails ? <StudentComponent /> :
               ' Login with google to use this service'
            }
        </div>
     );
}
 
export default StudentDashBoard;