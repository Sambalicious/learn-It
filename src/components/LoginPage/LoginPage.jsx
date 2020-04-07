import React from 'react';
import GoogleLogin from 'react-google-login';
import DashBoard from '../DashBoardComponent/DashBoard';
import { Link} from 'react-router-dom';


const dash = () => {
return  <Link to="/dashboard">dash</Link>
}
 
const Login = (response) => {
  console.log(response)
    return ( 
        <div>
           <GoogleLogin 
    clientId="642784607442-q1fl97dg1ulb5dvf125thfi01r5usbd4.apps.googleusercontent.com"
    render={renderProps  =>  (
      
      <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
       onClick={renderProps.onClick} disabled={renderProps.disabled}>
        Login with Google</button>
    )}
    
    buttonText="Login"
    onSuccess={dash}
    onFailure={Login}
    isSignedIn={true}
    cookiePolicy={'single_host_origin'}
  />
        </div>
     );
}
 
export default Login;



