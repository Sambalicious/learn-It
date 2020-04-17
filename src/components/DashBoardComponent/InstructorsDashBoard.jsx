import React, { useContext } from 'react'
import { GlobalContext } from '../../App';
import DashBoard from './DashBoard';
import CannotAccessPage from './CannotAccessPage';




const InstructorsDashBoard = () => {
    const {state} = useContext(GlobalContext)
    return ( 
        <div>
        
             <DashBoard /> 
        
        </div>
     );
}
 
export default InstructorsDashBoard;