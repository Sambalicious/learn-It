import React, {useState, useContext} from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import {GlobalContext} from '../../App';
import {useHistory} from 'react-router';


 
const Login = () => {
  // the handleLogin action from GlobalContext
  //const {handleLogin} = useContext(GlobalContext)

    const { handleLogin }  = useContext(GlobalContext);
  //initialized and empty state
    const [state, SetState] = useState(null)
   
    ///initialized fullname
  const [fullname, setFullname] = useState('');

  
  const history = useHistory();
   /////function that is called when a user successfully signs in
  const responseGoogle = response => {
      
    ///store response in the handleLogin button
    handleLogin(response.profileObj)

    //The response gotten from the request is then stored in this state
    
      SetState(response.profileObj);
      const {name} = response.profileObj
        setFullname(name)    
    
    
  }
  ///handle logout and reload the page
  const logout = () => {
      SetState(null)  
      history.go(0) 
  }
  
    return ( 
        <div> 
            
         {  /////if there is no state, login button is displayed otherwise Logout button is displayed
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
          <h1 className="text-teal-200 capitalize hover:text-white md:mr-6 text-bold"> hello {fullname}! </h1>    
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



