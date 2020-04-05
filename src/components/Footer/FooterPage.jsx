import React from 'react';
import logo from '../../utils/img/logo.png'



const FooterPage = () => {
    return ( 
       <div>
           <div className="md:flex items-left justify-between flex-wrap bg-indigo-900 p-6">
            <div className="md:flex">
                <h3 className="md:text-center text-teal-200 hover:text-white">Download the App</h3>
                <p className="md:text-center text-teal-200 hover:text-white">It's even better on the Phone</p>
                <img className ="ml-4" src={logo} alt="Apple logo" />
                <img className ="ml-4" src={logo} alt="Apple logo" />
            </div>
              
            <div className="md:flex">
                    <h5 className="text-teal-200 hover:text-white">Help and Privacy</h5>
                    <p className="text-teal-200 hover:text-white">Terms and Conditions</p>
                    <p className="text-teal-200 hover:text-white">Contact Us</p>
                    <p className="text-teal-200 hover:text-white">About</p>

            
            </div>
            <p className="md:flex text-teal-200 hover:text-white">Copyright &copy; 2020</p>
        </div>
         
       </div>
    )
}
 
export default FooterPage;