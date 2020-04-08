import React, {useState, useContext} from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { GlobalContext } from '../../App';
import ls from 'local-storage'


 
const Login = () => {
  const {handleLogin} =useContext(GlobalContext)
  
   const [state, setState] = useState(null)
   

  const responseGoogle = response => {
    handleLogin(response.profileObj)
    setState(response.profileObj);
    const {name, email, imageUrl } = response.profileObj
    
    ls.set('name', name)
    ls.set('email', email)
    ls.set('image', imageUrl)
  }

  const logout = () => {
    setState(null);
    ls.set('name', '');
    ls.set('email', '');
    ls.set('image', '')
  }
  
    return ( 
        <div> 
            
         {
           !state ? <GoogleLogin 
           clientId="642784607442-q1fl97dg1ulb5dvf125thfi01r5usbd4.apps.googleusercontent.com"
           render={renderProps  =>  (
             
             <button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
              onClick={renderProps.onClick} disabled={renderProps.disabled}>
               Login with Google</button>
           )}
           
           buttonText="Login"
           onSuccess={responseGoogle}
           onFailure={responseGoogle}
           isSignedIn={true}
           cookiePolicy={'single_host_origin'}
         /> : <div className="flex justify-between mt-4">
          <h1 className="text-teal-200 uppercase hover:text-white md:mr-6 text-bold"> Hello {state.name}! </h1>    
         <GoogleLogout
         clientId="642784607442-q1fl97dg1ulb5dvf125thfi01r5usbd4.apps.googleusercontent.com"
         buttonText="Logout"
         onLogoutSuccess={logout}
         className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"> 
       </GoogleLogout>
       
       </div>  
         }
            
        </div>
     );
}
 
export default Login;



