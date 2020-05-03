import React, {useState, useContext,} from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import {useHistory} from 'react-router';
import {StoreContext} from '../../provider/store'


 
const Login = () => {
  // the handleLogin action from GlobalContext
  //const {handleLogin} = useContext(GlobalContext)

   const {auth} = useContext(StoreContext);
  
      const {handleLogin} = auth
  //initialized and empty state
    const [state, SetState] = useState(null)
   
    ///initialized fullname
  const [fullname, setFullname] = useState('');

  
  const history = useHistory();

   /////function that is called when a user clicks signs-in
  const responseGoogle = response => {
    ///dispatch an action
    handleLogin(response.profileObj)
    //The response gotten from the request is then stored in this state
    //fullname is then extracted

      SetState(response.profileObj);
      const {name} = response.profileObj
        setFullname(name)    
        
  }
  
  ///handle logout, clear localStorage and reload the page

    const logout = () => {
      SetState(null)  
      history.go(0) 
      localStorage.clear()
  }
  
  
    return ( 
        <div> 
            
         {  /////if there is no state, login button is displayed otherwise Logout button is displayed
           !auth.isLoggedIn ? <GoogleLogin 
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



