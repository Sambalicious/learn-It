import React from 'react';
import playstore from '../../utils/img/playstore.png';
import appstore from '../../utils/img/appstore.png'



const FooterPage = () => {
    return ( 
       <div className="text-center">
           <div className="items-left flex-wrap bg-indigo-900 p-6">
            <div className="block">
                <h3 className="text-center text-teal-200 mb-4 ">Download the App</h3>
               
                <div className="flex justify-around">
                     <img className ="w-5/12 md:w-3/12 mr-2" src={playstore} alt="Playstore logo" />
                     <img className ="w-5/12 md:w-3/12 min-w-0"  src={appstore} alt="Apple logo" />
                </div>
              
            </div>
              
            <div className="inline-block">
                    <h5 className="text-teal-200 hover:text-white">Help and Privacy</h5>
                    <p className="text-teal-200 hover:text-white">Terms and Conditions</p>
                    <p className="text-teal-200 hover:text-white">Contact Us</p>
                    <p className="text-teal-200 hover:text-white">About</p>
                    <p className="md:flex text-teal-200">Copyright &copy; 2020</p>

            
            </div>
        
        </div>
         
       </div>
    )
}
 
export default FooterPage;