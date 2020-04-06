import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = (response) => {
  console.log(response)
    return ( 
        <div>
           <GoogleLogin 
    clientId="642784607442-q1fl97dg1ulb5dvf125thfi01r5usbd4.apps.googleusercontent.com"
    render={renderProps  =>  (
      
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
        Login with Google</button>
    )}
    
    buttonText="Login"
    onSuccess={Login}
    onFailure={Login}
    isSignedIn={true}
    cookiePolicy={'single_host_origin'}
  />
        </div>
     );
}
 
export default Login;



