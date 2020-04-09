import React, { useContext } from 'react'
import { GlobalContext } from '../../App';
import DashBoard from './DashBoard';




const InstructorsDashBoard = () => {
    const {state} = useContext(GlobalContext)
    return ( 
        <div>
            {
                state.authDetails === '' ? 'Login with Google' : <DashBoard />
            }
        </div>
     );
}
 
export default InstructorsDashBoard;