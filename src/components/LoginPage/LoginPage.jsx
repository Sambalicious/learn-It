import React, {useState, useContext} from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { GlobalContext } from '../../App';


 
const Login = () => {
  const {handleLogin, handleLogOut} =useContext(GlobalContext)
   const [state, setState] = useState(null)
   

  const responseGoogle = response => {
    handleLogin(response.profileObj)
    setState(response.profileObj);
   
  }

  const logout = () => {
    setState(null)
  }
  
    return ( 
        <div> 
            
         {
           !state ? <GoogleLogin 
           clientId="642784607442-q1fl97dg1ulb5dvf125thfi01r5usbd4.apps.googleusercontent.com"
           render={renderProps  =>  (
             
             <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              onClick={renderProps.onClick} disabled={renderProps.disabled}>
               Login with Google</button>
           )}
           
           buttonText="Login"
           onSuccess={responseGoogle}
           onFailure={responseGoogle}
           isSignedIn={true}
           cookiePolicy={'single_host_origin'}
         /> : <div>
         <h1 className="text-white sm:mb-4 text-bold"> Hello {state.name} </h1>    
         <GoogleLogout
         clientId="642784607442-q1fl97dg1ulb5dvf125thfi01r5usbd4.apps.googleusercontent.com"
         buttonText="Logout"
         onLogoutSuccess={logout}
         className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
       > 
       </GoogleLogout>
       
       </div>  
         }
            
        </div>
     );
}
 
export default Login;



