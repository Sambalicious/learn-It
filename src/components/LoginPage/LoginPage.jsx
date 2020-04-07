import React, {useState, useContext} from 'react';
import GoogleLogin from 'react-google-login';
import { GlobalContext } from '../../App';


 
const Login = () => {
  const {handleLogin, handleLogOut} =useContext(GlobalContext)
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [url, setUrl] = useState('');
   

  const responseGoogle = response => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
   
  }
  
    return ( 
        <div>
          <h1> {name} </h1>
          <h1>{email} </h1>
          <img src={url} alt="profile_pics"/>
           <GoogleLogin 
    clientId="642784607442-q1fl97dg1ulb5dvf125thfi01r5usbd4.apps.googleusercontent.com"
    render={renderProps  =>  (
      
      <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
       onClick={()=>handleLogin(renderProps.onClick)} disabled={renderProps.disabled}>
        Login with Google</button>
    )}
    
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    isSignedIn={true}
    cookiePolicy={'single_host_origin'}
  />
        </div>
     );
}
 
export default Login;



