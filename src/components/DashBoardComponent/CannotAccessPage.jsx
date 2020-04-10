import React from 'react';
import access from '../../utils/img/Access.jpg'



const CannotAccessPage = () => {
    return ( 
        <div className="container text-center">
                 <h1 className="text-center text-red-500 text-lg my-6 font-bold">Access Denied!</h1>
             <div className="md:flex justify-center">
                 <div>
                    <img src={access} alt="access_denied" />
                 </div>
             <div className="mb-4 mt-20">
                <h2 className="font-bold  mb-2">Ooops! You cannot access this Page unless you are logged In.</h2>
                <p >Click the <strong>Login with Google Button </strong> to gain access </p>
            </div>
            
            </div>
        </div>
           
     );
}
 
export default CannotAccessPage;