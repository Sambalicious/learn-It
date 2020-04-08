import React from 'react';
import playstore from '../../utils/img/playstore.png';
import appstore from '../../utils/img/appstore.png'



const FooterPage = () => {
    return ( 
       <div className="text-center">
           <div className="flex-wrap p-6 bg-indigo-900 items-left">
            <div className="block">
                <h3 className="mb-4 text-center text-teal-200 ">Download the App</h3>
               
                <div className="flex justify-center">
                     <img className ="w-3/12 mr-2 h-2/12 md:w-2/12" src={playstore} alt="Playstore logo" />
                     <img className ="w-3/12 min-w-0 h-2/12 md:w-2/12"  src={appstore} alt="Apple logo" />
                </div>
              
            </div>
              
            <div className="inline-block">
                    <h5 className="text-teal-200 hover:text-white">Help and Privacy</h5>
                    <p className="text-teal-200 hover:text-white">Terms and Conditions</p>
                    <p className="text-teal-200 hover:text-white">Contact Us</p>
                    <p className="text-teal-200 hover:text-white">About</p>
                    <p className="text-teal-200 md:flex">Copyright &copy; 2020</p>

            
            </div>
        
        </div>
         
       </div>
    )
}
 
export default FooterPage;